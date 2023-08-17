import "./Dashboard.scss"
import DashboardHeader from "./Dashboard Header/DashboardHeader"

import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import HistoryIcon from '@mui/icons-material/History';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <DashboardHeader />
      <main className="Main">
        <div className="Cards">
          <div className="Card IdentifyCriminal">
            <div className="Top">
              <FingerprintIcon className="Icon" />
            </div>
            <div className="Bottom">
              Identify Criminal
            </div>
          </div>
          <div className="Card RegisterCriminal">
            <div className="Top">
              <PersonAddAlt1OutlinedIcon className="Icon" />
            </div>
            <div className="Bottom">
              Register Criminal
            </div>
          </div>
          <div className="Card UpdateCriminal">
            <div className="Top">
              <EditNoteOutlinedIcon className="Icon" />
            </div>
            <div className="Bottom">
              Update Criminal
            </div>
          </div>
          <div className="Card ViewHistory">
            <div className="Top">
              <HistoryIcon className="Icon" />
            </div>
            <div className="Bottom">
              View History
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard