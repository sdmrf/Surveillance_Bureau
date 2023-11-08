import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./ViewHistory.scss";
import EnterCriminalId from "./enter-criminalId/EnterCriminalId";

const ViewHistory = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [criminal, setCriminal] = useState(null);

  const slideBack = () => {
    setSlideNumber(
      slideNumber > 0 ? slideNumber - 1 : (criminal && criminal.mugshots.length - 1) || 0
    );
  };

  const slideFront = () => {
    setSlideNumber(
      slideNumber < (criminal && criminal.mugshots.length - 1) || 0
    );
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".card-buttons button");
    const sections = document.querySelectorAll(".card-section");
    const card = document.querySelector(".card");

    const handleButtonClick = (e) => {
      const targetSection = e.target.getAttribute("data-section");
      const section = document.querySelector(targetSection);
      targetSection !== "#about"
        ? card.classList.add("is-active")
        : card.classList.remove("is-active");
      card.setAttribute("data-state", targetSection);
      sections.forEach((s) => s.classList.remove("is-active"));
      buttons.forEach((b) => b.classList.remove("is-active"));
      e.target.classList.add("is-active");
      section.classList.add("is-active");
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", handleButtonClick);
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("click", handleButtonClick);
      });
    };
  }, []);

  return (
    <>
      {criminal ? (
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
                  <div className="card-subtitle">ABOUT</div>
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
                  <span>Relative Phone :</span> {criminal[1].relativeMobileNumber}
                  </p>
                </div>
              </div>
              <div className="card-section" id="experience">
                <div className="card-content">
                  <div className="card-subtitle">WORK EXPERIENCE</div>
                  <div className="card-timeline">
                    <div className="card-item" data-year="2014">
                      <div className="card-item-title">
                        Front-end Developer at <span>JotForm</span>
                      </div>
                      <div className="card-item-desc">
                        Disrupt stumptown retro everyday carry unicorn.
                      </div>
                    </div>
                    <div className="card-item" data-year="2016">
                      <div className="card-item-title">
                        UI Developer at <span>GitHub</span>
                      </div>
                      <div className="card-item-desc">
                        Developed new conversion funnels and disrupt.
                      </div>
                    </div>
                    <div className="card-item" data-year="2018">
                      <div className="card-item-title">
                        Illustrator at <span>Google</span>
                      </div>
                      <div className="card-item-desc">
                        Onboarding illustrations for App.
                      </div>
                    </div>
                    <div className="card-item" data-year="2020">
                      <div className="card-item-title">
                        Full-Stack Developer at <span>CodePen</span>
                      </div>
                      <div className="card-item-desc">
                        Responsible for the encomposing brand expreience.
                      </div>
                    </div>
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
                    <button className="contact-me">View Previous Cases</button>
                  </div>
                </div>
              </div>
              <div className="card-buttons">
                <button data-section="#about" className="is-active">
                  ABOUT
                </button>
                <button data-section="#experience">MUGSHOTS</button>
                <button data-section="#contact">CONTACT</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EnterCriminalId setCriminal={setCriminal} />
      )}
    </>
  );
};

export default ViewHistory;
