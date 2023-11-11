//Pages
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import "./LandingPages.scss";

const LandingPage = () => {
  return (
    <div className="LandingPage">
     <Page1 />
     <Page2 />
     <Page3 />
    </div>
  )
}

export default LandingPage