import "./Header.scss"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="Navbar">
      <div className="Wrapper">
        <div className="Sections">
          <Link to="/Complaints" className="Link Btn">Complaints</Link>
          <Link to="/About" className="Link">About</Link>
          <Link to="/Contact" className="Link">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Header