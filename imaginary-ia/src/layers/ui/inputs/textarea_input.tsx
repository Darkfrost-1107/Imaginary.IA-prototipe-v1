import {FC} from 'react'
import { Input_Props } from './types'
import { Input_Base } from './input_base'

interface TextArea_Input_Props extends Input_Props {
  //Props
}

export const TextArea_Input : FC<TextArea_Input_Props> = ({className, props}) => {
  className = className || ""
  className += " w-full h-32 rounded-lg p-4 bg-black/5 border-2 border-dashed border-white font-mono font-medium text-sm color-white placeholder-white"

  props = props || {}
  props = { ...props,
    type: "textarea",
    placeholder: "Describe your history here...",
  }

  return (
    <Input_Base className={className} props={props} Component="textarea"/>
    
  )
}
