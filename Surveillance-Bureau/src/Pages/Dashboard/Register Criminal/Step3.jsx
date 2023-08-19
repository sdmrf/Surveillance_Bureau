import { useState } from 'react';
import user from "../../../assets/user.svg"
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FaceIcon from '@mui/icons-material/Face';


const Step3 = ({ formData, prevStep }) => {
  const [mugshots, setMugshots] = useState([]);
  const [fingerprintEncodings, setFingerprintEncodings] = useState("If necessary for precise identification");

  const handleMugshotsChange = (e) => {
    const files = Array.from(e.target.files);
    setMugshots(files);
  };

  const handlePrev = () => {
    prevStep();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);
    console.log("Mugshots:", mugshots);
    console.log("Fingerprint Encodings:", fingerprintEncodings);
  };

  return (
    <>
      <div className="Step3">
        <form onSubmit={handleFormSubmit} className="Details">
          <div className="UploadMugs">
            <div className="Mugshots" onClick={() => document.getElementById("profilePicInput").click()}>
              <img src={user} alt="AddPic" />
              <div className="AddBtn">
                <AddIcon />
              </div>
              <input
                id="profilePicInput"
                type="file"
                accept="image/jpeg, image/png"
                style={{ display: "none" }}
                onChange={(e) => (handleMugshotsChange(e))}
              />
            </div>
            <span>Upload Muhshots </span>
          </div>
          <div className="Cards">
            <div className="GenFacialEnc">
              <div className="Top">
                <FaceIcon className="Icon" />
              </div>
              <div className="Bottom">
                <span>Genrate Facial Encodings</span>
              </div>
            </div>
            <div className="GenFingerEnc">
              <div className="Top">
                <FingerprintIcon className="Icon" />
              </div>
              <div className="Bottom">
                <span>Genrate Fingerprint Encodings</span>
              </div>
            </div>
          </div>
          <div className="Generate">
            <button type="submit" className="GenBtn">Generate Criminal ID</button>
          </div>
          <div className="Buttons">
            <button type="button" onClick={handlePrev} className="Prev">
              <ArrowBackIcon />
              Previous
            </button>
            <button type="submit" className="submit action-button">Submit
            <CheckIcon />
            </button>
          </div>
        </form>
      </div>
    </>

  );
};

export default Step3;
