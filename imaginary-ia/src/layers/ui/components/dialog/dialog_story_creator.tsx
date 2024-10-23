import { FC, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Cuento } from '@/layers/core/cuento/cuento';
import { Cuento_Option } from "@/layers/core/cuento/cuento_option";
import { Cuento_Scene } from '@/layers/core/cuento/cuento_scene';
import { Title_Container, Subtitle_Container } from '../../containers/title_container';
import { Grid_Layout } from '../../layouts/grid_layout';
import { Panel_Layout } from '../../layouts/panel_layout';
import { Text_Container } from '../../containers/text_container';
import { Button_Container } from '../../containers/button_container';
import { create_and_upload_image } from '@/layers/services/image_generator/i_gen';

interface Dialog_Component_Props {
  close: () => void;
  story: Cuento;
}

const BookContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-amber-200 max-w-5xl w-full rounded-lg shadow-2xl">
      <div className="absolute -left-2 top-0 bottom-0 w-2 bg-amber-900 rounded-l" />
      <div className="absolute -right-2 top-0 bottom-0 w-2 bg-amber-800 rounded-r" />
      
      <div className="absolute inset-y-0 left-1/2 w-6 bg-amber-800" />
      <div className="relative p-8 bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="border-b-2 border-amber-800 mb-6">
          <div className="flex justify-between items-center">
            <div className="h-1 w-12 bg-amber-800" />
            <div className="h-1 w-12 bg-amber-800" />
          </div>
        </div>
        
        <div className="prose prose-amber max-w-none text-black text-justify font-serif">
          {children}
        </div>
        
        <div className="border-t-2 border-amber-800 mt-6">
          <div className="flex justify-between items-center">
            <div className="h-1 w-12 bg-amber-800" />
            <div className="h-1 w-12 bg-amber-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Dialog_Story_Creator: FC<Dialog_Component_Props> = ({ close, story }) => {
  const [currentStory, updateStory] = useState<Cuento>(story);
  const [imageUrl, setImageUrl] = useState<string | null>(null); // Estado para la URL de la imagen
  const hasStartedRef = useRef(false); 

  useEffect(() => {
    if (currentStory.current_scene == null && !hasStartedRef.current) {
      currentStory.start().then(async () => {
        // Espera a que la primera escena esté lista
        const firstScene = currentStory.current_scene;
        if (firstScene) {
          const url = await create_and_upload_image(firstScene.content); // Genera la imagen
          setImageUrl(url); // Actualiza el estado con la URL de la imagen
        }
        updateStory(Object.assign(Object.create(Object.getPrototypeOf(currentStory)), currentStory));
      });
      hasStartedRef.current = true;
    }
  }, [currentStory]);

  console.log(currentStory);
  
  // console.log(JSON.stringify(currentStory, null, 2));

  const handleOptionSelect = async (option: Cuento_Option) => {
    console.log("Opción seleccionada:", option); 
    await currentStory.create_next_scene(option);
    updateStory(Object.assign(Object.create(Object.getPrototypeOf(currentStory)), currentStory));
  };


  return (
    <BookContainer>
      <Title_Container title="Continua tu historia" />
      <Grid_Layout>
      <Panel_Layout>
          {imageUrl ? ( // Muestra la imagen generada
            <Image 
              src={imageUrl}
              alt="Escena de la historia"
              width={512}
              height={512}
              className="aspect-square"
            />
          ) : (
            <Image src="/logo.png" alt="Cargando..." width={512} height={512} className="aspect-square" />
          )}
        </Panel_Layout>
        <Panel_Layout className='p-2 m-2'>
          {/* <Subtitle_Container title="Continúa tu historia" /> */}
          <Text_Container text={currentStory.current_scene?.content || "Historia no disponible"} />
          <div className="pt-3 flex flex-wrap justify-center m-2 gap-3">
          {currentStory.current_scene?.options.map((option, index) => (
            <Button_Container 
              key={index}
              label={option}
              onClick={() => handleOptionSelect(option)}
            />
          ))}
        </div>
        </Panel_Layout>
      </Grid_Layout>
    </BookContainer>
  );
};