import { cn } from 'cn'
import React from 'react'

type Props = {
    className?:string
    children?: React.ReactNode
}

export default function Container({className, children}: Props) {
  return (
    <div className={cn('mx-auto max-w-[1440px]', className)}>{children}</div>
  )
}