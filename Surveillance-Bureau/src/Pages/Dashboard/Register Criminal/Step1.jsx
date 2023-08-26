import { useState } from 'react';
import "./RegisterCriminal.scss";
import user from "../../../assets/user.svg"
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Step1 = ({ formData, setFormData, nextStep }) => {
    const [photo, setPhoto] = useState(null);
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [aadharCard, setAadharCard] = useState(null);
    const [relativeFullName, setRelativeFullName] = useState('');
    const [relativePhoneNumber, setRelativePhoneNumber] = useState('');

    const handleNext = () => {
        const step1Data = {
            photo,
            fullName,
            gender,
            dob,
            mobileNumber,
            aadharNumber,
            aadharCard,
            relativeFullName,
            relativePhoneNumber,
        };
        setFormData({ ...formData, ...step1Data });
        nextStep();
    };

    //This code is for the date of birth input
    const [isEditingDob, setIsEditingDob] = useState(false);

    const convertToInput = () => {
        setIsEditingDob(true);
    };

    const handleDobBlur = () => {
        setIsEditingDob(false);
    };

    console.log(dob)
    return (
        <div className="Step1">
            <form onSubmit={handleNext} className="Details">
                <div className="UploadPhoto">
                    <div className="Photo" onClick={() => document.getElementById("profilePicInput").click()}>
                        <img src={photo ? URL.createObjectURL(photo) : user} alt="AddPic" />
                        <div className="AddBtn">
                            <AddIcon />
                        </div>
                        <input
                            id="profilePicInput"
                            type="file"
                            accept="image/jpeg, image/png"
                            style={{ display: "none" }}
                            onChange={(e) => (setPhoto(e.target.files[0]))}
                        />
                    </div>
                    <span>Upload Photo </span>
                </div>
                <div className="Data">
                    <div className="Input">
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />
                    </div>
                    <div className="Input select">
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
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
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                onBlur={handleDobBlur}
                                autoFocus
                            />
                        ) : (
                            <span id="dobText" onClick={convertToInput}>
                                {dob ? dob : 'Date Of Birth'}
                            </span>
                        )}
                    </div>
                    <div className="Input">
                        <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" />
                    </div>
                    <div className="Input">
                        <input type="text" value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} placeholder="Aadhar Card Number" />
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
                            onChange={(e) => setAadharCard(e.target.files[0])}
                            style={{ display: "none" }}
                        />
                    </div>
                    <div className="Input">
                        <input type="text" value={relativeFullName} onChange={(e) => setRelativeFullName(e.target.value)} placeholder="Relative Full Name" />
                    </div>
                    <div className="Input">
                        <input type="text" value={relativePhoneNumber} onChange={(e) => setRelativePhoneNumber(e.target.value)} placeholder="Relative Phone Number" />
                    </div>
                    <div className="Input Next">
                        <button onClick={handleNext}>Next
                            <ArrowForwardIcon />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Step1;
