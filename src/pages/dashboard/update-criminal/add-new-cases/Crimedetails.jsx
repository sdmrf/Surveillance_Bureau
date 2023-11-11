import './Addnewcases.scss';
import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const Crimedetails = ({formData , setFormData, nextStep}) => {
    const [nameOfVictim, setNameOfVictim] = useState('');
    const [typeOfOffence, setTypeOfOffence] = useState('');
    const [IPCSection, setIPCSection] = useState('');
    const [Location, setLocation] = useState('');
    const [Date, setDate] = useState('');
    const [CrimeReport, setCrimeReport] = useState(null);
    const [DescriptionOfIncident, setDescriptionOfIncident] = useState('');

    const handleNext = () => {
        const step1Data = {
            nameOfVictim,
            typeOfOffence,
            IPCSection,
            Location,
            Date,
            CrimeReport,
            DescriptionOfIncident
        };
        setFormData({ ...formData, ...step1Data });
        nextStep();
    };

    const [isEditingDob, setIsEditingDob] = useState(false);

    const convertToInput = () => {
        setIsEditingDob(true);
    };

    const handleDobBlur = () => {
        setIsEditingDob(false);
    };
  return (
    <div className='Crimedetails'>
      <div className="Header">
        <div className="heading">
          <h1><span className='C'>C</span>riminal <span className='D'> D</span>etails</h1>
          </div>
        <div className="back">
          <Link to="/SurveillanceBureau/dashboard/update-criminal"><ArrowBackIcon className='backIcon'/></Link>
          
        </div>
      </div>
      <form onSubmit={handleNext} className='Details'>
        <div className="Data">
             <div className="Input">
                <input type="text" value={nameOfVictim} onChange={(e) => setNameOfVictim(e.target.value)} placeholder="Name Of Victim" />
             </div>
             <div className="Column2">
             <div className="Input">
                <input type="text" value={typeOfOffence} onChange={(e) => setTypeOfOffence(e.target.value)} placeholder="Type Of Offence" />
             </div>
             <div className="Input Select">
                <select value={IPCSection} onChange={(e) => setIPCSection(e.target.value)}>
                    <option value="">Select IPC Section</option>
                    <option value="IPC Section 1">IPC Section 378</option>
                    <option value="IPC Section 2">IPC Section 382</option>
                    <option value="IPC Section 3">IPC Section 383</option>
                    <option value="IPC Section 4">IPC Section 389</option>
                    <option value="IPC Section 5">IPC Section 415</option>
                    <option value="IPC Section 6">IPC Section 351</option>
                    <option value="IPC Section 7">IPC Section 359</option>
                    <option value="IPC Section 8">IPC Section 375</option>
                    <option value="IPC Section 9">IPC Section 376</option>
                    <option value="IPC Section 10">IPC Section 497</option>
                    <option value="IPC Section 11">IPC Section 441</option>
                    <option value="IPC Section 12">IPC Section 354A</option>
                    <option value="IPC Section 13">IPC Section 338</option>
                    <option value="IPC Section 14">IPC Section 295</option>
                </select>
             </div>
             </div>
             <div className="Input">
                <input type="text" value={Location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
             </div>
             <div className="Column4">
             <div className="Input date" id="dobContainer">
                        {isEditingDob ? (
                            <input
                                type="date"
                                value={Date}
                                onChange={(e) => setDate(e.target.value)}
                                onBlur={handleDobBlur}
                                autoFocus
                            />
                        ) : (
                            <span id="dobText" onClick={convertToInput}>
                                {Date ? Date : 'Date Of Incident'}
                            </span>
                        )}
                    </div>
                    <div className="Input file">
                        <label htmlFor="CrimeReportInput" className="UploadBtn">
                            <CloudUploadIcon className='Icon' />
                            <span>Upload Crime Report</span>
                        </label>
                        <input
                            id="CrimeReportInput"
                            type="file"
                            accept="application/txt application/pdf application/msword application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={(e) => setCrimeReport(e.target.files[0])}
                            style={{ display: "none" }}
                        />
                    </div>
                    </div>
                    <div className="Input">
                        <input type="text" value={DescriptionOfIncident} onChange={(e) => setDescriptionOfIncident(e.target.value)} placeholder="Description Of Incident" />
                    </div>
        </div>
        <div className="Input Next">
        <button className = 'NextBtn' onClick={handleNext}>Next
          <ArrowForwardIcon />
        </button>
      </div>
      </form>
    </div>
  )
}

export default Crimedetails
