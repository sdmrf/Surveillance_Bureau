import React from "react";
import "./pages.scss";
import pfp from "./Assets/PFP 1.jpg";
import pfp1 from "./Assets/mrfPfp.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Page3 = () => {
  return (
    <div className="Page3">
      <div className="Container">
        <div className="Left">
          <img src={pfp} alt="" />
          <h1>
            <span className="p">P</span>aresh <span className="d">D</span>
            eshpande
          </h1>
          <p className="Post">Founder/ Developer/ UI designer</p>
          <p className="slogan">“We live and breathe software development”</p>
          <div className="SocialMedia">
            <InstagramIcon
              style={{ color: "var(--font-color)", fontSize: "35px" }}
            />
            <TwitterIcon
              style={{ color: "var(--font-color)", fontSize: "35px" }}
            />
            <LinkedInIcon
              style={{ color: "var(--font-color)", fontSize: "35px" }}
            />
            <GitHubIcon
              style={{ color: "var(--font-color)", fontSize: "35px" }}
            />
          </div>
        </div>
        <div className="Mid">
          <h1><span className="s">S</span>urveillance <span className="b">B</span>ureau</h1>
          <p>Experience the ecstasy and be a part of this mission to help our law enforcement to fight against social evils !</p>
          <div className="Buttons">
            <button className="button">Explore</button>
            <button className="button2">About</button>
          </div>
        </div>
        <div className="Right">
          <img src={pfp1} alt="" />
          <h1>
            <span className="s">S</span>yed <span className="m">M</span>aruf{" "}
            <span className="a">A</span>li
          </h1>
          <p className="Post">Founder/ Developer/ UI designer</p>
          <p className="slogan">“Eat Sleep Develop Repeat”</p>
          <div className="SocialMedia">
            <InstagramIcon
              style={{ color: "var(--font-color)", fontSize: "35px" }}
            />
            <TwitterIcon
              style={{ color: "var(--font-color)", fontSize: "35px" }}
            />
            <LinkedInIcon
              style={{ color: "var(--font-color)", fontSize: "35px" }}
            />
            <GitHubIcon
              style={{ color: "var(--font-color)", fontSize: "35px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
