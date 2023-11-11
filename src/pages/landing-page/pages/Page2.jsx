import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import Fr_logo from "./Assets/7232777.png";
import BC_logo from "./Assets/4533154.png";
import Rt_logo from "./Assets/4642743.png";

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number} ${styles.Container}`}
      offset={0}
      speed={0.3}
    >
      <div
        className="Container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
          scrollbarWidth: "none",
          paddingTop: "200px",
          paddingLeft: "25px",
        }}
      >
        <div
          className="Text1"
          offset={0}
          style={{
            paddingBottom: "100px",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "25px",
            gap: "15px",
          }}
        >
          <h1
            style={{
              display: "block",
              width: "750px",
              fontFamily: "Josefin Sans, sans-serif",
              color: "var(--font-color)",
              fontSize: "3.2rem",
            }}
          >
            Securing{" "}
            <span style={{ color: "var(--button-color)" }}>justice</span> with
            unbreakable{" "}
            <span style={{ color: "var(--button-color2)" }}>chains !</span>{" "}
          </h1>
          <p
            style={{
              color: "var(--font-color)",
              opacity: "0.5",
              display: "block",
              width: "750px",
              height: "50px",
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            Welcome to a World Where Data Security Is Redefined. Surveillance
            Bureau's Blockchain Integration Guarantees the Preservation of
            Sensitive Information with Unwavering Immutability and Crystal-Clear
            Transparency.
          </p>
          <div
            className="Buttons"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "25px",
              paddingTop: "50px",
            }}
          >
            <button
              className="Button1"
              style={{
                background: "var(--button-color)",
                padding: "10px 20px",
                fontSize: "1.2rem",
                borderRadius: "8px",
                color: "var(--font-color)",
                fontWeight: "300",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Explore
            </button>
            <button
              className="Button2"
              style={{
                background: "transparent",
                border: "1px solid var(--button-color2)",
                color: "var(--font-color)",
                padding: "10px 20px",
                fontSize: "1.2rem",
                borderRadius: "8px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          className="Logo"
          style={{ paddingBottom: "100px", paddingRight: "150px" }}
        >
          <img
            src={BC_logo}
            alt=""
            style={{ width: "500px", height: "500px" }}
          />
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer
      className={`${styles.text} ${styles.number} ${styles.Container}`}
      offset={1}
      speed={0.3}
      style={{ scrollbarWidth: "none", overflowX: "hidden" }}
    >
      <div
        className="Container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
          scrollbarWidth: "none",
          paddingTop: "200px",
          paddingLeft: "25px",
        }}
      >
        <div
          className="Text2"
          offset={0}
          style={{
            paddingBottom: "100px",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "25px",
            gap: "15px",
          }}
        >
          <h1
            style={{
              display: "block",
              width: "750px",
              fontFamily: "Josefin Sans, sans-serif",
              color: "var(--font-color)",
              fontSize: "3.2rem",
            }}
          >
            Faces{" "}
            <span style={{ color: "var(--button-color)" }}>Unveiled,</span>{" "}
            Justice{" "}
            <span style={{ color: "var(--button-color2)" }}>Prevailed !</span>
          </h1>
          <p
            style={{
              color: "var(--font-color)",
              opacity: "0.5",
              display: "block",
              width: "600px",
              height: "50px",
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            Elevating the national security by harnessing the power of
            State-of-art Machine learning algorithms which will work as a
            catalyst for accurate criminal identification
          </p>
          <div
            className="Buttons"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "25px",
              paddingTop: "50px",
            }}
          >
            <button
              className="Button1"
              style={{
                background: "var(--button-color)",
                padding: "10px 20px",
                fontSize: "1.2rem",
                borderRadius: "8px",
                color: "var(--font-color)",
                fontWeight: "300",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Explore
            </button>
            <button
              className="Button2"
              style={{
                background: "transparent",
                border: "1px solid var(--button-color2)",
                color: "var(--font-color)",
                padding: "10px 20px",
                fontSize: "1.2rem",
                borderRadius: "8px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          className="Logo"
          style={{ paddingBottom: "100px", paddingRight: "175px" }}
        >
          <img
            src={Fr_logo}
            alt=""
            style={{ width: "450px", height: "450px" }}
          />
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer
      className={`${styles.text} ${styles.number} ${styles.Container}`}
      offset={2}
      speed={0.3}
    >
      <div
        className="Container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
          scrollbarWidth: "none",
          paddingTop: "200px",
          paddingLeft: "25px",
        }}
      >
        <div
          className="Text3"
          offset={0}
          style={{
            paddingBottom: "100px",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "25px",
            gap: "15px",
          }}
        >
          <h1
            style={{
              display: "block",
              width: "750px",
              fontFamily: "Josefin Sans, sans-serif",
              color: "var(--font-color)",
              fontSize: "3.2rem",
            }}
          >
            Elevating{" "}
            <span style={{ color: "var(--button-color)" }}>security</span> with
            elegant{" "}
            <span style={{ color: "var(--button-color2)" }}>interfaces !</span>
          </h1>
          <p
            style={{
              color: "var(--font-color)",
              opacity: "0.5",
              display: "block",
              width: "650px",
              height: "50px",
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            At 'Surveillance Bureau,' we've harnessed the power of React.js to
            give our security officers an elegant interface that's both powerful
            and visually stunning. It's a new era in surveillance technology
            where elegance meets security.
          </p>
          <div
            className="Buttons"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "25px",
              paddingTop: "75px",
            }}
          >
            <button
              className="Button1"
              style={{
                background: "var(--button-color)",
                padding: "10px 20px",
                fontSize: "1.2rem",
                borderRadius: "8px",
                color: "var(--font-color)",
                fontWeight: "300",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Explore
            </button>
            <button
              className="Button2"
              style={{
                background: "transparent",
                border: "1px solid var(--button-color2)",
                color: "var(--font-color)",
                padding: "10px 20px",
                fontSize: "1.2rem",
                borderRadius: "8px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          className="Logo"
          style={{ paddingBottom: "100px", paddingRight: "120px" }}
        >
          <img
            src={Rt_logo}
            alt=""
            style={{ width: "500px", height: "500px" }}
          />
        </div>
      </div>
    </ParallaxLayer>
  </>
);

export default function Page2() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div
      style={{
        background: "#0b0b0b",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        scrollbarWidth: "none",
      }}
    >
      <Parallax
        className={styles.container}
        ref={parallax}
        pages={3}
        horizontal
      >
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  );
}
