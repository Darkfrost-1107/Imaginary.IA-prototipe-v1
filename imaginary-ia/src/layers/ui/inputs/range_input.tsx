import {FC} from 'react'
import { Input_Props } from './types'
import { Input_Base } from './input_base'

interface Range_Input_Props extends Input_Props {
  //Props
}

export const Range_Input : FC<Range_Input_Props> = ({className}) => {
  className = className || ""
  return (
    <div class="p-16">
    <div class="flex justify-between w-full">
        <div>0</div>
        <div>10</div>
    </div>
    <input type="range" class="h-2 w-full cursor-ew-resize appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed">
    </div>
    <Input_Base className={className} props={{
      type:"range"
    }} />
  )
}
