import {FC, useState} from 'react'
import { Input_Props } from './types'
import { CheckBox_Input } from './checkbox_input'

interface Select_Input_Props extends Input_Props {
  //Props
  options: string[]
}

const Option_className = ""

export const Select_Input : FC<Select_Input_Props> = ({className, options, props}) => {
  const [values, setValues] = useState<string>("")

  props = props || {}
  props = { ...props ,
    type: "text",
    hidden: true,
    value: values
  }

  className = className || ""
  className += " flex gap-4 flex-wrap justify-center py-2"
  
  return (
    <div className={className}>
      {options.map((option, index) => {
        return (
          <CheckBox_Input key={index} className={Option_className} label={option} props={{
            onClick: () => {
              
            }
          }}/>
        )
    })}
    </div>
  )
}
