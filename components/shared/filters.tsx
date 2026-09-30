"use client"
import React, { useState } from "react"
import Title from "./title"
import FilterCheckbox from "./filtercheckbox"
import { Slider } from "../ui/slider"
import { FilterRadio } from "./filterradio"
import { Button } from "../ui/button"
import FilterCheckboxGroup from "./filtercheckboxgrop"

type Props = {
  className?: string
}

const ingredients = [
  {
    text: "Сырный соус",
    value: "3",
  },
  {
    text: "Моцарелла",
    value: "4",
  },
  {
    text: "Чеснок",
    value: "5",
  },
  {
    text: "Солённые огурчики",
    value: "6",
  },
  {
    text: "Красный лук",
    value: "7",
  },
  {
    text: "Томаты",
    value: "8",
  },
  {
    text: "Бекон",
    value: "9",
  },
  {
    text: "Шампиньоны",
    value: "10",
  },
  {
    text: "Оливки",
    value: "11",
  },
  {
    text: "Халапеньо",
    value: "12",
  },
];

function Filters({ className }: Props) {
  const [price, setPrice] = useState([100, 500])
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4 mb-10">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
        <hr />
        <Title text="Цена от и до:" size="xs" className="" />
        <Slider
          min={100}
          max={500}
          value={price}
          onValueChange={(value) =>
            setPrice(Array.isArray(value) ? [...value] : [value])
          }
        ></Slider>
        <hr />
        <Title text="Ингредиенты:" size="xs" className="" />
        <FilterCheckboxGroup values={ingredients} />
        <hr />
        <Title text="Тип теста" size="xs" className="" />
        <FilterRadio values={["Традиционное", "Тонкое"]} />
      </div>
      <Button size={'xxl'}>Применить</Button>
    </div>
  )
}

export default Filters
