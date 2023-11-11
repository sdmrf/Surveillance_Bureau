import "./RegisterCriminal.scss";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
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

  return (
    <div className="Step2">
      <form onSubmit={handleNext} className="Details">
        <div className="Data">
          <div className="Input">
            <input type="text" value={formData.houseBuilding} onChange={handleChange} name="houseBuilding" placeholder="House/Building" />
          </div>
          <div className="Input">
            <select value={formData.country} onChange={handleChange} name="country">
              <option value="India">India</option>
              <option value="Other">Other Country</option>
            </select>
          </div>
          <div className="Input">
            <input type="text" value={formData.street} onChange={handleChange} name="street" placeholder="Street/Road" />
          </div>
          <div className="Input">
            <select value={formData.state} onChange={handleChange} name="state">
              <option value="select">Select State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              {/* Other state options */}
              <option value="Other">Other State</option>
            </select>
          </div>
          <div className="Input">
            <input type="text" value={formData.area} onChange={handleChange} name="area" placeholder="Area/Locality" />
          </div>
          <div className="Input">
            <input type="text" value={formData.landmark} onChange={handleChange} name="landmark" placeholder="Landmark" />
          </div>
          <div className="Input">
            <input type="text" value={formData.pincode} onChange={handleChange} name="pincode" placeholder="Pincode" inputMode="numeric" />
          </div>
          <div className="Input">
            <input type="text" value={formData.district} onChange={handleChange} name="district" placeholder="District" />
          </div>
          <div className="Input">
            <input type="text" value={formData.city} onChange={handleChange} name="city" placeholder="City/Town/Village" />
          </div>
          <div className="Input">
            <input type="text" value={formData.postOffice} onChange={handleChange} name="postOffice" placeholder="Post Office" />
          </div>
        </div>
        <div className="Down">
          <button type="button" onClick={handlePrev} className="Prev">
            <ArrowBackIcon />
            Previous
          </button>
          <div className="Uploads">
            <div className="Input file">
              <label htmlFor="nationalityCertificateInp" className="UploadBtn">
                <CloudUploadIcon className='Icon' />
                <span>Upload Nationality Certificate</span>
              </label>
              <input
                id="nationalityCertificateInp"
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleChange}
                name="nationalityCertificate"
                style={{ display: "none" }}
              />
            </div>
            <div className="Input file">
              <label htmlFor="residentialProofInp" className="UploadBtn">
                <CloudUploadIcon className='Icon' />
                <span>Upload Aadhar Card</span>
              </label>
              <input
                id="residentialProofInp"
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleChange}
                name="residentialProof"
                style={{ display: "none" }}
              />
            </div>
          </div>
          <button type="submit">Next
            <ArrowForwardIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
