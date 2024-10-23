import {FC} from 'react'
import { Logo_Container } from '../../containers/logo_container'
import { Title_Layout } from '../../layouts/title_layout'
import { Subtitle_Container, Title_Container } from '../../containers/title_container'

interface CProps {
  //Props
}

export const Header_Component : FC<CProps> = () => {
  return (
    <header>
      <div className="h-16 m-2"></div>
      <Logo_Container/>
    </header>
  )
}
