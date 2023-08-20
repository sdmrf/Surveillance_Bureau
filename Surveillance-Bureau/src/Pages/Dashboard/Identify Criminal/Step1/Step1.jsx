import "./Step1.scss"

import FaceScanning from "../../../../assets/FaceScanning.svg"
import FaceIdLock from "../../../../assets/FaceIdLock.mp4"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Step1 = () => {
  return (
    <div className="Step1">
      <div className="Shape First"></div>
      <div className="Top">
        <div className="Title">
          <span className="S1">Step - 1 </span><span className="Ver">Verification !</span>
        </div>
      </div>
      <div className="Bottom">
        <div className="Left">
          <img src={FaceScanning} alt="Face Scanning" />
        </div>
        <div className="Right">
          <div className="Card">
            <div className="Top">
              <h1>Face Recognition</h1>
              <span>Scan the suspects face to verify his/her identity</span>
            </div>
            <div className="Mid">
              <video src={FaceIdLock} autoPlay loop muted />
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

export default Step1