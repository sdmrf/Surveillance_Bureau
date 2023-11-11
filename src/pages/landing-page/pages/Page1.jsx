import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 
import "./pages.scss";
import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom";

const Page1 = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const Options = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#AE97DD",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      size: {
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.1,
        },
        value: { min: 1, max: 4 },
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 80,
      },
      opacity: {
        value: 1,
        anim: {
          enable: true,
          speed: 4,
          opacity_min: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
    },
  }

  return (
    <div className="Particle">
    <Particles
      style={{width: "100vw", height: "100vh"}}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={Options}
    />
    
    <div className="Top">
      <div className="Logo">
      <Spline className="Spline" scene="https://prod.spline.design/uXYZOyWocYfl63Va/scene.splinecode"/>
      </div>
      <div className="Buttons">
        <Link to="/SurveillanceBureau/complaints"> <button className="Button">
          Complaints
        </button></Link>
        <button className="Button2">
          About
        </button>
      </div>
    </div>
    <div className="Mid"> 
      <div className="Text">
        <h1>Revolutionizing <span>Law Enforcement!</span></h1>
        <p>Elevating the Integrity of National Security by Harnessing the Power of AI Face Recognition and Leveraging the Unparalleled Transparency of Blockchain Technology, Pioneering the Path to a Safer Society.</p>
      </div>
      <div className="Buttons">
        <Link to={"/SurveillanceBureau/home"}>
        <button className="button">
          Get Started
        </button></Link>
        
        <button className="button2">
          Learn More
        </button>
      </div>
    </div>
     </div>
  );
};

export default Page1;
