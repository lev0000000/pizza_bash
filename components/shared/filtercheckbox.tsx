import React from 'react'
import { Checkbox } from '../ui/checkbox';

type Props = {
    text:string;
    value:string;
    endAdornment?:React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

function FilterCheckbox({text,value,endAdornment,onCheckedChange,checked}: Props) {
  return (
    <div className="flex items-center space-x-2">
        <Checkbox
            className="rounded-[8px] w-6 h-6"
            id={`checkbox-${String(value)}`}
            onCheckedChange={onCheckedChange}
            checked={checked}
            value={value}
        />
        <label htmlFor={`checkbox-${String(value)}`} className='leading-none cursor-pointer flex-1'>
            {text}
        </label>
    </div>
  )
}

export default FilterCheckbox