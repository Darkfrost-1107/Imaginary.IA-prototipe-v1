import {FC} from 'react'
import { Layout_Props } from './types'

interface Panel_Layout_Props extends Layout_Props {

}

export const Panel_Layout : FC<Panel_Layout_Props> = ({className, children}) => {
  className = className || ""
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export const Padding_Layout : FC<Panel_Layout_Props> = ({className, children}) => {
  className = className || ""
  return (
    <div className={className}>
      {children}
    </div>
  )
}