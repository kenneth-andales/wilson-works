import Banner from '../components/dashboard/Banner'
import AboutUs from '../components/dashboard/AboutUs'
import Vision from '../components/dashboard/Vision'
import Solution from '../components/dashboard/Solution'
import Contact from '../components/dashboard/Contact'
import Services from '../components/dashboard/Services'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Dashboard() {
  return (
    <div className='bg-dark text-white'>
        <div className="">
            <NavBar />
            <main className='flex flex-col gap-10 lg:gap-36 pt-mobilespacing'>
                <Banner />
                <AboutUs />
                <Vision />
                <Solution />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    </div>
  )
}

export default Dashboard