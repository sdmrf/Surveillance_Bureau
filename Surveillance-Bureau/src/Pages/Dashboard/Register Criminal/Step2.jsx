import "./RegisterCriminal.scss"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const { houseBuilding, streetRoad, areaLocality, landmark, pincode, country, state, district, cityTownVillage, postOffice, nationalityCertificate, residentialProof } = formData;

  const handleNext = () => {
    const step2Data = {
      houseBuilding,
      streetRoad,
      areaLocality,
      landmark,
      pincode,
      country,
      state,
      district,
      cityTownVillage,
      postOffice,
      nationalityCertificate,
      residentialProof,
    };
    setFormData({ ...formData, ...step2Data });
    nextStep();
  };

  const handlePrev = () => {
    prevStep();
  };

  return (
    <div className="Step2">
      <form onSubmit={handleNext} className="Details">
        <div className="Data">
          <div className="Input">
            <input type="text" value={houseBuilding} onChange={(e) => setFormData({ ...formData, houseBuilding: e.target.value })} placeholder="House/Building" />
          </div>
          <div className="Input">
            <select value={country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}>
              <option value="India">India</option>
              <option value="Other">Other Country</option>
            </select>
          </div>
          <div className="Input">
            <input type="text" value={streetRoad} onChange={(e) => setFormData({ ...formData, streetRoad: e.target.value })} placeholder="Street/Road" />
          </div>
          <div className="Input">
            <select value={state} onChange={(e) => setFormData({ ...formData, state: e.target.value })}>
              <option value="select">Select State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              {/* Other state options */}
              <option value="Other">Other State</option>
            </select>
          </div>
          <div className="Input">
            <input type="text" value={areaLocality} onChange={(e) => setFormData({ ...formData, areaLocality: e.target.value })} placeholder="Area/Locality" />
          </div>
          <div className="Input">
            <input type="text" value={landmark} onChange={(e) => setFormData({ ...formData, landmark: e.target.value })} placeholder="Landmark" />
          </div>
          <div className="Input">
            <input type="text" value={pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} placeholder="Pincode" inputMode="numeric" />
          </div>
          <div className="Input">
            <input type="text" value={district} onChange={(e) => setFormData({ ...formData, district: e.target.value })} placeholder="District" />
          </div>
          <div className="Input">
            <input type="text" value={cityTownVillage} onChange={(e) => setFormData({ ...formData, cityTownVillage: e.target.value })} placeholder="City/Town/Village" />
          </div>
          <div className="Input">
            <input type="text" value={postOffice} onChange={(e) => setFormData({ ...formData, postOffice: e.target.value })} placeholder="Post Office" />
          </div>
          <div className="Input">
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
                onChange={(e) => setFormData({ ...formData, nationalityCertificate: e.target.value[0] })}
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
                onChange={(e) => setFormData({ ...formData, residentialProof: e.target.value[0] })}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <button onClick={handleNext}>Next
            <ArrowForwardIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
