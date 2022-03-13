import Input from "../../UIKIT/Input";

import INSTAGRAM_ICON from "../../../assets/icons/instagram.svg";
import SOCIAL_ICON from "../../../assets/icons/social.svg";
import TWITTER_ICON from "../../../assets/icons/twitter.svg";
import YOUTUBE_ICON from "../../../assets/icons/youtube.svg";
import SEND from "../../../assets/icons/send.svg";
import "./index.scss";
function Footer() {
  return (
    <footer>
      <div className="section">
        <div className="social-link">
          <span>
            <img src={INSTAGRAM_ICON} alt="" />
          </span>
          <span>
            <img src={SOCIAL_ICON} alt="" />
          </span>
          <span>
            <img src={TWITTER_ICON} alt="" />
          </span>
          <span>
            <img src={YOUTUBE_ICON} alt="" />
          </span>
        </div>
        <span className="copy-right">
          Copyright © {new Date().getFullYear()} Food delivery website
          <br /> All right reserved
        </span>
      </div>
      <div className="section">
        <h4 className="section-heading">Company</h4>
        <span className="section-link">About us</span>
        <span className="section-link">Blog</span>
        <span className="section-link">Contact us</span>
        <span className="section-link">Pricing</span>
        <span className="section-link">Testimonial</span>
      </div>
      <div className="section">
        <h4 className="section-heading">Support</h4>
        <span className="section-link">Help Center</span>
        <span className="section-link">Terms of Service</span>
        <span className="section-link">Legal</span>
        <span className="section-link">Privacy Policy</span>
        <span className="section-link">Status</span>
      </div>
      <div className="section">
        <h4 className="section-heading">Stay up to date</h4>
        <Input
          rooteClassName="email-input"
          placeholder="Your email address"
          icon={SEND}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
