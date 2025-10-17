import HeaderImage from '../components/header_image'
import ScrollBg from '../components/scroll_background'
import Contact from '../components/contact'
import About from '../components/about'
import MyWorks from '../components/myworks'

const Home = () => {
  return (
    <div className="text-white">
      <ScrollBg /> 
      <HeaderImage />
        <MyWorks />
        <About />
        <Contact />
    </div>
  )
}

export default Home