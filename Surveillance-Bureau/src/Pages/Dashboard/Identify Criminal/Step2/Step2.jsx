import "./Step2.scss"

import FaceScanning from "../../../../assets/FaceScanning.svg"
import FingerLock from "../../../../assets/FingerLock.mp4"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Step2 = () => {
  return (
    <div className="Step2" style={{ height: "100vh" }}>
      <div className="Shape First"></div>
      <div className="Top">
        <div className="Title">
          <span className="S1">Step - 2 </span><span className="Ver">Verification !</span>
        </div>
      </div>
      <div className="Bottom">
        <div className="Left">
          <img src={FaceScanning} alt="Face Scanning" />
        </div>
        <div className="Right">
          <div className="Card">
            <div className="Top">
              <h1>Fingerprint Recognition</h1>
              <span>Scan the suspects Fingerprint to verify his/her identity</span>
            </div>
            <div className="Mid">
              <video src={FingerLock} autoPlay loop muted />
            </div>
            <div className="Bottom">
              <button>Scan
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step2