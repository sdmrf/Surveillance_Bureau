import React, { useEffect, useState } from "react";
import "../ViewHistory.scss"

const ViewCases = ({ criminal, cases }) => {
  

  if (!cases) {
    return <div>Loading...</div>; // or some other placeholder/loading state
  }
    
  
  

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
  return (
    <div>
      <div className="ViewCases">
              <div className="card" data-state="#about">
                <div className="card-header Cases">
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
                  <h2 className="card-jobtitle">{cases.caseId}</h2>
                </div>
                <div className="card-main">
                  <div className="card-section is-active" id="about">
                    <div className="card-content enter">
                      <div className="card-subtitle">Crime Details :</div>
                      <p className="card-desc">
                        <span>Offence :</span> {cases[1].offence}
                      </p>
                      <p className="card-desc">
                        <span>Victim Name :</span> {cases[1].victimName}
                      </p>
                      <p className="card-desc">
                        <span>Date Of Incident :</span> {cases[1].doi}
                      </p>
                      <p className="card-desc">
                        <span>Ipc Section:</span> {cases[1].ipc}
                      </p>
                      <p className="card-desc">
                        <span>Crime Location :</span>{" "}
                       {cases[1].crimeLocation}
                      </p>
                      <p className="card-desc">
                        <span>Description Of Incident :</span>{" "}
                       {cases[1].description}
                      </p>
                    </div>
                  </div>
                  <div className="card-section " id="experience">
                    <div className="card-content enter">
                      <div className="card-subtitle">Official Details :</div>
                      <p className="card-desc">
                        <span>Incharge Officer:</span> {cases[2].incharge}
                      </p>
                      <p className="card-desc">
                        <span>Officer Id :</span> {cases[2].officerId}
                      </p>
                      <p className="card-desc">
                        <span>Post Of Incharge :</span> {cases[2].postIncharge}
                      </p>
                      <p className="card-desc">
                        <span>Date Of Complaint :</span> {cases[2].doc}
                      </p>
                      <p className="card-desc">
                        <span>Station Address :</span>{" "}
                        {cases[2].stationAddress}
                      </p>
                      <p className="card-desc">
                        <span>Investigation Description :</span>{" "}
                        {cases[2].investigationDesc}
                      </p>
                    </div>
                  </div>
                  <div className="card-section " id="contact">
                    <div className="card-content enter">
                      <div className="card-subtitle">Court Details :</div>
                      <p className="card-desc">
                        <span>Name Of Judge :</span> {cases[3].judge}
                      </p>
                      <p className="card-desc">
                        <span>Prosecuter Lawyer :</span> {cases[3].prosecuter}
                      </p>
                      <p className="card-desc">
                        <span>Defendant Lawyer :</span> {cases[3].defendant}
                      </p>
                      <p className="card-desc">
                        <span>Court Address :</span> {cases[3].courtAddress}
                      </p>
                      <p className="card-desc">
                        <span>Date Of Hearing :</span>{" "}
                        {cases[3].doh}
                      </p>
                      <p className="card-desc">
                        <span>Court Judgement :</span>{" "}
                        {cases[3].judgement}
                      </p>
                    </div>
                  </div>
                  <div className="card-buttons">
                    <button data-section="#about" className="is-active">
                      Crime Details
                    </button>
                    <button data-section="#experience">Official Details</button>
                    <button data-section="#contact">Court Details</button>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default ViewCases;
