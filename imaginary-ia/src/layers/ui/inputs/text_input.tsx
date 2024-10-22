import {FC} from 'react'
import { Input_Props } from './types'
import { Input_Base } from './input_base'

interface Text_Input_Props extends Input_Props {
  //Props
}

export const Text_Input : FC<Text_Input_Props> = ({className, props}) => {
  className = className || "w-full"
  props = (props && {
    ...props,
    type: "text",
  }) || {}
  return (
    <Input_Base className={className} props={props}/>
  )
}
