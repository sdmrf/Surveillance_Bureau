import { ethers } from "ethers";
import { abi } from "../artifacts/contracts/CriminalRecords.sol/CriminalRecords.json";
import { create } from "ipfs-http-client";
import * as faceapi from "face-api.js";

// Variables
const apiKey = import.meta.env.VITE_API_KEY;
const apiKeySecret = import.meta.env.VITE_API_KEY_SECRET;
const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// IPFS
const authorization = "Basic " + btoa(apiKey + ":" + apiKeySecret);
const ipfs = create({
  url: "https://ipfs.infura.io:5001/api/v0",
  headers: {
    authorization,
  },
});

// Function to upload an image to IPFS
const uploadImageToIPFS = async (file) => {
  try {
    const result = await ipfs.add(file);
    return result.path;
  } catch (error) {
    console.error("Error uploading to IPFS:", error);
    throw error;
  }
};

// Getting the provider from metamask (connects to the blockchain)
const getProvider = () => {
  // Checking if metamask is installed
  if (window.ethereum) {
    // Creating a provider
    const provider = new ethers.BrowserProvider(window.ethereum);
    return provider;
  } else {
    alert("Please install metamask 🦊");
  }
};

// Getting the signer from metamask (generates a user for signing transactions)
const getSigner = async () => {
  // Getting the provider
  const provider = getProvider();
  // Getting the signer
  const signer = await provider.getSigner();
  return signer;
};

// Getting the contract instance (contract instance)
const getContract = async () => {
  // Getting the signer
  const signer = await getSigner();
  // Creating a contract instance
  const contract = new ethers.Contract(address, abi, signer);
  return contract;
};

// Function to get the criminal ids
const getCriminalIds = async () => {
  try {
    // Getting the contract
    const contract = await getContract();
    // Getting the criminal ids
    const criminalIds = await contract.getCriminalIds();
    return criminalIds;
  } catch (error) {
    console.error("Error getting criminal ids ❌:", error);
    return [];
  }
};

// Ai Module

// Loading Ai face detection models
const loadModels = async () => {
  try {
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    ]);
    console.log("Face Recognition Models Loaded ✅");
  } catch (error) {
    console.error("Error loading models ❌:", error);
  }
};

// Generating labeled face descriptors
const generateLabeledFaceDescriptors = async () => {
  // Getting Criminal Ids
  const criminalIds = await getCriminalIds();
  console.log(criminalIds);

  // Creating an array of labeled face descriptors
  const labeledFaceDescriptors = [];

  try {
    await Promise.all(
      criminalIds.map(async (criminalId) => {
        // Contract Instance
        const contract = await getContract();
        // Getting the criminal data
        const criminalData = await contract.viewCriminal(criminalId);
        // Getting the criminal mugshots
        const mugshots = criminalData[2];

        // Looping through the mugshots
        for (let i = 0; i < mugshots.length; i++) {
          // Getting the image
          const img = await faceapi.fetchImage(
            `https://ipfs.io/ipfs/${mugshots[i]}`
          );
          // Detecting the face
          const detections = await faceapi
            .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptor();

          if (detections) {
            // Creating a description
            const description = [detections.descriptor];
            // Creating a labeled face descriptor
            const labeledFaceDescriptor = new faceapi.LabeledFaceDescriptors(
              criminalId,
              description
            );
            // Pushing the labeled face descriptor
            labeledFaceDescriptors.push(labeledFaceDescriptor);
          }
        }
      })
    );
    console.log("Labeled Face Descriptors Generated ✅");
    return labeledFaceDescriptors;
  } catch (error) {
    console.error("Error getting criminal data ❌:", error);
  }
};

// Detecting and recognizing faces in a video
const detectAndRecognizeFaces = async (video, canvas, labeledFaceDescriptors, displaySize,criminalId, setCriminalId) => {
  const detections = await faceapi
    .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceDescriptors();
    const resizedDetections = faceapi.resizeResults(
        detections,
        displaySize
      );
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  faceapi.draw.drawDetections(canvas, resizedDetections);

  const results = resizedDetections.map((d) => {
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.5);
    return faceMatcher.findBestMatch(d.descriptor);
  });

  results.forEach((criminalId, i) => {
    const box = resizedDetections[i].detection.box;
    const drawBox = new faceapi.draw.DrawBox(box, {
      label: criminalId.toString(),
    });
    drawBox.draw(canvas, displaySize);
  });

  if(!results[0]) return console.log("No face detected ❌");
  const cid = results[0].toString().split(" ")[0];
  if(isNaN(cid)) return console.log("No face detected ❌");
  setCriminalId(cid);

};

export {
  getSigner,
  getContract,
  uploadImageToIPFS,
  getCriminalIds,
  loadModels,
  generateLabeledFaceDescriptors,
  detectAndRecognizeFaces,
};
