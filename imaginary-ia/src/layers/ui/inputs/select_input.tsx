import {FC} from 'react'
import { Input_Props } from './types'
import { CheckBox_Input } from './checkbox_input'

interface Select_Input_Props extends Input_Props {
  //Props
  options: string[]
}

const Option_className = ""

export const Select_Input : FC<Select_Input_Props> = ({className, options}) => {
  className = className || ""
  return (
    <div className={className}>
      {options.map((option, index) => {
        return (
          <CheckBox_Input key={index} className={Option_className} label={option}/>
        )
    })}
    </div>
  )
}
