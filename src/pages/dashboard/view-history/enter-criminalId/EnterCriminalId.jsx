import { useState } from "react";
import { getContract } from "../../../../ApiFeature";

const EnterCriminalId = ({ setCriminal }) => {
  const [criminalId, setCriminalId] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setCriminalId(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const contract = await getContract();
      const criminal = await contract.viewCriminal(criminalId);
      setCriminal(criminal);
    } catch (error) {
      console.log(error);
      alert("Criminal Id not found");
    }
  };
  return (
    <div className="EnterCriminalId" onSubmit={handleSubmit}>
      <form className="card enter" data-state="#about">
        <div className="card-header enter">
          <h1 className="card-fullname enter">View Criminal</h1>
          <h2 className="card-jobtitle enter">Enter Criminal ID</h2>
        </div>
        <div className="card-main enter">
          <input
            type="text"
            name="criminalId"
            value={criminalId}
            onChange={handleChange}
            required
          />
          <button className="Fetch" type="submit">Fetch Criminal</button>
        </div>
      </form>
    </div>
  );
};

export default EnterCriminalId;
