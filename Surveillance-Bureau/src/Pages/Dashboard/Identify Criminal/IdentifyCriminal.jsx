import "./IdentifyCriminal.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import IdentifyIllustration from "../../../assets/Identify Illustration.svg"

const IdentifyCriminal = () => {
  return (
    <div className="IdentifyCriminal">
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
        <div className="Scroll"></div>
      </div>
    </div>
  )
}

export default IdentifyCriminal