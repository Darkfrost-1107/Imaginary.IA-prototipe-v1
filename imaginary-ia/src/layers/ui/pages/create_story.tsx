import {FC} from 'react'
import { Logo_Component } from '../containers/logo_component'
import { Subtitle_Component, Title_Component } from '../containers/title_component'
import { Title_Layout } from '../layouts/title_layout'
interface PageProps {
  //Props
}

export const Create_Story_Page : FC<PageProps> = () => {
  return (
    <div>
      <Logo_Component/>
      <Title_Layout>
        <Title_Component title="Imaginary.IA"/>
        <Subtitle_Component title="Generador de cuentos para niños"/>
      </Title_Layout>
    </div>
  )
}
