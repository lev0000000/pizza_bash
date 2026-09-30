import React from "react"
import ProductCard from "./product-card"
import Title from "./title"

type Props = {
  values: any[]
  cat: any[]
}

function ProductList({ values, cat }: Props) {
  const category = cat
  return (
    <div className="">
      <Title text={Object.keys(category)} className="mb-5" />
      <div className="flex flex-wrap gap-[50px]">
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
