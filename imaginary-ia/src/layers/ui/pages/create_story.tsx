import {FC} from 'react'
import { Logo_Container } from '../containers/logo_container'
import { Subtitle_Container, Title_Container } from '../containers/title_container'
import { Title_Layout } from '../layouts/title_layout'
import { Grid_Layout } from '../layouts/grid_layout'
import { Padding_Layout, Panel_Layout } from '../layouts/panel_layout'
import { TextArea_Input } from '../inputs/textarea_input'
import { Select_Input } from '../inputs/select_input'
import { Range_Input } from '../inputs/range_input'
import { Text_Container } from '../containers/text_container'
interface PageProps {
  //Props
}

const Topics_List = ["Aventura", "Fantasía", "Ciencia Ficción", "Terror", "Comedia"]

export const Create_Story_Page : FC<PageProps> = () => {
  return (
    <div>
      <Logo_Container/>

      <Title_Layout>
        <Title_Container title="Imaginary.IA"/>
        <Subtitle_Container title="Generador de cuentos para niños"/>
      </Title_Layout>

      <Grid_Layout>
        <Panel_Layout>
          
          <Title_Container title="Contenido General"/>
          <Padding_Layout>
            <Subtitle_Container title="Descripción del Cuento"/>
            <TextArea_Input/>
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
    </div>
  )
}
