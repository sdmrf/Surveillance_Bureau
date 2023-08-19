import './login.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  }


  return (
    <div className="Login">
      <div className="Gb">
        <Link to="/home"><button className="Back" >Go Back</button></Link>
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
              <FingerprintIcon className='FingerPrintIcon' />
              <span>Place your finger on the scanner</span>
            </div>
          </div>}

      </div>
    </div>
  )
}

export default Login