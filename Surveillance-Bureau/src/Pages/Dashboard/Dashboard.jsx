import "./Dashboard.scss"
import DashboardHeader from "./Dashboard Header/DashboardHeader"

import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import HistoryIcon from '@mui/icons-material/History';


import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <DashboardHeader />
      <main className="Main">
        <div className="Cards">
          <Link to="/dashboard/identify-criminal" className="Link">
            <div className="Card Identify-Criminal">
              <div className="Top">
                <FingerprintIcon className="Icon" />
              </div>
              <div className="Bottom">
                Identify Criminal
              </div>
            </div>
          </Link>
          <Link to="/dashboard/register-criminal" className="Link">
            <div className="Card Register-Criminal">
              <div className="Top">
                <PersonAddAlt1OutlinedIcon className="Icon" />
              </div>
              <div className="Bottom">
                Register Criminal
              </div>
            </div>
          </Link>
          <Link to="/dashboard/update-criminal" className="Link">
            <div className="Card Update-Criminal">
              <div className="Top">
                <EditNoteOutlinedIcon className="Icon" />
              </div>
              <div className="Bottom">
                Update Criminal
              </div>
            </div>
          </Link>
          <Link to="/dashboard/view-history" className="Link">
            <div className="Card View-History">
              <div className="Top">
                <HistoryIcon className="Icon" />
              </div>
              <div className="Bottom">
                View History
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>

  )
}

export default Dashboard