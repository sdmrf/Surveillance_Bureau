import './viewCases.scss'

const CrimeDetails = () => {

  return ( 
    <div className='CrimeDetails' >
      <div className="heading">
      <h1>
        <span className='c'>C</span>rime <span className='d'>D</span>etails</h1>
      </div> 
      <div className="container">
        <div className="First">
          <l1><span className='style'>Type of Crime :</span> <span className='underline'> Robbery</span></l1>
          <l2><span className='style'>Name of the victim :</span> <span className='underline'> Luis Griffin</span> </l2>
        </div>
        <div className="Second">
          <l1><span className='style'>Date of crime committed :</span> <span className='underline'>  2/12/2017</span></l1>
          <l2><span className='style'>IPC Section :</span> <span className='underline'> 390</span> </l2>
        </div>
        <div className="Third">
          <l1><span className='style'>Location of incident :</span> <span className='underline'> 3306 Overlook RD Apt 1 Cleveland Ohio 44118-2193 USA</span></l1>
        </div>
        <div className="Fourth">
          <l3><span className='style'>Description of Incident :</span> <span className='underline'> On 02/12/2017, at approximately 08:15 PM, A individual named paul martinez snatched the diamond necklace of the victim named luis griffin at overlook road, cleveland, ohio. The robber fled the scene in a black colored honda pulsur. The incident has been reported to the police by peter griffin, and an investigation is led to paul’s arrest.</span></l3>
        </div>
        <div className="Fifth">
          <button className='report'>See Criminal Report</button>
        </div>
      </div>
    </div>
  )
}

export default CrimeDetails
