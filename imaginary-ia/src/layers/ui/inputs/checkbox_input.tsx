import {FC} from 'react'
import { Input_Props } from './types'
import { Input_Base } from './input_base'

interface CheckBox_Input_Props extends Input_Props {
  //Props
  label: string
}

export const CheckBox_Input : FC<CheckBox_Input_Props> = ({className, label}) => {
  className = className || ""
  let props = {
    type: "checkbox",
  }
  return (
    <label>
      <Input_Base props={props} className={className}/>
      {label}  
    </ label>
  )
}
