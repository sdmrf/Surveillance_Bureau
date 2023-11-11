import './profilebar.scss'
import { Link } from 'react-router-dom';
import cop from "/assets/copDemoImg.jpeg"
import { useState } from 'react';

const profilebarLinks = [
  { path: '/dashboard', label: 'Profile' },
  { path: '/dashboard/criminals', label: 'Change Admin' },
  { path: '/dashboard/employees', label: 'Enroll new Officer' },
  { path: '/dashboard/vehicles', label: 'Settings' },
  { path: '/SurveillanceBureau', label: 'Logout' },
];

const Profilebar = ({ isOpen }) => {

  const handleClick = () => {
    !isOpen
  }
  return (
    <div className={`Profilebar ${isOpen ? 'open' : 'closed'}`}>
    <div className="Wrapper">
      <div className="profile">
        <img src={cop} alt="" />
      </div>
      <div className="Links">
        <ul>
          {profilebarLinks.map(link => (
            <Link to={link.path} key={link.path} style={{textDecoration:"none", color:"white"}}>
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Profilebar
