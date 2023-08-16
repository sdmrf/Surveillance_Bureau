import "./P2.scss"
import Header from "../../../components/Header/Header"
import Spline from '@splinetool/react-spline';

import Cop from "../../../assets/Cop.png"
import { Link } from "react-router-dom";
import { useMemo } from "react";

const P2 = () => {
  const memoizedSpline = useMemo(() => (
    <Spline scene="https://prod.spline.design/uXYZOyWocYfl63Va/scene.splinecode" loading="lazy" />
  ), []);

  return (
    <div className="P2">
      <div className="Top">
      {memoizedSpline}
        <Header />
      </div>
      <div className="Main">
        <div className="Left">
          <div className="Text">
            <h1>Revolutionizing law enforcement and Integrity of National security !</h1>
          </div>
        </div>
        <div className="Right">
          <div className="Cop">
            <img src={Cop} alt="cop" />
          </div>
        </div>
      </div>
      <div className="Bottom">
        <Link to="/Home" className="Link"><button>GET STARTED</button></Link>
      </div>
    </div>
  )
}

export default P2