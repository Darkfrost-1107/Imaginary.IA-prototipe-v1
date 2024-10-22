import {FC} from 'react'
import { Input_Props } from './types'
import { Input_Base } from './input_base'
import { Text_Container } from '../containers/text_container'

interface Range_Input_Props extends Input_Props {
  //Props
  range: Range_Interval
}

type Range_Interval = {
  min: number
  max: number
}

export const Range_Input : FC<Range_Input_Props> = ({className, range, props}) => {
  className = className || "h-2 w-full cursor-ew-resize appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed"
  props = props || {}
  props = { ...props,
    type:"range",
    min: range.min,
    max: range.max,
  }
  return (
    <div className="p-8">
      <Input_Base className={className} props={props} />
    <div className="pt-2 flex justify-between w-full">
        <Text_Container text={range.min} />
        <Text_Container text={range.max} />
    </div>
    </div>
    
  )
}
