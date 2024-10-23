import {FC} from 'react'
import { Logo_Container } from '../../containers/logo_container'
import { Title_Layout } from '../../layouts/title_layout'
import { Subtitle_Container, Title_Container } from '../../containers/title_container'

interface CProps {
  //Props
}

export const Header_Component : FC<CProps> = () => {
  return (
    <header className="flex justify-between items-center p-8 text-white">
      <div className="flex items-center">
        <Logo_Container />
      </div>
      
      <nav>
        <ul className="flex space-x-4 gap-8">
          <li>
            <a href="/" className="hover:underline font-serif">
              Home
            </a>
          </li>
          <li>
            <a href="/list_cuento" className="hover:underline font-serif">
              Listar Cuentos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
