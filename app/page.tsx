import Categories from "@/components/shared/categories"
import Container from "@/components/shared/container"
import Filters from "@/components/shared/filters"
import Header from "@/components/shared/header"
import ProductList from "@/components/shared/products-list"
import SortPopup from "@/components/shared/sort-popup"
import Title from "@/components/shared/title"
import TopBar from "@/components/shared/top-bar"
import { Button } from "@/components/ui/button"
import values from "./src/mock/data.json"

export default function Page() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-semibold" />
        <TopBar />
      </Container>

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters className="mt-5"/>

          </div>
          <div className="flex flex-col gap-16 mt-9">
            <ProductList values={values['Пицца']} cat={values}/>
          </div>
        </div>

      </Container>
    </>
  )
}
