'use client'
import { useCategoryStore } from "@/store/category"
import { cn } from "cn"
import React from "react"

type Props = {
  className?: string
}

const cats = [
  "Пицца",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
] as const

const activeIndex = 0 as const

function Categories({ className }: Props) {
  const categoryCurrent = useCategoryStore((state) => state.activeId)
  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
        {cats.map((cat,index)=>(
            <a className={cn('flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer z-10',
                cat === categoryCurrent && 'bg-white shadow-md shadow-gray-200 text-primary'
            )} key={index}>
                <button>{cat}</button>
            </a>
        ))}
    </div>
  )
}

export default Categories
