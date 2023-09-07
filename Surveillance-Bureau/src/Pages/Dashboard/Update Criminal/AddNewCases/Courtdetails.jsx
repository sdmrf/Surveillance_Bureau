import './Addnewcases.scss';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Courtdetails = ({formData, prevStep, setFormData}) => {

    const [nameOfJudge, setnameOfJudge] = useState('');
    const [prosAttorney, setprosAttorney] = useState('');
    const [defLawyer, setdefLawyer] = useState('');
    const [Address, setAddress] = useState('');
    const [Description, setDescription] = useState('');
    const [CourtJudgement, setCourtJudgement] = useState(null);
    const [Date, setDate] = useState('');
    

    const handlePrev = () => {
        prevStep();
    };

      const handleFormSubmit = (e) => {
        const step3Data = {
            nameOfJudge,
            prosAttorney,
            defLawyer,
            Address,
            Description,
            CourtJudgement,
            Date
        };
        setFormData({ ...formData, ...step3Data });
        e.preventDefault();
      }



      const [isEditingDob, setIsEditingDob] = useState(false);

      const convertToInput = () => {
          setIsEditingDob(true);
      };
  
      const handleDobBlur = () => {
          setIsEditingDob(false);
      };
    return (
        <div className='Courtdetails'>
            <div className="Header">
            <h1><span className='C'>C</span>ourt <span className='D'> D</span>etails</h1>
            </div>
            <form onSubmit={handleFormSubmit} className='Details' >
                <div className="Data">
                <div className="Input">
                        <input type="text" value={nameOfJudge} onChange={(e) => setnameOfJudge(e.target.value)} placeholder="Name of assigned judge" />
                    </div>
                    <div className="Column2">
                    <div className="Input">
                        <input type="text" value={prosAttorney} onChange={(e) => setprosAttorney(e.target.value)} placeholder="Prosecutor Attorney" />
                    </div>
                    <div className="Input">
                        <input type="text" value={defLawyer} onChange={(e) => setdefLawyer(e.target.value)} placeholder="Defendants Lawyer" />
                    </div>
                    </div>
                    <div className="Input">
                        <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} placeholder="Location of court" />
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
                                {Date ? Date : 'Date Of Hearing'}
                            </span>
                        )}
                    </div>
                    <div className="Input file">
                            <label htmlFor="CourtJudgement" className="UploadBtn">
                                <span>Upload Court Judgement</span>
                            </label>
                            <input
                                id="CourtJudgement"
                                type="file"
                                accept="application/txt application/pdf application/msword application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                onChange={(e) => setCourtJudgement(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                        </div>
                        </div>
                        <div className="Input">
                        <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)}  placeholder="Description of court judgment" />
                    </div>
                </div>
                <div className="Buttons">
                <div className="Buttons Back">
                    <button onClick={handlePrev}>Previous
                        <ArrowBackIcon />
                    </button>
                </div>
                <div className="Buttons Submit">
                    <button>Submit
                        <CheckIcon />
                    </button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Courtdetails
