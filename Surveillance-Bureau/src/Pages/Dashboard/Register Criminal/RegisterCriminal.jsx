import { useState } from 'react';
import "./RegisterCriminal.scss";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const RegisterCriminal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 formData={formData} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="RegisterCriminal">
      <div className="Header">
        <Link to="/dashboard">
          <ArrowBackIcon className="Back" />
        </Link>
        <h1><span className="R">R</span>egister <span className="C">C</span>riminal</h1>
      </div>
      <ul className="ProgressBar">
        <li className={step === 1 ? 'Active' : ''} onClick={() => setStep(1)}>
          <BadgeOutlinedIcon className="ProgressBarIcon" />
          Criminal Identification
        </li>
        <li className={step === 2 ? 'Active' : ''} onClick={() => setStep(2)}>
          <HomeOutlinedIcon className="ProgressBarIcon" />
          Address Details
        </li>
        <li className={step === 3 ? 'Active' : ''} onClick={() => setStep(3)}>
          <PersonOutlineOutlinedIcon className="ProgressBarIcon" />
          Additional Identifications
        </li>
      </ul>

      <div className="Wrapper">
        {renderStep()}
      </div>
    </div>
  );
}

export default RegisterCriminal;
