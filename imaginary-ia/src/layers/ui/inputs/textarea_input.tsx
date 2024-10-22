import {FC} from 'react'
import { Input_Props } from './types'
import { Input_Base } from './input_base'

interface TextArea_Input_Props extends Input_Props {
  //Props
}

export const TextArea_Input : FC<TextArea_Input_Props> = ({className, props}) => {
  className = className || ""
  return (
    <Input_Base className={className} props={props} Component="textarea"/>
  )
}
