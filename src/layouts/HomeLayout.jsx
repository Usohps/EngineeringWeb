import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function HomeLayout() {
  return (
    <div className="relative">
          <Navbar/>
          <div>
          <div className="lg:hidden w-full flex overflow-x-auto space-x-6 scrollbar-hide">
            <div><p>giving</p></div>
            <div><p>giving</p></div>
            <div><p>giving</p></div>
            <div><p>giving</p></div>
            <div><p>giving</p></div>
            <div><p>giving</p></div>
            <div><p>giving</p></div>
            <div><p>giving</p></div>
            <div><p>giving</p></div>
            <div><p>giving</p></div>
            <div><p>giving</p></div>
          </div>
          </div>
          <Outlet/>
          <Footer/>
    </div>
  )
}

export default HomeLayout