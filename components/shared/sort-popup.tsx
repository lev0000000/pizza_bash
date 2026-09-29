import { cn } from "cn"
import { ArrowUpDown } from "lucide-react"
import React from "react"

type Props = {
  className?: string
}

function SortPopup({ className }: Props) {
  return (
    <div
      className={cn(
        "inline-flex h-[52px] cursor-pointer items-center gap-1 rounded-2xl bg-gray-50 px-5",
        className
      )}
    >
      <ArrowUpDown />
      <b>Сортировка:</b>
      <b className="text-primary">популярное</b>
    </div>
  )
}

export default SortPopup
