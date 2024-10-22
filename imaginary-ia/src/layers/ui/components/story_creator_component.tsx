"use client"
import {FC, useRef} from 'react'
import { Grid_Layout } from '../layouts/grid_layout'
import { Padding_Layout, Panel_Layout } from '../layouts/panel_layout'
import { Subtitle_Container, Title_Container } from '../containers/title_container'
import { TextArea_Input } from '../inputs/textarea_input'
import { Select_Input } from '../inputs/select_input'
import { Text_Container } from '../containers/text_container'
import { Range_Input } from '../inputs/range_input'
import { Button_Container } from '../containers/button_container'



interface Story_Creator_Props {

}

const Topics_List = ["Aventura", "Fantasía", "Ciencia Ficción", "Terror", "Comedia"]

export const Story_Creator_Component : FC<Story_Creator_Props> = () => {

  const desc = useRef<HTMLTextAreaElement>(null)

  return (
    <Grid_Layout>
        <Panel_Layout>
          
          <Title_Container title="Contenido General"/>
          <Padding_Layout>
            <Subtitle_Container title="Descripción del Cuento"/>
            <TextArea_Input props={{
              ref:desc
            }}/>
            <Button_Container label="Generar Cuento" onClick={() => {
              console.log(desc.current?.value)
            }}/>


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
            <Range_Input/>

            <Text_Container text="Cantidad de Palabras por Escena" />
            <Range_Input/>
          </Padding_Layout>

        </Panel_Layout>
      </Grid_Layout>
  )
}
