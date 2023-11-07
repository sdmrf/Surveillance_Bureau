import './Sidebar.scss';
import { Link } from 'react-router-dom';

const sidebarLinks = [
  { path: '/dashboard', label: 'Court Rooms' },
  { path: '/dashboard/criminals', label: 'Generate FIR' },
  { path: '/dashboard/employees', label: 'Arrest warrants' },
  { path: '/dashboard/vehicles', label: 'Evidence & Insights' },
  { path: '/dashboard/locations', label: 'Station staff' },
  { path: '/dashboard/reports', label: 'Helpline' },
  { path: '/dashboard/incidents', label: 'IPC Section' },
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
