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
import { Story_Creator_Component } from '../components/story_creator_component'
interface PageProps {
  //Props
}


export const Create_Story_Page : FC<PageProps> = () => {
  return (
    <div>
      <Logo_Container/>

      <Title_Layout>
        <Title_Container title="Imaginary.IA"/>
        <Subtitle_Container title="Generador de cuentos para niños"/>
      </Title_Layout>

      <Story_Creator_Component/>
      
    </div>
  )
}
