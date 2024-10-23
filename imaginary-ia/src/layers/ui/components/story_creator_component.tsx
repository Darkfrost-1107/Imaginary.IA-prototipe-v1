"use client"
import {FC, useRef, useState} from 'react'
import { Grid_Layout } from '../layouts/grid_layout'
import { Padding_Layout, Panel_Layout } from '../layouts/panel_layout'
import { Subtitle_Container, Title_Container } from '../containers/title_container'
import { TextArea_Input } from '../inputs/textarea_input'
import { Select_Input } from '../inputs/select_input'
import { Text_Container } from '../containers/text_container'
import { Range_Input } from '../inputs/range_input'
import { Button_Container } from '../containers/button_container'
import { Cuento } from '@/layers/core/cuento/cuento'
import { title } from 'process'
import { Preview } from '@/layers/core/cuento/preview'
import { Cuento_Scene } from '@/layers/core/cuento/cuento_scene'
import { randomUUID } from 'crypto'
import { Text_Input } from '../inputs/text_input'
import { Dialog_Component } from './dialog/dialog_component'
import { Dialog_Story_Creator } from './dialog/dialog_story_creator'



interface Story_Creator_Props {

}

const Topics_List = ["Aventura", "Fantasía", "Ciencia Ficción", "Terror", "Comedia"]

type Cuento_Generator = {
  story? :Cuento
}
export const Story_Creator_Component : FC<Story_Creator_Props> = () => {

  const desc = useRef<HTMLTextAreaElement>(null)
  const size = useRef<HTMLInputElement>(null)
  const title = useRef<HTMLInputElement>(null)
  const scene_size = useRef<HTMLInputElement>(null)
  const topics = useRef<HTMLInputElement>(null)

  const [cuento, setCuento] = useState<Cuento_Generator>({})
  
  return (
    <Grid_Layout>
        <Panel_Layout>
          
          <Title_Container title="Contenido General" className="p-1 font-pixelify"/>
          <Padding_Layout>
            <Subtitle_Container title="Titulo del Cuento" className="font-pixelify text-3xl pb-1"/>
            <Text_Input props={{
              ref: title
            }}/>
          </Padding_Layout>
          <Padding_Layout>
            <Subtitle_Container title="Descripción del Cuento" className='font-pixelify text-3xl pb-1'/>
            <TextArea_Input props={{
              ref: desc
            }}/>
            {/* <Button_Container label="Generar Cuento" onClick={() => {
              const description = desc.current?.value
              if (!description) {
                console.error("Descripción no proporcionada.");
                return;
              }
              let story = new Cuento(new Preview({
                id: "1",
                titulo: "Cuento de Prueba",
                size: 5
              }))
              setCuento({story})
              let scene: Cuento_Scene = {
                id: "1",
                order: 1,
                content: "",
                image: {
                  url: "",
                },
                options: []
              }
              story.new_scene(scene, description).then((scene) => {
                console.log(scene)
              })
            }}/> */}


          </Padding_Layout>

          {/* <Padding_Layout>
            <Subtitle_Container title="Temática del Cuento" className='font-pixelify text-3xl pb-1'/>
            <Select_Input options={Topics_List} props={{
              ref: topics
            }} />
          </Padding_Layout> */}

        </Panel_Layout>

        <Panel_Layout>
          <Title_Container title="Configuraciones" className='font-pixelify p-1'/>
          <Padding_Layout>
            <Subtitle_Container title="Tiempo de Lectura" className='font-pixelify text-3xl pb-1'/>
            <Text_Container text="Cantidad de Escenas" className='font-pixelify text-2xl pb-1'/>
            <Range_Input range={{
              min: 3,
              max: 10,
            }}  props = {{
              ref: size
            }}
            />

            <Text_Container text="Cantidad de Palabras por Escena" className='font-pixelify text-3xl pb-1'/>
            <Range_Input range={{
              min: 75,
              max: 150
            }} props={{
              ref: scene_size
            }}/>
          </Padding_Layout>

          <Padding_Layout>
            <Dialog_Component   label="Crear Cuento">
              {({close} : {close: () => void}) => {
                let story = new Cuento(
                  new Preview(
                    {
                      id: "a",
                      titulo: title.current?.value || "Titulo",
                      size: (size.current ? +size.current.value : 3 ),
                      synopsis: desc.current?.value || "",
                      scene_size: scene_size.current ? +scene_size.current?.value : 50,
                      topics: topics.current?.value
                    }
                  )
                )
                return(
                  <Dialog_Story_Creator close={close} story={story} />
                )
              }
              }
                
            </Dialog_Component>
            {/* <Button_Container label="Crear Cuento" onClick={ () => {
              let preview = new Preview({
                id: randomUUID(),
                titulo : title.current?.value || "Titulo",
                size : size.current ? +size.current.value : 3,
              })

              let story = new Cuento(preview)

            }}/> */}
          </Padding_Layout>

        </Panel_Layout>
      </Grid_Layout>
  )
}
