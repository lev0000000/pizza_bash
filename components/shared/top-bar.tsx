import { cn } from "cn"
import React from "react"
import Categories from "./categories"
import SortPopup from "./sort-popup"

type Props = {
  className?: string
}

function TopBar({ className }: Props) {
  return (
    <div
      className={cn(
        " flex flex-row iteflex flex-row items-center justify-between bg-white py-3 rounded-xl shadow-mdms-center justify-between bg-white py-3 ",
        className
      )}
    >
      <Categories />
      <SortPopup />
    </div>
  )
}

export default TopBar
