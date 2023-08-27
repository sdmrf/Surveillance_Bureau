import './Sidebar.scss';
import { Link } from 'react-router-dom';

const sidebarLinks = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/dashboard/criminals', label: 'Criminals' },
  { path: '/dashboard/employees', label: 'Officers' },
  { path: '/dashboard/vehicles', label: 'Vehicles' },
  { path: '/dashboard/locations', label: 'Locations' },
  { path: '/dashboard/reports', label: 'Reports' },
  { path: '/dashboard/incidents', label: 'Incidents' },
  { path: '/dashboard/records', label: 'Records' },
];

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`Sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="Wrapper">
        <div className="Title">
          <h1>Menu</h1>
        </div>
        <div className="Links">
          <ul>
            {sidebarLinks.map(link => (
              <Link to={link.path} key={link.path} style={{textDecoration:"none", color:"white"}}>
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
