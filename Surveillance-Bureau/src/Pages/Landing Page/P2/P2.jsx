import "./P2.scss"
import Header from "../../../components/Header/Header"
import Spline from '@splinetool/react-spline';

import Cop from "../../../assets/Cop.png"

const P2 = () => {
  return (
    <div className="P2">
      <div className="Top">
        <Spline scene="https://prod.spline.design/uXYZOyWocYfl63Va/scene.splinecode" />
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
        <button>GET STARTED</button>
      </div>
    </div>
  )
}

export default P2