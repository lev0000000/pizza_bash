"use client"
import React from "react"
import ProductCard from "./product-card"
import Title from "./title"
import { useIntersection } from "react-use"
import { useCategoryStore } from "@/store/category"

type Props = {
  values: any[]
  cat: string
}

function ProductList({ values, cat }: Props) {
  const setActive = useCategoryStore((state) => state.setActive)
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActive(cat)
    }
  }, [intersection?.isIntersecting])

  return (
    <div className="flex flex-wrap gap-[50px]" ref={intersectionRef}>
      <Title text={cat} className="w-full" />
      <div className="grid grid-cols-3 gap-4">
        {values.map((item, index) => (
          <ProductCard
            id={item.id}
            name={item.name}
            desc={item.description}
            price={item.price}
            image={item.image}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
