import './login.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="Login">
       <div className="Gb">
          <Link to='/home'>
          <button className="Back">
            <ArrowBackIcon className='icon'/>
             Go Back</button>
          </Link>
        </div>
      <div className="Container">
      <div class="shape"></div>
      <div class="shape"></div>
       
        <div className="wrapper">
          <form>
            <h1>Authenticate</h1>
            <input type="email" placeholder='Station Id' />
            <input type="password" placeholder='Password' />
            <div className="Button">
            <button className='loginButton' >
              <h1> Log In Now</h1> 
              <ChevronRightIcon className='icon'  />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login