import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./ViewHistory.scss";
import EnterCriminalId from "./enter-criminalId/EnterCriminalId";
import ViewCases from "./view-cases/ViewCases";
import { getContract } from "../../../ApiFeature";

const ViewHistory = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [criminal, setCriminal] = useState(null);
  const [isCases, setIsCases] = useState(false);
  const [criminalId, setCriminalId] = useState("");
  const [caseId, setCaseId] = useState("");
  const [cases, setCases] = useState(null);
  const [casesX , setCasesX] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contract = await getContract();
        const currentCase = await contract.viewCases(criminalId, caseId);
        setCases(currentCase);
      } catch (error) {
        console.log(error);
        alert("Case Id not found");
      }
    };

    if (criminalId && caseId) {
      fetchData();
    }
  }, [{ criminalId, caseId }]);

  useEffect(() => {
    const handleButtonClick = (e) => {
      const targetSection = e.target.getAttribute("data-section");
      const card = document.querySelector(".card");
      const sections = document.querySelectorAll(".card-section");
      const buttons = document.querySelectorAll(".card-buttons button");
      const section = document.querySelector(targetSection);

      if (targetSection !== "#about") {
        card.classList.add("is-active");
      } else {
        card.classList.remove("is-active");
      }
      card.setAttribute("data-state", targetSection);
      sections.forEach((s) => s.classList.remove("is-active"));
      buttons.forEach((b) => b.classList.remove("is-active"));
      e.target.classList.add("is-active");
      section.classList.add("is-active");
    };

    const buttons = document.querySelectorAll(".card-buttons button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", handleButtonClick);
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("click", handleButtonClick);
      });
    };
  });

  const slideBack = () => {
    setSlideNumber(
      slideNumber > 0 ? slideNumber - 1 : criminal.mugshots.length - 1
    );
  };

  const slideFront = () => {
    setSlideNumber(
      slideNumber < criminal.mugshots.length - 1 ? slideNumber + 1 : 0
    );
  };

  return (
    <>
      {criminal ? (
        <>
          {isCases ? (
            <ViewCases criminal={criminal} cases={cases}/>
          ) : (
            <div className="ViewHistory">
              <div className="card" data-state="#about">
                <div className="card-header">
                  <div
                    className="card-cover"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')",
                    }}
                  ></div>
                  <img
                    className="card-avatar"
                    src={`https://ipfs.io/ipfs/${criminal.mugshots[0]}`}
                    alt="avatar"
                  />
                  <h1 className="card-fullname">{criminal[1].fullName}</h1>
                  <h2 className="card-jobtitle">{criminal.criminalId}</h2>
                </div>
                <div className="card-main">
                  <div className="card-section is-active" id="about">
                    <div className="card-content enter">
                      <div className="card-subtitle">PERSONAL INFO :</div>
                      <p className="card-desc">
                        <span>D.O.B :</span> {criminal[1].dob}
                      </p>
                      <p className="card-desc">
                        <span>Gender :</span> {criminal[1].gender}
                      </p>
                      <p className="card-desc">
                        <span>Aadhar Number :</span> {criminal[1].aadharNumber}
                      </p>
                      <p className="card-desc">
                        <span>Relative Name :</span> {criminal[1].relativeName}
                      </p>
                      <p className="card-desc">
                        <span>Relative Phone :</span>{" "}
                        {criminal[1].relativeMobileNumber}
                      </p>
                    </div>
                  </div>
                  <div className="card-section SliderX" id="experience">
                    <div className="card-content">
                      <div className="card-subtitle">MUGSHOTS</div>
                      <div className="Slider">
                        <ArrowBackIosIcon
                          className="arrow left"
                          onClick={slideBack}
                        />
                        <div className="ImgContainer">
                          <div
                            className="ImgWrapper"
                            style={{
                              transform: `translateX(-${slideNumber * 100}%)`,
                            }}
                          >
                            {criminal.mugshots.map((mugshot, index) => (
                              <div className="Slide" key={index}>
                                <img
                                  src={`https://ipfs.io/ipfs/${mugshot}`}
                                  alt="mugshot"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <ArrowForwardIosIcon
                          className="arrow right"
                          onClick={slideFront}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-section" id="contact">
                    <div className="card-content">
                      <div className="card-subtitle">CONTACT</div>
                      <div className="card-contact-wrapper">
                        <div className="card-contact">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {criminal[1].addressx}
                        </div>
                        <div className="card-contact">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                          </svg>
                          {criminal[1].mobileNumber}
                        </div>
                        <div className="card-contact">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <path d="M22 6l-10 7L2 6" />
                          </svg>
                          demo@criminal.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-section "
                    data-section="#cases"
                    id="cases"
                  >
                    <div className="card-content">
                      <div className="card-subtitle">PREVIOUS CASES</div>
                      <div className="card-timeline">
                        {criminal.caseIds.map((caseId, index) => (
                          <div className="mainDiv">
                            <div
                              className="card-item"
                              data-year="2014"
                              key={index}
                            >
                              <div className="card-item-title">
                                Case ID: <span>{caseId}</span>
                              </div>
                              <div className="card-item-desc">
                                Charges: GoldRobbery-IPC390
                              </div>
                              <button
                                onClick={() => {
                                  setIsCases(!isCases);
                                  setCaseId(caseId);
                                }}
                              >
                                View
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="card-buttons">
                    <button data-section="#about" className="is-active">
                      ABOUT
                    </button>
                    <button data-section="#experience">MUGSHOTS</button>
                    <button data-section="#contact">CONTACT</button>
                    <button data-section="#cases">CASES</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <EnterCriminalId
          setCriminal={setCriminal}
          setCriminalId={setCriminalId}
        />
      )}
    </>
  );
};

export default ViewHistory;
