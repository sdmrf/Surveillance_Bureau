import { useState, useEffect, useRef } from "react";

import {
  loadModels,
  generateLabeledFaceDescriptors,
  detectAndRecognizeFaces,
} from "../../../ApiFeature";
import "./IdentifyCriminal.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import IdentifyIllustration from "/assets/identifyIllustration.svg";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";

const IdentifyCriminal = () => {
  const stepRef = useRef(null);

  const scrollToStep1 = () => {
    stepRef.current.scrollIntoView({ behavior: 'smooth' });
  };

   // States
   const [isVideoOn, setIsVideoOn] = useState(false);
   const [isModelLoaded, setIsModelLoaded] = useState(false);
   const [labeledFaceDescriptors, setLabeledFaceDescriptors] = useState([]);
   const [isLFDLoaded, setIsLFDLoaded] = useState(false);
   const [criminalId, setCriminalId] = useState("");
 
   // Refs
   const videoRef = useRef();
   const canvasRef = useRef();
 
   // Dimensions
   const vidWidth = 640;
   const vidHeight = 480;
   const displaySize = { width: vidWidth, height: vidHeight };
 
   // Load Models
   useEffect(() => {
     loadModels()
       .then(() => setIsModelLoaded(true))
       .catch((error) => console.error("Error loading models:", error));
   }, []);
 
   // Load Labeled Face Descriptors
   useEffect(() => {
     generateLabeledFaceDescriptors()
       .then((LFD) => {
         setLabeledFaceDescriptors(LFD);
         if (LFD.length > 0) setIsLFDLoaded(true);
       })
       .catch((error) =>
         console.error("Error generating labeled face descriptors:", error)
       );
   }, []);
 
   console.log(labeledFaceDescriptors);
 
   //Start Webcam
   const startWebcam = () => {
     setIsVideoOn(true);
     navigator.mediaDevices
       .getUserMedia({ video: { width: 300 } })
       .then((stream) => {
         let video = videoRef.current;
         video.srcObject = stream;
         video.play();
       })
       .catch((err) => {
         console.error("error:", err);
       });
   };
 
   //Close Webcam
   const closeWebcam = () => {
     setIsVideoOn(false);
     setCriminalId("");
     let video = videoRef.current;
     video.srcObject.getTracks()[0].stop();
   };
 
   // Copy text to clipboard
   const copyTextToClipboard = (text) => {
     navigator.clipboard.writeText(text);
   };
 
   // Face Recognition
   const handleFaceRecognition = async () => {
     if (!isModelLoaded) return console.error("Models not loaded ❌");
     console.log("Face Recognition Started ✅");
 
     // Getting the video element
     const video = videoRef.current;
     // Creating a canvas element
     const canvas = canvasRef.current;
     // Setting the canvas dimensions
     canvas.width = vidWidth;
     canvas.height = vidHeight;
 
     // Detecting and recognizing faces in a video
     setInterval(async () => {
       await detectAndRecognizeFaces(
         video,
         canvas,
         labeledFaceDescriptors,
         displaySize,
         criminalId,
         setCriminalId
       );
     }, 100);
   };

  return (
    <div className="IdentifyCriminal">
      <div className="Container">
        <div className="Top">
          <div className="Logo">
            <h1><span className="S">S</span>urveillance <span className="B">B</span>ureau</h1>
          </div>
          <Link to="/SurveillanceBureau/dashboard" className="Back" >
            <ArrowBackIcon />
          </Link>
        </div>
        <div className="Mid">
          <div className="Left">
            <div className="Wrapper">
              <div className="Top">
                <span className="VI">Verify Identity </span><span className="S">Securely !</span>
              </div>
              <div className="Down">
                <span>Effortlessly verify your identity online with our advanced AI-based verification service in seconds. <br />
                  No Delays, No Hassle.</span>
              </div>
            </div>
          </div>
          <div className="Right">
            <div className="Illustration">
              <img src={IdentifyIllustration} alt="Identify Illustration" />
            </div>
          </div>
        </div>
        <div className="Bottom">
          <div className="Scroll" onClick={scrollToStep1}></div>
        </div>
      </div>

      <div ref={stepRef}>
        <Step1  />
      </div>
    </div>
  );
};

export default IdentifyCriminal;
