import "./Stations.scss"
import Station from "../../../assets/Station.svg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Spline from "@splinetool/react-spline";
import { useMemo } from "react";

const Stations = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    const memoizedSpline = useMemo(() => (
        <Spline scene="https://prod.spline.design/uXYZOyWocYfl63Va/scene.splinecode" loading="lazy" />
    ), []);

    return (
        <div className="Stations">
            <ArrowBackIcon className="Back" onClick={handleGoBack} />
            <div className="Wrapper">
                <div className="Left">
                    <div className="Top">
                        <div className="Heading">
                            <span className="Reg">Security </span><span className="Compl">Authentication !</span>
                        </div>
                    </div>
                    <div className="Mid">
                        <span>Are you an authorized security officer ?<br />
                            Log in into surveillance bureau with 2 step verification and get control over criminals !
                        </span>
                    </div>
                    <div className="Bottom">
                        <div className="Illustration">
                            <img src={Station} alt="Illustration" />
                        </div>
                    </div>
                </div>
                <div className="Right">
                    <div className="Logo">
                        {memoizedSpline}
                    </div>
                    <div className="Search">
                        <div className="Input">
                            <input type="text" placeholder="Search Station Address" />
                        </div>
                        <div className="Location">
                            <LocationOnIcon />
                        </div>
                    </div>
                    <div className="Authenticate">
                        <button>Authenticate
                            <ArrowForwardIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Stations