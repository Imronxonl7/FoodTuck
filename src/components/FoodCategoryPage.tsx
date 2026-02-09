import Qoziqorin from "../assets/Qoziqorin.svg"
import BurgerMeat from "../assets/BurgerMeat.svg"
import Desert from "../assets/Desert.svg"
import TeshikKulcha from "../assets/TeshikKulcha.svg"
import Grass from "../assets/RightGrass.svg"
const FoodCategoryPage = () => {
  return (
    <section 
    style={{backgroundImage: `url(${Grass})` , backgroundPosition:"right" , backgroundRepeat:"no-repeat"}}>
      <div className="container mx-auto py-12 px-15">
        <div>
            <p className="textStyle text-[#FF9F0D] font-normal text-[32px] text-center">Food Category</p>
            <p className="text-[48px] text-[#FF9F0D] font-bold text-center">Ch<span className="text-[48px] text-white font-bold">oose Food Iteam</span></p>
            <div className="grid grid-cols-4 gap-5 mt-10">
                <img className="xl:w-76.25 xl:h-82" src={Qoziqorin} alt="" />
                <img className="xl:w-76.25 xl:h-82" src={BurgerMeat} alt="" />
                <img className="xl:w-76.25 xl:h-82" src={Desert} alt="" />
                <img className="xl:w-76.25 xl:h-82" src={TeshikKulcha} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default FoodCategoryPage
