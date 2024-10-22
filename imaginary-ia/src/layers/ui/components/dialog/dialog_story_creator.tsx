import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Cuento } from '@/layers/core/cuento/cuento';
import { Cuento_Scene } from '@/layers/core/cuento/cuento_scene';
import { Title_Container, Subtitle_Container } from '../../containers/title_container';
import { Grid_Layout } from '../../layouts/grid_layout';
import { Panel_Layout } from '../../layouts/panel_layout';
import { Text_Container } from '../../containers/text_container';
import { Button_Container } from '../../containers/button_container';

interface Dialog_Component_Props {
  close: () => void;
  story: Cuento;
}

const BookContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-amber-200 max-w-2xl w-full rounded-lg shadow-2xl">
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
        
        <div className="prose prose-amber max-w-none text-black">
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

  useEffect(() => {
    if(currentStory.current_scene == null){
      console.log("Historia vacia")
      currentStory.start().then((cuento) => {
        updateStory(cuento)
      })
    }
    console.log(currentStory)
  }, [currentStory])

  currentStory.start().then((cuento) => {
    updateStory(cuento)
  },)

  return (
    <BookContainer>
      {/* <Title_Container title="Continua tu historia" /> */}
      <Grid_Layout>
        <Panel_Layout>
          <Image src="/logo.png" alt="" width={512} height={512} />
        </Panel_Layout>
        <Panel_Layout>
          <Subtitle_Container title="Continua tu historia" />
          <Text_Container text={currentStory.current_scene?.content || "Alabado sea"} />
          <div className="flex flex-wrap justify-center">
            {currentStory.current_scene?.options.map((elem) => (
              <Button_Container 
                key={elem.label}
                label={elem.label}
                onClick={() => {
                  story.create_next_scene(elem);
                }} 
              />
            ))}
          </div>
        </Panel_Layout>
      </Grid_Layout>
    </BookContainer>
  );
};
