"use client"

import React, { useState } from "react"
import FilterCheckbox from "./filtercheckbox"
import { Button } from "../ui/button"

type Props = {
  values: string[]
  endAdornment?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
}

export default function FilterCheckboxGroup({ values }: Props) {
  const [limit, setLimit] = useState(5)
  const [show,setShow] = useState(false)

  return (
    <>
      {values.slice(0, limit).map((item: any, index: number) => (
        <FilterCheckbox className={''} 
        text={item.text} value={item.value} key={index}/>
      ))}
      <Button variant={"ghost"} size={"sm"} onClick={(e)=>{
        limit===5 ? setLimit(7) : setLimit(5)
        setShow(!false)
      }}>
        + Показать все
      </Button>
    </>
  )
}
