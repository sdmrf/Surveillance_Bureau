import "./Footer.scss"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Spline from "../../Components/Spline.jsx"
const Footer = () => {
  return (
    <div className="Footer">

      <div className="Bottom">
        <div className="Up">
          <div className="Item Lg">
            <div className="Logo">
              <h1><span className="S">S</span>urveillance <span className="B">B</span>ureau</h1>
              <span>Surveillance Bureau provides an user friendly interface for national security Organizations like IB, CBI, FBI. Sb provides an universal integrated platform for maintaining criminal data with cutting edge technology.</span>
              <div className="Icons">
                <div className="Icon">
                  <TwitterIcon/>
                </div>
                <div className="Icon">
                  <FacebookIcon/>
                </div>
                <div className="Icon">
                  <InstagramIcon/>
                </div>
                <div className="Icon">
                  <WhatsAppIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="Item">
            <h1>Company</h1>
            <span>About</span>
            <span>Features</span>
            <span>More Projects</span>
          </div>
          <div className="Item">
            <h1>Help</h1>
            <span>Service Support</span>
            <span>Enquiry</span>
            <span>Terms & Conditions</span>
          </div>
          <div className="Item FQ">
            <h1>FAQ</h1>
            <span>Accounts</span>
            <span>Resources</span>
            <span>References</span>
          </div>
        </div>

        <div className="Mid">
          
        </div>
        <div className="Down">
          <div className="Item">
            About Us
          </div>
          <div className="Item">
            Contact
          </div>
          <div className="Item">
            Privacy Policy
          </div>
          <div className="Item">
            Terms Of Use
          </div>
        </div>
      </div>

      <div className="Top">
        <div class="waves">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class="wave wave3"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
