import React from 'react'
import { Checkbox } from '../ui/checkbox';
import { cn } from 'cn';

type Props = {
    className:string;
    text:string;
    value:string;
    endAdornment?:React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

function FilterCheckbox({className,text,value,endAdornment,onCheckedChange,checked}: Props) {
  return (
    <div className={cn("flex items-center space-x-2 transition-all duration-300 ease-in",className)}>
        <Checkbox
            className="rounded-[8px] w-6 h-6 transition-all duration-300 ease-in"
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