import AboutUsPage from "../../components/AboutUsPage"
import Experience from "../../components/Experience"
import FoodCategoryPage from "../../components/FoodCategoryPage"
import MenuPage from "../../components/MenuPage"

const HomePage = () => {
  return (
    <>
      
      <section id="aboutUs">
        <AboutUsPage/>
      </section>
      <section id="shop">
        <FoodCategoryPage/>
      </section>
      <section>
        <Experience/>
      </section>
      <section id="menu">
        <MenuPage/>
      </section>
    </>
  )
}

export default HomePage
