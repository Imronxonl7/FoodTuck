import { useQuery } from "@tanstack/react-query"
import { ProductsTabs } from "./ProductsTabs"
import axios from "axios"
import type { RecipesType } from "../pages/Types/RecipesType"

const MenuPage = () => {
  const getData = async():Promise<RecipesType[]> => {
    let res = await  axios.get(`https://dummyjson.com/recipes`)
    return res?.data?.recipes
  }
  const {data , isLoading} = useQuery<RecipesType[]>({
    queryKey: ["products"],
    queryFn: getData
  })
  console.log(data);


  const mealTypes = data?.map((el:RecipesType) => {
    return el?.mealType
  })
  const res = mealTypes?.map((el) => {
    for(let item of el){
      return item
    }
  })
  const mealAllTypes = [...new Set(res)]
  if(isLoading) {
    return (<div>

    </div>)
  }
  return (
    <section>
      <div className="container mx-auto px-15">
        <div>
            <p className="text-[#FF9F0D] text-[32px] font-normal textStyle text-center">Choose & pick</p>
            <p className="text-[48px] font-bold text-center text-[#FF9F0D]">Fr<span className="text-[48px] font-bold text-white">om Our Menu</span></p>
        </div>
        <ProductsTabs data={data} mealAllTypes={mealAllTypes}/>
      </div>
    </section>
  )
}

export default MenuPage
