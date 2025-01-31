import About from "../Components/About"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import PopularDishes from "../Components/PopularDishes"
import Qualities from "../Components/Qualities"
import WhoAreWe from "../Components/WhoAreWe"
import Team from "../Components/Team"
import Reservation from "../Components/Reservation"
import Footer from "../Components/Footer"


const Home = () => {
  return (
      <div className='home bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen'>
        <Navbar/>
        <HeroSection /> 
        <About />
        <Qualities />
        <PopularDishes />
        <WhoAreWe />
        <Team />
        <Reservation />
        <Footer />
      </div>
  )
}

export default Home