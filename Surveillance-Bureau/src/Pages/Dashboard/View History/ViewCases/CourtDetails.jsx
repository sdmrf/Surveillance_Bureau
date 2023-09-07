import './viewCases.scss'

const CourtDetails = () => {
  return (
    <div className='CourtDetails'>
      <div className="heading">
        <h1>
          <span className='c'>C</span>ourt <span className='d'>D</span>etails</h1>
      </div>
      <div className="container">
        <div className="First">
          <l1><span className='style'>Assigned Judge:</span> <span className='underline'> Shri S.G Barde </span></l1>
          <l2><span className='style'>Prosecutor Attorney:</span> <span className='underline'>  M.S Deshpande</span> </l2>
        </div>
        <div className="Second">
          <l1><span className='style'>Defendants Lawyer:</span> <span className='underline'>   Pramod . S . Mathur </span></l1>
          <l2><span className='style'>Date of hearing:</span> <span className='underline'> 14/12/2017</span> </l2>
        </div>
        <div className="Third">
          <l1><span className='style1'>Court Address :</span> <span className='underline'> 1200 Ontario St, Cleveland, OH 44113, United States </span></l1>
          <l2><span className='style2'>Witness:  </span> <span className='underline'> Peter griffin</span></l2>
        </div>
        <div className="Fourth">
          <l3><span className='style'>Court Judgement : </span> <span className='underline'> After the long session of court hearing held on, 14/12/2017 After considering all the evidences and witnesses the court concludes that the suspect paul martinez is convicted of robbery under IPC Section 390 (rigorous imprisonment for a term which may extend to ten years, and shall also be liable to fine).</span></l3>
        </div>
        <div className="Fifth">
          <button className='report'>View Court Judgement</button>
        </div>
      </div>
    </div>
  )
}

export default CourtDetails
