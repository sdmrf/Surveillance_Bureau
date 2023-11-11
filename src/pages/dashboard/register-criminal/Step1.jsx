import React, { useState } from 'react';
import "./RegisterCriminal.scss";
import user from "/assets/userIcon.svg"
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handlePhoto = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  }

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  }

  // This code is for the date of birth input
  const [isEditingDob, setIsEditingDob] = useState(false);

  const convertToInput = () => {
    setIsEditingDob(true);
  };

  const handleDobBlur = () => {
    setIsEditingDob(false);
  };

  return (
    <div className="Step1">
      <form onSubmit={handleNext} className="Details">
        <div className="UploadPhoto">
          <div className="Photo" onClick={() => document.getElementById("profilePicInput").click()}>
            <img src={formData.photo ? URL.createObjectURL(formData.photo) : user} alt="AddPic" />
            <div className="AddBtn">
              <AddIcon />
            </div>
            <input
              id="profilePicInput"
              type="file"
              accept="image/jpeg, image/png"
              style={{ display: "none" }}
              onChange={handlePhoto}
              name="photo" // Add name attribute for photo
            />
          </div>
          <span>Upload Photo</span>
        </div>
        <div className="Data">
          <div className="Input">
            <input type="text" value={formData.fullName} onChange={handleChange} name="fullName" placeholder="Full Name" />
          </div>
          <div className="Input select">
            <select value={formData.gender} onChange={handleChange} name="gender">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="Input date" id="dobContainer">
            {isEditingDob ? (
              <input
                type="date"
                value={formData.dob}
                onChange={handleChange}
                onBlur={handleDobBlur}
                autoFocus
                name="dob"
              />
            ) : (
              <span id="dobText" onClick={convertToInput}>
                {formData.dob ? formData.dob : 'Date Of Birth'}
              </span>
            )}
          </div>
          <div className="Input">
            <input type="text" value={formData.mobileNumber} onChange={handleChange} name="mobileNumber" placeholder="Mobile Number" />
          </div>
          <div className="Input">
            <input type="text" value={formData.aadharNumber} onChange={handleChange} name="aadharNumber" placeholder="Aadhar Card Number" />
          </div>
          <div className="Input file">
            <label htmlFor="aadharCardInput" className="UploadBtn">
              <CloudUploadIcon className='Icon' />
              <span>Upload Aadhar Card</span>
            </label>
            <input
              id="aadharCardInput"
              type="file"
              accept="image/jpeg, image/png"
              onChange={handlePhoto}
              name="aadharCard" // Add name attribute for aadharCard
              style={{ display: "none" }}
            />
          </div>
          <div className="Input">
            <input type="text" value={formData.relativeFullName} onChange={handleChange} name="relativeFullName" placeholder="Relative Full Name" />
          </div>
          <div className="Input">
            <input type="text" value={formData.relativePhoneNumber} onChange={handleChange} name="relativePhoneNumber" placeholder="Relative Phone Number" />
          </div>
          <div className="Input Next">
            <button type="submit">Next
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Step1;
