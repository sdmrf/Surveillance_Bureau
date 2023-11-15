import "./Addnewcases.scss";
import Illu from "/assets/addNewCasesIllustration.png";
import { useState } from "react";
import { getContract } from "../../../../ApiFeature";
import { Link } from "react-router-dom";
import Crimedetails from "./Crimedetails";
import Officialdetails from "./Officialdetails";
import CourtDetails from "./Courtdetails";
import { Contract } from "ethers";

const Addnewcases = ({ criminalId }) => {
  console.log(criminalId);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    /*Crime Details*/
    caseId: "",
    nameOfVictim: "",
    typeOfOffence: "",
    IPCSection: "",
    LocationOfIncident: "",
    doi: "",
    DescriptionOfIncident: "",
    /*Official Details*/
    Incharge: "",
    postOfIncharge: "",
    OfficerID: "",
    stationAddress: "",
    doc: "",
    InvestigationDesc: "",

    /*Court Details*/
    nameOfJudge: "",
    prosAttorney: "",
    defLawyer: "",
    CourtAddress: "",
    CourtDesc: "",
    doh: "",
  });

  console.log(formData.caseId);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.caseId === "") return alert("Please generate case id");
      const {
        caseId,
        nameOfVictim,
        typeOfOffence,
        IPCSection,
        LocationOfIncident,
        doi,
        DescriptionOfIncident,
        Incharge,
        postOfIncharge,
        OfficerID,
        stationAddress,
        doc,
        InvestigationDesc,
        nameOfJudge,
        prosAttorney,
        defLawyer,
        CourtAddress,
        CourtDesc,
        doh,
      } = formData;
      const contract = await getContract();
      const CrimeDetails = [
        typeOfOffence,
        nameOfVictim,
        doi,
        IPCSection,
        LocationOfIncident,
        DescriptionOfIncident,
      ];

      const OfficialDetails = [
        Incharge,
        OfficerID,
        postOfIncharge,
        doc,
        stationAddress,
        InvestigationDesc,
      ];

      const CourtDetails = [
        nameOfJudge,
        prosAttorney,
        defLawyer,
        CourtAddress,
        CourtDesc,
        doh,
      ];
      // Adjust the parameters based on the expected format of addCase function
      await contract.addCase(criminalId, caseId , CrimeDetails, OfficialDetails, CourtDetails);
      alert(`Criminal registered successfully with criminal id ${caseId}`);
      console.log("Registration successful");
    } catch (err) {
      console.error("Error:", err);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Crimedetails
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Officialdetails
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <CourtDetails
            formData={formData}
            prevStep={prevStep}
            setFormData={setFormData}
            handleFormSubmit={handleFormSubmit}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="Addnewcases">
      <div className="Container">
        <div className="left">
          <img src={Illu} alt="" />
        </div>
        <div className="Right">{renderStep()}</div>
      </div>
    </div>
  );
};

export default Addnewcases;
