import {FC} from 'react'
import { Layout_Props } from './types'


export const Title_Layout : FC<Layout_Props> = ({className, children}) => {
  className = className || "w-full"
  
  return (
    <div className={className}>
      {children}
    </div>
  )
}
