import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type Props = {
  values: string[]
  endAdornment?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
}

export function FilterRadio({values}:Props) {
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      {values.map((item, index) => (
        <div className="flex items-center gap-3" key={index}>
          <RadioGroupItem value={item} id={`${index}`} />
          <label htmlFor={`${index}`}  >{item}</label>
        </div>
      ))}
    </RadioGroup>
  )
}
