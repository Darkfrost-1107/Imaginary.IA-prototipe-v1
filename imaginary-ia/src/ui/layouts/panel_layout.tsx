import {FC} from 'react'
import { Layout_Props } from './types'

interface Panel_Layout_Props extends Layout_Props {

}

export const Panel_Layout : FC<Panel_Layout_Props> = ({className, children}) => {
  className = className || "border m-4 border-dashed border-4 border-white rounded-lg"
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export const Padding_Layout : FC<Panel_Layout_Props> = ({className, children}) => {
  className = className || "p-5"
  return (
    <div className={className}>
      {children}
    </div>
  )
}
