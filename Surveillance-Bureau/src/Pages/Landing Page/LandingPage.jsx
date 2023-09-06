import "./LandingPage.scss"
import P1 from "./P1/P1"
import P2 from "./P2/P2"
import P3 from "./P3/P3"
import Footer from "./Footer/Footer"
import P4 from "./P4/P4"
import P5 from "./P5/P5"



const LandingPage = () => {
  return (
    <div className="LandingPage">
      <P1 />
      <P5 />
      <P4 />
      <P3 />
      <Footer />
    </div>
  )
}

export default LandingPage