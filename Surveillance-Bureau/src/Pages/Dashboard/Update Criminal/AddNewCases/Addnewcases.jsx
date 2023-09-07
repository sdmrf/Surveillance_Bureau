import './Addnewcases.scss'
import Illu from '../../../../assets/Add new case - page 1.png'
import { useState } from 'react';
import Step1 from './Crimedetails'
import Step2 from './Officialdetails'
import Step3 from './Courtdetails'

const Addnewcases = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  }
  const prevStep = () => {
    setStep(step - 1);
  }

  const renderStep = () => {
    switch(step){
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      case 3:
        return <Step3 formData={formData}  prevStep={prevStep} setFormData={setFormData}/>
    }
  }
  return (
    <div className='Addnewcases'>
      <div className="Container">
        <div className="left">
           <img src={Illu} alt="" />
        </div>
        <div className="Right">
          {renderStep()}
        </div>
      </div>
    </div>
  )
}

export default Addnewcases
