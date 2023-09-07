import './Addnewcases.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';

const Officialdetails = ({ formData, setFormData, nextStep, prevStep }) => {
    const { Incharge, postOfIncharge, OfficerID, Address, Description, FirReport, InvestigationReport } = formData;

    const [Date, setDate] = useState('');
    const handleNext = () => {
        const step2Data = {
            Incharge,
            postOfIncharge,
            OfficerID,
            Address,
            Date,
            Description,
            FirReport,
            InvestigationReport,
        };
        setFormData({ ...formData, ...step2Data });
        nextStep();
    };

    const handlePrev = () => {
        prevStep();
    };

    const [isEditingDob, setIsEditingDob] = useState(false);

    const convertToInput = () => {
        setIsEditingDob(true);
    };

    const handleDobBlur = () => {
        setIsEditingDob(false);
    };

    return (
        <div className='Officialdetails'>
            <div className="Header">
                <h1><span className='O'>O</span>fficial <span className='D'> D</span>etails</h1>
            </div>
            <form onSubmit={handleNext} className='Details'>
                <div className="Data">
                    <div className="Input">
                        <input type="text" value={Incharge} onChange={(e) => setFormData({ ...formData, Incharge: e.target.value })} placeholder="Name Of Incharge" />
                    </div>
                    <div className="Column2">
                        <div className="Input">
                            <input type="text" value={postOfIncharge} onChange={(e) => setFormData({ ...formData, postOfIncharge: e.target.value })} placeholder="Post Of Incharge" />
                        </div>
                        <div className="Input">
                            <input type="text" value={OfficerID} onChange={(e) => setFormData({ ...formData, OfficerID: e.target.value })} placeholder="Officer ID" />
                        </div>
                    </div>
                    <div className="Input">
                        <input type="text" value={Address} onChange={(e) => setFormData({ ...formData, Address: e.target.value })} placeholder="Police Station Address" />
                    </div>

                    <div className="Input">
                        <input type="text" value={Description} onChange={(e) => setFormData({ ...formData, Description: e.target.value })} placeholder="Description of Investigation Stratergy" />
                    </div>
                    <div className="Uploads">
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
                            <label htmlFor="FIRReport" className="UploadBtn">
                                <CloudUploadIcon className='Icon' />
                                <span>Upload FIR</span>
                            </label>
                            <input
                                id="FIRReport"
                                type="file"
                                accept="application/txt application/pdf application/msword application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                onChange={(e) => setFormData({ ...formData, FirReport: e.target.value[0] })}
                                style={{ display: "none" }}
                            />
                        </div>
                        <div className="Input file">
                            <label htmlFor="InvReport" className="UploadBtn">
                                <CloudUploadIcon className='Icon' />
                                <span>Upload Investigation Report</span>
                            </label>
                            <input
                                id="InvReport"
                                type="file"
                                accept="application/txt application/pdf application/msword application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                onChange={(e) => setFormData({ ...formData, InvestigationReport: e.target.value[1] })}
                                style={{ display: "none" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="Buttons">
                    <div className="Back">
                        <button onClick={handlePrev}>Previous
                            <ArrowBackIcon />
                        </button>
                    </div>
                    <div className="Next">
                        <button onClick={handleNext}>Next
                            <ArrowForwardIcon />
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Officialdetails
