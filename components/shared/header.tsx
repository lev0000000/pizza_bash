import { cn } from "cn"
import React from "react"
import Container from "./container"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight, ShoppingCart, User } from "lucide-react"

interface Props {
  className?: string
}

export default function Header({ className }: Props) {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="">
          <Image
            unoptimized={true}
            src="/logo.png"
            alt="logo"
            width={155}
            height={124}
          />
          <div className="">
            <h1 className="uppeacase hidden text-2xl font-black">Pizza Bash</h1>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant={"default"} size={'lg'}>
            <User />
            Войти
          </Button>
            <Button className="group relative p-2" size={'lg'}>
              <b>520 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
        </div>
      </Container>
    </header>
  )
}
