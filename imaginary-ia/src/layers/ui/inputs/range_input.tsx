import { FC, useState } from 'react'
import { Input_Props } from './types'
import { Input_Base } from './input_base'
import { Text_Container } from '../containers/text_container'

interface Range_Input_Props extends Input_Props {
  //Props
}

export const Range_Input: FC<Range_Input_Props> = ({ className }) => {
  const [currentValue, setCurrentValue] = useState(5);  

  className = className || "h-2 w-full cursor-ew-resize appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setCurrentValue(newValue);
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-8">
        <div className="flex-1">
          <Input_Base 
            props={{
              type: "range",
              min: range.min,
              max: range.max,
              value: currentValue,
              onChange: handleChange
            }} 
          />
          <div className="pt-2 flex justify-between w-full">
            <Text_Container text={range.min} />
            <Text_Container text={range.max} />
          </div>
        </div>
        <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-semibold shadow-lg">
          {currentValue}
        </div>
      </div>
    </div>
  );
}