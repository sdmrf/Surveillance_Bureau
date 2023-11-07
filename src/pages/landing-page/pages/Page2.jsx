import "./Pages.scss";
import Spline from '@splinetool/react-spline';
import Header from "../header/Header";
import Cop from "/assets/copImg.png";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="Page2">
      <div className="Top">
        <Spline className="Spline" scene="https://prod.spline.design/uXYZOyWocYfl63Va/scene.splinecode" />
        <Header />
      </div>
      <div className="Main">
        <div className="Left">
          <div className="Text">
            <h1>Revolutionizing law enforcement and Integrity of National security!</h1>
          </div>
        </div>
        <div className="Right">
          <div className="Cop">
            <img src={Cop} alt="cop" />
          </div>
        </div>
      </div>
      <div className="Bottom">
        <Link to="/SurveillanceBureau/Home" className="Link">
          <button>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
}

export default Page2;
