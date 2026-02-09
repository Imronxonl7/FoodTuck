import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <section className="bg-black">
      <Header/>
      <main className="mt-25" >
        <Outlet/>
      </main>
      <Footer/>
    </section>
  )
}

export default Layout
