import { FC, useState } from 'react'
import { Input_Props } from './types'
import { Input_Base } from './input_base'
import { Text_Container } from '../containers/text_container'
import { Text_Ball_Container } from '../containers/text_ball_container'

interface Range_Input_Props extends Input_Props {
  //Props
  range: Range_Interval
}

type Range_Interval = {
  min: number
  max: number
}

export const Range_Input: FC<Range_Input_Props> = ({ className, range, props }) => {
  
  
  const [currentValue, setCurrentValue] = useState(range.min);  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setCurrentValue(newValue);
  };
  
  className = className || "h-2 w-full cursor-ew-resize appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed"
  props = props || {}
  props = { ...props,
    type: "range",
    min: range.min,
    max: range.max,
    value: currentValue,
    onChange: handleChange
  }

  

  return (
    <div className="p-8">
      <div className="flex items-center gap-8">
        <div className="flex-1">
          <Input_Base 
            props={props} className={className}
          />
          <div className="pt-2 flex justify-between w-full">
            <Text_Container text={range.min} />
            <Text_Container text={range.max} />
          </div>
        </div>
        <Text_Ball_Container text={currentValue + ""}/>
      </div>
    </div>
  );
}