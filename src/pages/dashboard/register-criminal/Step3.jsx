import React from 'react';
import "./RegisterCriminal.scss";
import user from "/assets/userIcon.svg"
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PortraitIcon from '@mui/icons-material/Portrait';
import { uploadImageToIPFS } from "../../../ApiFeature";

const Step3 = ({ formData, prevStep, setFormData, handleFormSubmit }) => {

  const handleGenerateCriminalId = () => {
    if(formData.criminalId) return alert("Criminal ID already generated");
    const criminalId = String(Math.floor(Math.random() * 1000000000000));
    setFormData({
      ...formData,
      criminalId,
    });
  }

  const handleMugshotsChangeAndUpload = async (event) => {
    const files = event.target.files;
    const mugshotsHashes = [];
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const mugshotHash = await uploadImageToIPFS(file);
      mugshotsHashes.push(mugshotHash);
    }
  
    setFormData({
      ...formData,
      mugshots: mugshotsHashes,
    });
  };

  const handleFingerprintEncodingsChange = (e) => {
    setFormData({ ...formData, fingerprintEncodings: e.target.value });
  };

  const handlePrev = () => {
    prevStep();
  };


  return (
    <div className="Step3">
      <form onSubmit={handleFormSubmit} className="Details">
        <div className="UploadMugs">
          <div className="Mugshots" onClick={() => document.getElementById("profilePicInput").click()}>
            <img src={formData.mugshots.length ? `https://ipfs.io/ipfs/${formData.mugshots[0]}` : user} alt="AddPic" />
            <div className="AddBtn">
              <AddIcon />
            </div>
            <input
              id="profilePicInput"
              type="file"
              multiple
              accept="image/jpeg, image/png"
              style={{ display: "none" }}
              onChange={handleMugshotsChangeAndUpload}
            />
          </div>
          <span>Upload Mugshots </span>
        </div>
        <div className="Cards">
          <div className="GenFacialEnc">
            <div className="Top">
              <PortraitIcon className="Icon" />
            </div>
            <div className="Bottom">
              <span>Generate Facial Encodings</span>
            </div>
          </div>
          <div className="GenFingerEnc">
            <div className="Top">
              <FingerprintIcon className="Icon" />
            </div>
            <div className="Bottom">
              <span>Generate Fingerprint Encodings</span>
            </div>
          </div>
        </div>
        <div className="Generate">
          <button type="button" onClick={handleGenerateCriminalId} className="GenBtn">Generate Criminal ID</button>
          {
            formData.criminalId && (
              <div className="CriminalId">
                <span>Criminal ID: </span>
                <span>{formData.criminalId}</span>
              </div>
            )
          }
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
  );
};

export default Step3;
