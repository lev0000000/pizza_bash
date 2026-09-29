import Categories from "@/components/shared/categories"
import Container from "@/components/shared/container"
import Filters from "@/components/shared/filters"
import Header from "@/components/shared/header"
import SortPopup from "@/components/shared/sort-popup"
import Title from "@/components/shared/title"
import TopBar from "@/components/shared/top-bar"
import { Button } from "@/components/ui/button"

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
            <Filters/>

          </div>
          <div className="flex flex-col gap-16">
          </div>
        </div>

      </Container>
    </>
  )
}
