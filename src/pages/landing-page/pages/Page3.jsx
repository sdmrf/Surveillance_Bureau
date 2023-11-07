import "./pages.scss";
import Pfp from "/assets/pareshPfp.png";
import Pfp1 from "/assets/marufPfp.png";
import fbi1 from "/assets/fbiBuildingImg.jpeg";
import fbi2 from "/assets/fbiBuildingImg2.jpeg";
import EthereumLogo from "/assets/ethereumLogo.svg";
import opencvLogo from "/assets/openCvLogo.png";
import reactLogo from "/assets/reactLogo.png";

const Page3 = () => {
  return (
    <div className="Page3">
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
                  <img className="React" src={reactLogo} alt="react" />
                 <img className="Eth" src={EthereumLogo} alt="eth" />
                 <img className="oc" src={opencvLogo} alt="oc" />
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

export default Page3