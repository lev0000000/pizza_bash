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
        "sticky top-0 z-10 flex flex-col items-center flex-row justify-between bg-white py-3 shadow-lg shadow-black/5",
        className
      )}
    >
      <Categories />
      <SortPopup />
    </div>
  )
}

export default TopBar
