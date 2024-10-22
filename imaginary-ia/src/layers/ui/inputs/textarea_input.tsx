import {FC} from 'react'
import { Input_Props } from './types'

interface TextArea_Input_Props extends Input_Props {
  //Props
}

export const TextArea_Input : FC<TextArea_Input_Props> = ({className}) => {
  className = className || ""
  return (
    <textarea className={className}></textarea>
  )
}
