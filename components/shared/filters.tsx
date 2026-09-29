"use client"
import React, { useState } from "react"
import Title from "./title"
import FilterCheckbox from "./filtercheckbox"
import { Slider } from "../ui/slider"

type Props = {
  className?: string
}

function Filters({ className }: Props) {
  const [price, setPrice] = useState([100, 500])
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
        <Slider
          min={price[0]}
          max={price[1]}
          onValueChange={(value) =>
            setPrice(Array.isArray(value) ? [...value] : [value])
          }
        ></Slider>
      </div>
    </div>
  )
}

export default Filters
