import "./UpdateCriminal.scss"
import illu1 from '../../../assets/updateIllustration.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import mug from '../../../assets/mug.jpg'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const UpdateCriminal = () => {

  const [isSlide , setIsSlide] = useState(false)
  
  return (
    <div className="UpdateCriminal">
      <div className="Navbar">
        <div className="Back">
          <Link to="/dashboard" className="BackArrow"><ArrowBackIcon className="BackArrow" /></Link>
        </div>
        <div className="Update">
          <Link to="/dashboard/update-criminal/AddNewCases" style={{ textDecoration: 'none' }}>
          <button className='Updatebtn'>
            <l1>Add New Cases</l1>
            <AddCircleSharpIcon className="add" />
          </button>
          </Link>
          <div className="img" >
            {!isSlide && <img src={mug} alt="" onClick={() => setIsSlide(!isSlide)}/>}
             
            {isSlide && 
            <div className="Contain">
              <Link to="/dashboard/update-criminal/UpdateCriminalInfo" className="Header">
             <div className="Update_info">
            <button className="UpdateCriminal"> 
              <l1>Update Info</l1>
              <img src={mug} alt="" />
            </button>
            </div>
            </Link>
            <div className="Close" onClick={() => setIsSlide(!isSlide)}>
              <CloseIcon className="CloseIcon" />
            </div>
            </div>
            }
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <div className="Left">
          <div className="Heading">
            <h1><span style={{ color: 'lightgray', fontFamily: 'var(--font-family' }}>Update</span><span style={{ color: '#6044D8', fontFamily: 'var(--font-family' }}> Cases !</span></h1>
            <p>Easily update the previous cases of criminals or add new cases effortlessly ...</p>
          </div>
          <div className="Illustartion">
            <img src={illu1} alt="" />
          </div>
        </div>
        <div className="Right">
          <div className="Container">
            <div className="Text">
              <h1><span> Update Previous Cases </span> | <span> 3</span></h1>
            </div>
            <div className="UpdateCases">
              <div className="Header">
                <h1>Criminal ID</h1>
                <h1>Case ID</h1>
                <button className='Updatebtn1'>
                  <l1>Update</l1>
                  <AddCircleSharpIcon className="add" />
                </button>
              </div>
              <div className="Content">
                <div className="Case">
                  <h1 className='CaseID'>#34f211i68d</h1>
                  <h1 className='Charges'>#C142979</h1>
                  <Link to="/dashboard/view-history/view-cases" className='Icon'><AddCircleOutlineSharpIcon className='Icon' /></Link>
                </div>
                <div className="Case">
                  <h1 className='CaseID'>#34f211i68d</h1>
                  <h1 className='Charges'>#M119006</h1>
                  <Link to="/dashboard/view-history/view-cases" className='Icon'><AddCircleOutlineSharpIcon className='Icon' /></Link>
                </div>
                <div className="Case">
                  <h1 className='CaseID'>#34f211i68d</h1>
                  <h1 className='Charges'> #B010705</h1>
                  <Link to="/dashboard/view-history/view-cases" className='Icon'><AddCircleOutlineSharpIcon className='Icon' /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateCriminal