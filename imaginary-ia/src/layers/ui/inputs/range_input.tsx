import {FC} from 'react'
import { Input_Props } from './types'
import { Input_Base } from './input_base'

interface Range_Input_Props extends Input_Props {
  //Props
}

export const Range_Input : FC<Range_Input_Props> = ({className}) => {
  className = className || ""
  return (
    <Input_Base className={className} props={{
      type:"range"
    }} />
  )
}
