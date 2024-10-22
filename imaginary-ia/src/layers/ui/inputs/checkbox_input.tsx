import { FC } from 'react';
import { Input_Props } from './types';
import { Input_Base } from './input_base';

interface CheckBox_Input_Props extends Input_Props {
  label: string;
}

export const CheckBox_Input: FC<CheckBox_Input_Props> = ({ className, label }) => {
  className = className || '';
  className += " w-4 h-4"
  let props = {
    type: 'checkbox',
    hidden: true,
  };

  return (
      <label className="text-white gap-2 flex rounded-full bg-red-500 py-1 px-4">
        <Input_Base props={props} className={className} />
        {label}
      </label>
  );
};
