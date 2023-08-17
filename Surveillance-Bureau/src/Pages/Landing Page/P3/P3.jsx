import "./P3.scss"
import Pfp1 from "../../../assets/mrfPfp.jpg"
import Pfp from "../../../assets/AnimePfp.png"
import fbi1 from '../../../assets/Fbi1.jpeg'
import fbi2 from '../../../assets/Fbi2.jpeg'
import { UilReact } from '@iconscout/react-unicons'
import Eth from "../../../assets/Ehtereum logo.svg"
import oc from "../../../assets/OpenCV_logo_white.png"

const P3 = () => {
  return (
    <div className="P3">
      <div className="Container">
        <div className="Shape First"></div>
        <div className="Shape Second"></div>
        <div className="Shape Third"></div>
        <div className="Wrapper">
          <div className="Top">
            <div className="Left">
              <div className="Explore">
                <h1><span className="S">S</span>urveillance <span className="B">B</span>ureau</h1>
                <h2>Experience the ecstasy and be a part of this mission to help our law enforcement to fight against social evils !</h2>
                <button className="Button">Explore</button>
              </div>
              <div className="Logo">
                 <UilReact className = "Icon" size="140" color="#61DAFB"/>
                 <img className="Eth" src={Eth} alt="eth" />
                 <img className="oc" src={oc} alt="oc" />
              </div>
              
            </div>
            <div className="Right">
              <div className="Pfp_container">
                <img src={Pfp} alt="pfp" />
              </div>
              <h1><span className="S">P</span>aresh <span className="B">D</span>eshpande</h1>
              <h2>Founder / Developer / Ui designer</h2>
              <h3>“We live and breathe software development”</h3>
            </div>
          </div>
          <div className="Bottom">
            <div className="Left">
              <div className="Pfp_container">
                <img src={Pfp1} alt="pfp" />
              </div>
              <h1><span className="S">S</span>yed <span className="M">M</span>aruf <span className="A">A</span>li</h1>
              <h2>Founder / Developer / Ui designer</h2>
              <h3>“Eat Sleep Develop Repeat”</h3>
            </div>
            <div className="Right">
              <div className="Text">
                <div className="Heading">
                  <h1>
                    We provide an Integrated platform for Intelligence, Investigation, and Crime bureaus !</h1>
                </div>
                <div className="bottom">
                  <div className="Info">
                    <h1>25 M+</h1>
                    <span>Criminals Recognized</span>
                  </div>
                  <div className="Info">
                    <h1>5 M+</h1>
                    <span>Security offices covered</span>
                  </div>
                  <div className="Info">
                    <h1>69 M+</h1>
                    <span>Criminals Registered</span>
                  </div>
                </div>
              </div>
              <div className="Fbi">
                <img src={fbi1} alt="fbi" />
                <img src={fbi2} alt="fbi" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default P3