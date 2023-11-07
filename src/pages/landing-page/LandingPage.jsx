import Footer from './footer/Footer'
//Pages
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Page1 />
      <Page2 />
      <Page3 />
      <Footer />
    </div>
  )
}

export default LandingPage