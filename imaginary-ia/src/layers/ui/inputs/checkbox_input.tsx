import { FC } from 'react';
import { Input_Props } from './types';
import { Input_Base } from './input_base';

interface CheckBox_Input_Props extends Input_Props {
  label: string;
}

export const CheckBox_Input: FC<CheckBox_Input_Props> = ({ className, label }) => {
  className = className || '';
  className += ' w-4 h-4';
  
  let props = {
    type: 'checkbox',
    className: 'hidden', 
  };

  return (
    <label className="text-white font-pixelify gap-2 flex items-center border-2 border-solid border-red-500/20 rounded-md bg-red-400 py-1 px-4 transition-colors cursor-pointer hover:bg-red-600">
      <Input_Base props={props} className={className} />
      <span className="flex items-center gap-2">
        {label}
      </span>
    </label>
  );
};
