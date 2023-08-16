import "./RegisterComplaint.scss"
import RC from "../../../assets/RegisterComplaint.svg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RegisterComplaint = () => {
    return (
        <div className="RegisterComplaint">
        <ArrowBackIcon className="Back" />
            <div className="Wrapper">
                <div className="Left">
                    <div className="Top">
                        <div className="Heading">
                            <span className="Reg">Register </span><span className="Compl">Complaint!</span>
                        </div>
                    </div>
                    <div className="Mid">
                        <span>Are you a victim of criminality ? <br />
                            Feels free to register your complaint to contribute towards better society</span>
                    </div>
                    <div className="Bottom">
                        <div className="Illustration">
                            <img src={RC}alt="Illustration" />
                        </div>
                    </div>
                </div>
                <div className="Right">
                    <form action="" className="Login">
                        <div className="ProfileIcon">
                            <img src="" alt="Profile Icon" />
                        </div>
                        <div className="Inputs">
                            <input type="text" required />
                            <input type="text" required />
                        </div>
                        <div className="Button">
                            <button type="submit">Generate OTP</button>
                        </div>
                        <div className="Verify">
                            <div className="Input">
                                <input type="text" id="OTP" />
                                <label htmlFor="OTP">OTP</label>
                            </div>
                            <div className="Timer">
                                <span>00:00</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterComplaint