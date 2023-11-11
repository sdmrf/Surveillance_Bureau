import './login.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { getSigner } from "../../ApiFeature";

const Login = () => {

  const [showModal, setShowModal] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const signer = await getSigner();

      if (signer) {
        // You are connected to the wallet
        setWalletConnected(true);
        setShowModal(true);
      } else {
        alert("Please install MetaMask");
      }
    } catch (error) {
      console.error("Error connecting to wallet: ", error);
    }
  }

  const handleFingerPrint = () => {

  }


  return (
    <div className="Login">
      <div className="Gb">
        <Link to="/SurveillanceBureau/home"><button className="Back" >Go Back</button></Link>
      </div>
      <div className="Container">
        <div className="shape"></div>
        <div className="shape"></div>

        <div className="wrapper">
          <form action='' onSubmit={handleSubmit}>
            <h1>Authenticate</h1>
            <input type="text" placeholder='Station Id' required />
            <input type="password" placeholder='Password' required />
            <div className="Button">
              <button className='loginButton' >
                <h1>Log In Now</h1>
                <ChevronRightIcon className='icon' />
              </button>
            </div>
          </form>
        </div>
        {showModal &&
          <div className="FingerPrintScan">
            <div className="Close">
              <CloseIcon className='CloseIcon' onClick={() => setShowModal(false)} />
            </div>
            <div className="FingerPrint">
              <h1>Verify Your Identity</h1>
              <Link to='/SurveillanceBureau/dashboard'>
                <FingerprintIcon className='FingerPrintIcon' />
              </Link>

              <span>Place your finger on the scanner</span>
            </div>
          </div>}

      </div>
    </div>
  )
}

export default Login