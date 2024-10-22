import {FC} from 'react'
import { Input_Props } from './types'

interface CheckBox_Input_Props extends Input_Props {
  //Props
  label: string
}

export const CheckBox_Input : FC<CheckBox_Input_Props> = ({className, label}) => {
  className = className || ""
  return (
    <label>
      <input type="checkbox" className={className}/>
      {label}  
    </ label>
  )
}
