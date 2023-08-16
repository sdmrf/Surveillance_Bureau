import "./RegisterComplaint.scss"
import RC from "../../../assets/RegisterComplaint.svg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import user from "../../../assets/user.svg"


const RegisterComplaint = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="RegisterComplaint">
            <div className="Shape First"></div>
            <div className="Shape Second"></div>
            <ArrowBackIcon className="Back" onClick={handleGoBack} />
            <div className="Wrapper">
                <div className="Left">
                    <div className="Top">
                        <div className="Heading">
                            <span className="Reg">Register </span><span className="Compl">Complaint !</span>
                        </div>
                    </div>
                    <div className="Mid">
                        <span>Are you a victim of criminality ? <br />
                            Feels free to register your complaint to contribute towards better society</span>
                    </div>
                    <div className="Bottom">
                        <div className="Illustration">
                            <img src={RC} alt="Illustration" />
                        </div>
                    </div>
                </div>
                <div className="Right">
                    <form action="" className="Login">
                        <div className="ProfileIcon">
                            <img src={user} alt="Profile Icon" />
                        </div>
                        <div className="Inputs">
                            <input type="text" id="UID" placeholder="Aadhar ID" required />
                            <input type="text" id="Pass" placeholder="Password" required />
                        </div>
                        <div className="Button">
                            <button type="submit">Generate OTP</button>
                        </div>
                        <div className="Verify">
                            <div className="Input">
                                <input type="text" placeholder="Enter OTP" />
                            </div>
                            <div className="Timer">
                                <span>00:00</span>
                            </div>
                        </div>
                        <div className="Register">
                            <span className="Text">Don&apos;t have an account?</span>
                            <span className="Link">Register</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterComplaint