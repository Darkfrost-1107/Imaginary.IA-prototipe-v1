import {FC} from 'react'
import { Input_Props } from './types'
import { Input_Base } from './input_base'

interface Text_Input_Props extends Input_Props {
  //Props
}

export const Text_Input : FC<Text_Input_Props> = ({className, props}) => {
  className = className || "w-full  rounded-lg p-4 bg-black/5 border-2 border-dashed border-white font-mono font-medium text-sm color-white placeholder-white"

  props = props || {}
  props = { ...props,
    type: "textarea",
    placeholder: "Write the title of history here...",
  }

  return (
    <Input_Base className={className} props={props}/>
  )
}
