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
  const [cuento, setCuento] = useState<Cuento_Generator>({})

  return (
    <Grid_Layout>
        <Panel_Layout>
          
          <Title_Container title="Contenido General"/>
          <Padding_Layout>
            <Subtitle_Container title="Titulo del Cuento" />
            <Text_Input props={{
              ref: title
            }}/>
          </Padding_Layout>
          <Padding_Layout>
            <Subtitle_Container title="Descripción del Cuento"/>
            <TextArea_Input props={{
              ref:desc
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

          <Padding_Layout>
            <Subtitle_Container title="Temática del Cuento"/>
            <Select_Input options={Topics_List}/>
          </Padding_Layout>

        </Panel_Layout>

        <Panel_Layout>
          <Title_Container title="Otras configuraciones"/>
          <Padding_Layout>
            <Subtitle_Container title="Tiempo de Lectura"/>
            <Text_Container text="Cantidad de Escenas" />
            <Range_Input range={{
              min: 2,
              max: 5
            }}/>

            <Text_Container text="Cantidad de Palabras por Escena" />
            <Range_Input range={{
              min: 50,
              max: 100
            }}/>
          </Padding_Layout>

          <Padding_Layout>
            <Dialog_Component label="Crear Cuento">
              {Dialog_Story_Creator}
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
