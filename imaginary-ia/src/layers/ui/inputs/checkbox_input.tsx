import { FC } from 'react';
import { Input_Props } from './types';
import { Input_Base } from './input_base';

interface CheckBox_Input_Props extends Input_Props {
  label: string;
}

export const CheckBox_Input: FC<CheckBox_Input_Props> = ({ className, label }) => {
  className = className || '';
  let props = {
    type: 'checkbox',
  };

  return (
    <div className={`${className}`}>
      <Input_Base props={props} className="w-4 h-4" />
      <label className="text-white">{label}</label>
    </div>
  );
};
