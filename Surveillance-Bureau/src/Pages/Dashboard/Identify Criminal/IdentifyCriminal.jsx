import { useRef } from "react";
import "./IdentifyCriminal.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import IdentifyIllustration from "../../../assets/Identify Illustration.svg";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";

const IdentifyCriminal = () => {
  const stepRef = useRef(null);

  const scrollToStep1 = () => {
    stepRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="IdentifyCriminal">
      <div className="Container">
        <div className="Top">
          <div className="Logo">
            <h1><span className="S">S</span>urveillance <span className="B">B</span>ureau</h1>
          </div>
          <Link to="/dashboard" className="Back" >
            <ArrowBackIcon />
          </Link>
        </div>
        <div className="Mid">
          <div className="Left">
            <div className="Wrapper">
              <div className="Top">
                <span className="VI">Verify Identity </span><span className="S">Securely !</span>
              </div>
              <div className="Down">
                <span>Effortlessly verify your identity online with our advanced AI-based verification service in seconds. <br />
                  No Delays, No Hassle.</span>
              </div>
            </div>
          </div>
          <div className="Right">
            <div className="Illustration">
              <img src={IdentifyIllustration} alt="Identify Illustration" />
            </div>
          </div>
        </div>
        <div className="Bottom">
          <div className="Scroll" onClick={scrollToStep1}></div>
        </div>
      </div>

      <div ref={stepRef}>
        <Step2  />
      </div>
    </div>
  );
};

export default IdentifyCriminal;
