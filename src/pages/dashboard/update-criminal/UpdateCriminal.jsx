import "./UpdateCriminal.scss";
import illu1 from "/assets/updateIllustration.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import mug from "/assets/demoMugshot1.jpg";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { Link } from "react-router-dom";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EnterCriminalId from "./EnterCriminalId";
import Addnewcases from "./add-new-cases/Addnewcases";

const UpdateCriminal = () => {
  const [isSlide, setIsSlide] = useState(false);
  const [criminal, setCriminal] = useState(null);
  const [isNewCase, setIsNewCase] = useState(false);

  return (
    <>
      {criminal ? (
        <>
          {isNewCase ? (
            <Addnewcases criminalId={criminal.criminalId} />
          ) : (
            <div className="UpdateCriminal">
              <div className="Navbar">
                <div className="Back">
                  <Link
                    to="/SurveillanceBureau/dashboard"
                    className="BackArrow"
                  >
                    <ArrowBackIcon className="BackArrow" />
                  </Link>
                </div>
                <div className="Update">
                  <button
                    className="Updatebtn"
                    onClick={() => setIsNewCase(!isNewCase)}
                  >
                    <l1>Add New Cases</l1>
                    <AddCircleSharpIcon className="add" />
                  </button>
                  <div className="img">
                    {!isSlide && (
                      <img
                        src={mug}
                        alt=""
                        onClick={() => setIsSlide(!isSlide)}
                      />
                    )}
                    {isSlide && (
                      <div className="Contain">
                        <Link
                          to="/SurveillanceBureau/dashboard/update-criminal/update-criminal-info/UpdateInfo"
                          className="Header"
                        >
                          <div className="Update_info">
                            <button className="UpdateCriminal">
                              <l1>Update Info</l1>
                              <img src={mug} alt="" />
                            </button>
                          </div>
                        </Link>
                        <div
                          className="Close"
                          onClick={() => setIsSlide(!isSlide)}
                        >
                          <CloseIcon className="CloseIcon" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="Wrapper">
                <div className="Left">
                  <div className="Heading">
                    <h1>
                      <span
                        style={{
                          color: "lightgray",
                          fontFamily: "var(--font-family",
                        }}
                      >
                        Update
                      </span>
                      <span
                        style={{
                          color: "#6044D8",
                          fontFamily: "var(--font-family",
                        }}
                      >
                        {" "}
                        Cases !
                      </span>
                    </h1>
                    <p>
                      Easily update the previous cases of criminals or add new
                      cases effortlessly ...
                    </p>
                  </div>
                  <div className="Illustartion">
                    <img src={illu1} alt="" />
                  </div>
                </div>
                <div className="Right">
                  <div className="Container">
                    <div className="Text">
                      <h1>
                        <span> Update Previous Cases </span> |{" "}
                        <span> {criminal.caseIds.length}</span>
                      </h1>
                    </div>
                    <div className="UpdateCases">
                      <div className="Header">
                        <h1>Criminal ID</h1>
                        <h1>Case ID</h1>
                        <button className="Updatebtn1">
                          <l1>Update</l1>
                          <AddCircleSharpIcon className="add" />
                        </button>
                      </div>
                      <div className="Content">
                        {criminal.caseIds.map((caseId, index) => (
                          <div className="Case" key={index}>
                            <h1 className="CriminalID">
                              {criminal.criminalId}
                            </h1>
                            <h1 className="Charges"> {caseId}</h1>
                            <Link
                              to="/SurveillanceBureau/dashboard/view-history/view-cases"
                              className="Icon"
                            >
                              <AddCircleOutlineSharpIcon className="Icon" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <EnterCriminalId setCriminal={setCriminal} />
      )}
    </>
  );
};

export default UpdateCriminal;
