import "./RegisterCriminal.scss";
import { useState } from "react";
import "./RegisterCriminal.scss";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { getContract, uploadImageToIPFS } from "../../../ApiFeature";


const RegisterCriminal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    /* Step 1 */
    criminalId: "",
    photo: null,
    fullName: "",
    gender: "",
    dob: "",
    mobileNumber: "",
    aadharNumber: "",
    relativeFullName: "",
    relativePhoneNumber: "",
    /* Step 2 */
    country: "",
    state: "",
    landmark: "",
    district: "",
    postOffice: "",
    houseBuilding: "",
    street: "",
    area: "",
    pincode: "",
    city: "",
    /* Step 3 */
    mugshots: [],
  });

  console.log(formData.criminalId);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(formData.mugshots.length === 0) return alert("Please upload atleast one mugshot");
    if(formData.criminalId === "") return alert("Please generate criminal id");
    const { criminalId, fullName, gender, dob, mobileNumber, aadharNumber, mugshots } = formData;
    const {houseBuilding, street, area, landmark, pincode, district, city, state, country} = formData;
    const address =`${houseBuilding}, ${street}, ${area}, ${landmark}, ${pincode}, ${district}, ${city}, ${state}, ${country}`;
    const contract = await getContract();
    await contract.registerCriminal(criminalId, fullName, gender, dob, mobileNumber, aadharNumber, address, mugshots);
    alert(`Criminal ${fullName} registered successfully with criminal id ${criminalId}`);
    console.log(`criminal name is ${fullName}, criminal id is ${criminalId}, gender ${gender}, dob ${dob}, mobile number ${mobileNumber}, aadhar number ${aadharNumber}, address ${address}, mugshots ${mugshots}}`)
    console.log(typeof(criminalId), typeof(fullName), typeof(gender), typeof(dob), typeof(mobileNumber), typeof(aadharNumber), typeof(address), typeof(mugshots));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep} handleFormSubmit={handleFormSubmit} />;
      default:
        return null;
    }
  };
  return (
    <div className="RegisterCriminal">
      <div className="Header">
          <ArrowBackIcon className="Back" />
        <h1>
          <span className="R">R</span>egister <span className="C">C</span>
          riminal
        </h1>
      </div>
      <ul className="ProgressBar">
        <li className={step === 1 ? "Active" : ""} onClick={() => setStep(1)}>
          <BadgeOutlinedIcon className="ProgressBarIcon" />
          Criminal Identification
        </li>
        <li className={step === 2 ? "Active" : ""} onClick={() => setStep(2)}>
          <HomeOutlinedIcon className="ProgressBarIcon" />
          Address Details
        </li>
        <li className={step === 3 ? "Active" : ""} onClick={() => setStep(3)}>
          <PersonOutlineOutlinedIcon className="ProgressBarIcon" />
          Additional Identifications
        </li>
      </ul>
      <div className="Wrapper">{renderStep()}</div>
    </div>
  );
};

export default RegisterCriminal;
