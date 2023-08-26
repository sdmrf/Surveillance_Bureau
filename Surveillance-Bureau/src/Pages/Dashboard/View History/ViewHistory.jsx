import "./ViewHistory.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import mug from "../../../assets/mugshot.jpg"
import mug1 from "../../../assets/mugshot 2.jpg"
import mug2 from "../../../assets/mug.jpg"
import mug3 from "../../../assets/mug 2.jpg"
import PreviousCases from "./PreviousCases/PreviousCases";

const data = [
  mug,
  mug1,
  mug2,
  mug3
]
const ViewHistory = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const SlideRef = useRef();

  const slideBack = () => {
    let dis = SlideRef.current.getBoundingClientRect().x - 448.5
    if (slideNumber > 0) {
      setSlideNumber(slideNumber - 1, data.length - 1);
      SlideRef.current.style.transform = `translateX(${405 + dis}px)`
    }
  };

  const slideFront = () => {
    let dis = SlideRef.current.getBoundingClientRect().x - 448.5
    if (slideNumber < data.length - 1) {
      setSlideNumber(slideNumber + 1, 0);
      SlideRef.current.style.transform = `translateX(${-400 + dis}px)`
    }
  };

  return (
    <div className="ViewCriminal">
      <div className="Container">
        <div className="Back">
          <Link to="/dashboard" className="Link"> <ArrowBackIcon className="back" /> </Link>
        </div>
        <div className="ViewHistory">
            <Link to="/dashboard/view-history/previous-cases" className="Link"> <button className="show"> View History</button> </Link>
        </div>
        <div className="Shape First"></div>
        <div className="Shape Second"></div>
        <div className="Shape Third"></div>
        <div className="Wrapper">
          <div className="LeftCard">
            <div className="Top">
              <ArrowBackIosIcon className="arrow left" onClick={slideBack} />
              <div className="Imgcontainer" ref={SlideRef} >
                {data.map((item, index) => (
                  <img src={item} alt="" key={index} />
                ))}
              </div>
              <ArrowForwardIosIcon className="arrow right" onClick={slideFront} />
            </div>
            <div className="Mid">
              <div className="MidLeft">
                  <img src={mug2} alt="" />
              </div>
              <div className="MidRight">
                <l1 className="Firstline"> <span className="Country">Country :</span> <span className="CountryName"> USA</span></l1>
                <l2 className="Secondline"> <span className="State">State :</span> <span className="statename"> Ohio</span></l2>
                <l3 className="Thirdline"> <span className="city">City :</span> <span className="cityname"> Cleveland</span></l3>
              </div>
            </div>
            <div className="Bottom">
              <l1 className="First"> <span className="ID">#34f211i68d</span><span className="Text"> Criminal ID</span></l1>
              <l2 className="Second"> <span className="ID">9670-1128-4329</span><span className="Text"> Aadhar ID</span></l2>
            </div>
          </div>
          <div className="RightCard">
            <div className="CriminalProfile">
              <img src={mug2} alt="" />
              <h1> Paul Martinez</h1>
            </div>
            <div className="CriminalInfo">
            <l1 className="First"> <span className="Name">Name :</span> <span className="text"> Paul Andrew Martinez</span></l1>
            <div className="Format">
            <l1 className="Second"> <span className="DOB">DOB :</span> <span className="text"> 23/08/2002</span></l1>
            <l1 className="Third"> <span className="Gender">Gender :</span> <span className="text"> Male</span></l1>
            </div>
            <l1 className="Fourth"> <span className="Mob">Mobile No :</span> <span className="text"> 9156700169</span></l1>
            <l1 className="Fifth"> <span className="Address">Address :</span> <span className="text"> 4361 Clarkwood PKWY APT 201 , Cleveland, OHIO  44128-4841 , USA</span></l1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewHistory