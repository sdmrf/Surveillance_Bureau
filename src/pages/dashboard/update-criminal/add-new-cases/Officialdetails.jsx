import "./Addnewcases.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

const Officialdetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrev = (e) => {
    e.preventDefault();
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
    <div className="Officialdetails">
      <div className="Header">
        <h1>
          <span className="O">O</span>fficial <span className="D"> D</span>
          etails
        </h1>
      </div>
      <form onSubmit={handleNext} className="Details">
        <div className="Data">
          <div className="Input">
            <input
              type="text"
              value={formData.Incharge}
              onChange={handleChange}
              name="Incharge"
              placeholder="Name Of Incharge"
            />
          </div>
          <div className="Column2">
            <div className="Input">
              <input
                type="text"
                value={formData.postOfIncharge}
                onChange={handleChange}
                name="postOfIncharge"
                placeholder="Post Of Incharge"
              />
            </div>
            <div className="Input">
              <input
                type="text"
                value={formData.OfficerID}
                onChange={handleChange}
                name="OfficerID"
                placeholder="Officer ID"
              />
            </div>
          </div>
          <div className="Input">
            <input
              type="text"
              value={formData.stationAddress}
              onChange={handleChange}
              name="stationAddress"
              placeholder="Police Station Address"
            />
          </div>

          <div className="Input">
            <input
              type="text"
              value={formData.InvestigationDesc}
              onChange={handleChange}
              name="InvestigationDesc"
              placeholder="Description of Investigation Stratergy"
            />
          </div>
          <div className="Uploads">
            <div className="Input date" id="dobContainer">
              {isEditingDob ? (
                <input
                  type="date"
                  value={formData.doc}
                  onChange={handleChange}
                  onBlur={handleDobBlur}
                  name="doc"
                  autoFocus
                />
              ) : (
                <span id="dobText" onClick={convertToInput}>
                  {formData.doc ? formData.doc : "Date Of complaint"}
                </span>
              )}
            </div>

            <div className="Input file">
              <label htmlFor="FIRReport" className="UploadBtn">
                <CloudUploadIcon className="Icon" />
                <span>Upload FIR</span>
              </label>
              <input
                id="FIRReport"
                type="file"
                accept="application/txt application/pdf application/msword application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                style={{ display: "none" }}
              />
            </div>
            <div className="Input file">
              <label htmlFor="InvReport" className="UploadBtn">
                <CloudUploadIcon className="Icon" />
                <span>Upload Investigation Report</span>
              </label>
              <input
                id="InvReport"
                type="file"
                accept="application/txt application/pdf application/msword application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="Buttons">
          <div className="Back">
            <button onClick={handlePrev}>
              Previous
              <ArrowBackIcon />
            </button>
          </div>
          <div className="Next">
            <button onClick={handleNext}>
              Next
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Officialdetails;
