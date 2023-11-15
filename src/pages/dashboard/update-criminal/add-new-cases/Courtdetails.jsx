import "./Addnewcases.scss";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Courtdetails = ({
  formData,
  prevStep,
  setFormData,
  handleFormSubmit,
}) => {
  const handleGenerateCriminalId = () => {
    if (formData.caseId) return alert("Criminal ID already generated");
    const caseId = String(Math.floor(Math.random() * 1000000000000));
    setFormData({
      ...formData,
      caseId,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <div className="Courtdetails">
      <div className="Header">
        <h1>
          <span className="C">C</span>ourt <span className="D"> D</span>etails
        </h1>
      </div>
      <form onSubmit={handleFormSubmit} className="Details">
        <div className="Data">
          <div className="Input">
            <input
              type="text"
              value={formData.nameOfJudge}
              onChange={handleChange}
              name="nameOfJudge"
              placeholder="Name of assigned judge"
            />
          </div>
          <div className="Column2">
            <div className="Input">
              <input
                type="text"
                value={formData.prosAttorney}
                onChange={handleChange}
                name="prosAttorney"
                placeholder="Prosecutor Attorney"
              />
            </div>
            <div className="Input">
              <input
                type="text"
                value={formData.defLawyer}
                onChange={handleChange}
                name="defLawyer"
                placeholder="Defendants Lawyer"
              />
            </div>
          </div>
          <div className="Input">
            <input
              type="text"
              value={formData.CourtAddress}
              onChange={handleChange}
              name="CourtAddress"
              placeholder="Location of court"
            />
          </div>
          <div className="Column4">
            <div className="Input date" id="dobContainer">
              {isEditingDob ? (
                <input
                  type="date"
                  value={formData.doh}
                  onChange={handleChange}
                  onBlur={handleDobBlur}
                  name="doh"
                  autoFocus
                />
              ) : (
                <span id="dobText" onClick={convertToInput}>
                  {formData.doh ? formData.doh : "Date Of Hearing"}
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
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="Input">
            <input
              type="text"
              value={formData.CourtDesc}
                  onChange={handleChange}
              name="CourtDesc"
              placeholder="Description of court judgment"
            />
          </div>
        </div>
        <div className="Buttons">
          <div className="Buttons Back">
            <button onClick={handlePrev}>
              Previous
              <ArrowBackIcon />
            </button>
          </div>
          <div className="Buttons Generate">
          <button type="button" onClick={handleGenerateCriminalId} className="GenBtn">Generate Case ID</button>
          {
            formData.caseId && (
              <div className="CriminalId">
                <span>Case ID: </span>
                <span>{formData.caseId}</span>
              </div>
            )
          }
        </div>
          <div className="Buttons Submit">
            <button>
              Submit
              <CheckIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Courtdetails;
