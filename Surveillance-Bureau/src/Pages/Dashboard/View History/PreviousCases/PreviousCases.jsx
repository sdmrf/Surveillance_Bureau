import './PreviousCases.scss'
import mug2 from "../../../../assets/mug.jpg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const PreviousCases = () => {
  return (
    <div className="PreviousCases">
      <div className="Container">
        <div className="Shape first"></div>
        <div className="Shape second"></div>
        <div className="Shape third"></div>
        <div className="Wrapper">
          <div className="Top">
            <img src={mug2} alt="" />
            <Link to="/dashboard/view-history" className='Back'><ArrowBackIcon className='Back' /></Link>
          </div>
          <div className="Bottom">
            <div className="Text">
              <h1><span>Previous Cases </span> | <span> 4</span></h1>
            </div>
            <div className="Cases">
              <div className="Header">
                <h1>Case ID</h1>
                <h1>Charges</h1>
                <h1>Status</h1>
              </div>
              <div className="Content">
                <div className="Case">
                  <h1>#C142979</h1>
                  <h1>Gold robbery - IPC 390</h1>
                  <Link to="/dashboard/view-history/view-cases" className='Icon'><VisibilityIcon className='Icon'/></Link>
                </div>
                <div className="Case">
                  <h1>#M119006</h1>
                  <h1>Sexual harassment - IPC 354</h1>
                  <Link to="/dashboard/view-history/view-cases" className='Icon'><VisibilityIcon className='Icon'/></Link>
                </div>
                <div className="Case">
                  <h1>#B010705</h1>
                  <h1> Kidnapping  - IPC 363</h1>
                  <Link to="/dashboard/view-history/view-cases" className='Icon'><VisibilityIcon className='Icon'/></Link>
                </div>
                <div className="Case">
                  <h1>#P169324</h1>
                  <h1>Attempted murder - IPC 307</h1>
                  <Link to="/dashboard/view-history/view-cases" className='Icon'><VisibilityIcon className='Icon'/></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviousCases
