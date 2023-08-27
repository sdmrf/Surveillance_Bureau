import './viewCases.scss'
import mug from '../../../../assets/mug.jpg'
import crime from '../../../../assets/crime details (1).png'
import office from '../../../../assets/official details (2).png'
import court from '../../../../assets/court details (1).png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import CrimeDetails from './CrimeDetails'
import OfficialDetails from './OfficialDetails'
import CourtDetails from './CourtDetails'

const ViewCases = () => {

  
  const [Detail, setDetail] = useState(1);


  const RenderDetails = () => {
    switch (Detail) {
      case 1:
        return <CrimeDetails />;
      case 2:
        return <OfficialDetails  />;
      case 3:
        return <CourtDetails   />;
      default:
        return null;
    }
  }
  return (
    <div className='Viewcases'>
      <div className="Container">
        <ArrowBackIcon className='Back'/>
        <div className="Shape First"></div>
        <div className="Shape Second"></div>
        <div className="Top">
          <img src={mug} alt="" />
        </div>
        <div className="Mid">
        <h1><span className='IDName'>Criminal ID :</span> <span className='ID'> #34f211i68d</span></h1>
        <h1><span className='IDName'>Case ID :</span> <span className='ID'> #C142979</span></h1>
        </div>
        <div className="Bottom">
          <img src={crime} alt="" className={Detail === 1 ? 'Active' : ''} onClick={() => setDetail(1)} />
          <img src={office} alt="" className={Detail === 2 ? 'Active' : ''} onClick={() => setDetail(2)}/>
          <img src={court} alt="" className={Detail === 3 ? 'Active' : ''} onClick={() => setDetail(3)}/>
        </div>
      </div>
      <div className="Wrapper">
        {RenderDetails()}
      </div>
    </div>
  )
}

export default ViewCases
