import "./Step1.scss"
import FaceScanning from "/assets/faceScanning.svg"
import FaceIdLock from "/assets/faceIdLock.mp4"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect, useRef, useMemo } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Spinner from "../Spinner/Spinner";
import {
  loadModels,
  generateLabeledFaceDescriptors,
  detectAndRecognizeFaces,
} from "../../../../ApiFeature";


const Step1 = () => {
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
    <div className="Step1">
      <div className="Shape First"></div>
      <div className="Top">
        <div className="Title">
          <span className="S1">Step - 1 </span><span className="Ver">Verification !</span>
        </div>
      </div>
      <div className="Bottom">
        <div className="Left">
          <img src={FaceScanning} alt="Face Scanning" />
        </div>
        <div className="Right">
          <div className="Card">
            <div className="Top">
              <h1>Face Recognition</h1>
              <span>Scan the suspects face to verify his/her identity</span>
            </div>
            <div className="Mid">
              <video src={FaceIdLock} autoPlay loop muted />
            </div>
            <div className="Bottom">
              <button>Scan
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step1