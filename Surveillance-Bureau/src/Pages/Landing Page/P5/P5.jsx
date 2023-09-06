import "./P5.scss";
import Loop from "../../../assets/LogoLoop.mp4";

const P5 = () => {

  return (
    <div className="P5">
      <video autoPlay muted loop id="myVideo">
        <source src={Loop} type="video/mp4" />
      </video>
    </div>
  );
};

export default P5;
