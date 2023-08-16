import './login.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Login = () => {
  return (
    <div className="Login">
       <div className="Gb">
          <button className="Back">Go Back</button>
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
              <h1>Log In Now</h1> 
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