# Surveillance Bureau

Welcome to the Surveillance Bureau project! In a world where criminal activities are becoming increasingly sophisticated, law enforcement agencies need cutting-edge tools to combat crime effectively. This is where the Surveillance Bureau comes in. Our innovative web application leverages AI, facial recognition, biometrics, and blockchain to identify criminals swiftly and accurately.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Blockchain Backend](#blockchain-backend)
- [Contributors](#contributors)
- [Contact](#contact)
- [License](#license)

## Introduction

The Surveillance Bureau project aims to revolutionize the way law enforcement agencies identify and apprehend suspects. By combining advanced technologies such as artificial intelligence and blockchain, we're creating a robust platform that not only detects criminals but also enhances the overall security infrastructure.

Our key features include:

- **Facial Recognition:** We integrate Amazon Rekognition API, a state-of-the-art technology for facial analysis. This allows us to detect and match faces with a high degree of precision, helping law enforcement quickly pinpoint suspects.

- **Biometric Data Matching:** Our system goes beyond facial recognition by incorporating biometric data matching. This means that even if a criminal alters their appearance, our technology can identify them based on unique biometric characteristics.

- **Blockchain Security:** Criminal records are stored on a secure blockchain using the Truffle framework. Contracts are located within the Smart_Contracts folder outside of the React project, ensuring the integrity and immutability of the data.

- **User-Friendly Interface:** We prioritize ease of use, creating an intuitive interface for law enforcement personnel to access and search criminal data efficiently.

- **Vite and React.js Frontend:** We've chosen Vite and React.js to build our frontend, ensuring a seamless and responsive user experience.

Our vision is to empower law enforcement agencies with the tools they need to create safer communities. Join us in this journey of innovation and security enhancement.

## Project Structure
```bash

Surveillance-Bureau/ # Root directory for the entire project
├── src/
│ ├── api/
│ ├── components/
│ ├── contracts/ # Truffle smart contract artifacts
│ ├── ...
│
Smart_Contracts/
├── contracts/ # Solidity smart contract source files
│ ├── CriminalRecords.sol
│ ├── ...
├── migrations/ # Truffle migration scripts
│ ├── 1_initial_migration.js
│ ├── 2_deploy_contracts.js
├── ...

```


## Features

- AI-powered facial recognition for identifying criminals using Amazon Rekognition.
- Biometric data matching against a database of criminal records.
- Integration with a secure blockchain for storing criminal records.
- User-friendly interface for law enforcement agencies to access and search criminal data.
- Vite and React.js frontend for a smooth and interactive user experience.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (version 18.16.1)
- npm (version 9.8.1)

### Installation

1. Clone the repository: `git clone https://github.com/sdmrf/Surveillance-Bureau.git`
2. Navigate to the project directory: `cd SB`
3. Navigate to the parent directory: `cd Surveillance-Bureau`
5. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm run dev`
2. Access the application in your web browser at `http://localhost:5173/`

## API Integration

This project integrates Amazon Rekognition API for facial recognition. To integrate the API:

1. Sign up for an AWS account and set up Amazon Rekognition.
2. Create a new Rekognition collection for face data storage.
3. Update your AWS credentials in the `rekognition.js` file located in `src/api`.
4. Implement functions to call Rekognition APIs for face detection and recognition.
5. Integrate these functions with your React components to analyze uploaded images.

## Blockchain Backend

The project's blockchain backend is powered by the Truffle framework. The smart contract logic is written in Solidity and resides in the Smart_Contracts folder outside of the React project. Truffle's development environment streamlines the process of compiling, deploying, and interacting with smart contracts.

To enhance the blockchain functionality:

1. **Install Truffle:**
   - Make sure you have Node.js and npm installed.
   - Install Truffle globally using npm:
     ```bash
     npm install -g truffle
     ```

2. **Write Smart Contracts:**
   - Create your Solidity smart contract files in the `Smart_Contracts/contracts` directory.
   - Define your contract's functionality, state variables, and methods as needed.

3. **Configure Truffle:**
   - Navigate to the `Smart_Contracts` directory and run:
     ```bash
     truffle init
     ```
   - This initializes a Truffle project and sets up the necessary directory structure.

4. **Migration Scripts:**
   - Add migration scripts to the `Smart_Contracts/migrations` directory.
   - Migration scripts define the deployment sequence for your smart contracts.

5. **Compile and Deploy:**
   - Compile your contracts using:
     ```bash
     truffle compile
     ```
   - Deploy your contracts to a blockchain network using migration scripts:
     ```bash
     truffle migrate
     ```

6. **Interact with Contracts:**
   - Use Truffle's console to interact with your deployed contracts:
     ```bash
     truffle console
     ```
   - You can call contract methods, retrieve data, and more.

Truffle simplifies the entire lifecycle of smart contracts, from development to deployment. The combination of React.js, Vite, and Truffle empowers the Surveillance Bureau with a robust and secure blockchain backend.

## Contributors

This project is a collaborative effort of dedicated individuals:

- [Syed Maruf Ali](https://github.com/sdmrf/)
- [Paresh Pradeep Deshpande](https://github.com/Silent8712)

Feel free to reach out to us for any inquiries or collaboration opportunities.

## Contact

If you have any questions or need further assistance, feel free to reach out to us:

- Email:
- syedmarufali23@gmail.com
- deshpande.pxresh@gmail.com
  
- LinkedIn
- [Syed Maruf Ali](https://www.linkedin.com/in/syedmarufali/)
- [Paresh Pradeep Deshpande]

## License

This project is licensed under the [MIT License](LICENSE).

---

