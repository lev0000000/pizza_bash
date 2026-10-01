import Categories from "@/components/shared/categories"
import Container from "@/components/shared/container"
import Filters from "@/components/shared/filters"
import Header from "@/components/shared/header"
import ProductList from "@/components/shared/products-list"
import SortPopup from "@/components/shared/sort-popup"
import Title from "@/components/shared/title"
import TopBar from "@/components/shared/top-bar"
import { Button } from "@/components/ui/button"
import values from "./src/mock/menu.json"

export default function Page() {
  const titles = Object.keys(values)
  const valuesArr = Object.values(values)

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-semibold" />
      </Container>
      <Container className="sticky top-0 z-10 shadow-lg shadow-black/5">
        <TopBar  />
      </Container>

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters className="mt-5" />
          </div>
          <div className="mt-9 flex flex-col gap-16">
            {valuesArr.map((value, index) => (
              <ProductList key={index} values={value} cat={titles[index]} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
