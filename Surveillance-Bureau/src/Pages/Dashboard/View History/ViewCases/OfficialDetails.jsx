import './viewCases.scss'

const OfficialDetails = () => {
  return (
    <div className='OfficialDetails'>
      <div className="heading">
      <h1>
        <span className='c'>O</span>fficial <span className='d'>D</span>etails</h1>
      </div> 
      <div className="container">
        <div className="First">
          <l1><span className='style'>Incharge of the case:</span> <span className='underline'> Syed maruf ali </span></l1>
          <l2><span className='style'>Officer ID :</span> <span className='underline'> MH@145373</span> </l2>
        </div>
        <div className="Second">
          <l1><span className='style'>Post of the Incharge :</span> <span className='underline'>  Sub-Inspector</span></l1>
          <l2><span className='style'>IPC Section :</span> <span className='underline'> 390</span> </l2>
        </div>
        <div className="Third">
          <l1><span className='style1'>Police station Address :</span> <span className='underline'> Division office building, 1300 Ontario St. Cleveland, Ohio 44113</span></l1>
          <l2><span className='style2'>Complainant :  </span> <span className='underline'> Peter griffin</span></l2>
        </div>
        <div className="Fourth">
          <l3><span className='style'>Description of investigation strategy :</span> <span className='underline'> The surveillance camera located at overlook road, cleveland, ohio helped to record the suspect (paul martinez) snatching the diamond chain of the victim luis griffin.</span></l3>
        </div>
        <div className="Fifth">
          <button className='Fir'>View FIR Report</button>
          <button className='Inv'> Investigation Report</button>
        </div>
      </div>
    </div>
  )
}

export default OfficialDetails
