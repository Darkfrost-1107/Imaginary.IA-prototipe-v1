import {FC} from 'react'
import { Input_Props } from './types'

interface Range_Input_Props extends Input_Props {
  //Props
}

export const Range_Input : FC<Range_Input_Props> = ({className}) => {
  className = className || ""
  return (
    <div className={className}>
      1 - 10
    </div>
  )
}
