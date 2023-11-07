import { ethers } from "ethers";
import { abi } from "../artifacts/contracts/CriminalRecords.sol/CriminalRecords.json";
import { create } from "ipfs-http-client";

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
        console.error('Error uploading to IPFS:', error);
        throw error;
    }
};


// Getting the provider from metamask (connects to the blockchain)
const getProvider = () => {
    // Checking if metamask is installed
    if(window.ethereum){
        // Creating a provider
        const provider = new ethers.BrowserProvider(window.ethereum);
        return provider;
    }
    else{
        alert("Please install metamask");
    }
}

// Getting the signer from metamask (generates a user for signing transactions)
const getSigner = async () => {
    // Getting the provider
    const provider = getProvider();
    // Getting the signer
    const signer = await provider.getSigner();
    return signer;
}

// Getting the contract instance (contract instance)
const getContract = async () => {
    // Getting the signer
    const signer = await getSigner();
    // Creating a contract instance
    const contract = new ethers.Contract(address, abi, signer);
    return contract;
}

// Getting the current Block Number
const getCurrentBlockNumber = async () => {
    // Getting the provider
    const provider = getProvider();
    // Getting the current block number
    const blockNumber = await provider.getBlockNumber();
    return blockNumber;
}

export {getSigner, getContract, getCurrentBlockNumber, uploadImageToIPFS}