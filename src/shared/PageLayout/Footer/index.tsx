import { NavLink } from "react-router-dom";
import {
  ABOUT_US,
  INSTAGRAM_LINK,
  YOUTUBE_LINK,
  TWITTER_LINK,
} from "../../../const/routes";

import Input from "../../UIKIT/Input";
import Gradient from "../../UIKIT/Gradient";

import INSTAGRAM_ICON from "../../../assets/icons/instagram.svg";
import SOCIAL_ICON from "../../../assets/icons/social.svg";
import TWITTER_ICON from "../../../assets/icons/twitter.svg";
import YOUTUBE_ICON from "../../../assets/icons/youtube.svg";
import SEND from "../../../assets/icons/send.svg";
import "./index.scss";
function Footer() {
  return (
    <Gradient element="footer" style={{ borderRadius: 0 }}>
      <div className="section">
        <div className="social-link">
          <span>
            <NavLink to={INSTAGRAM_LINK} target="_blank" rel="noopener">
              <img src={INSTAGRAM_ICON} alt="" />
            </NavLink>
          </span>
          <span>
            <NavLink to={INSTAGRAM_LINK} target="_blank" rel="noopener">
              <img src={SOCIAL_ICON} alt="" />
            </NavLink>
          </span>
          <span>
            <NavLink to={TWITTER_LINK} target="_blank" rel="noopener">
              <img src={TWITTER_ICON} alt="" />
            </NavLink>
          </span>
          <span>
            <NavLink to={YOUTUBE_LINK} target="_blank" rel="noopener">
              <img src={YOUTUBE_ICON} alt="" />
            </NavLink>
          </span>
        </div>
        <span className="copy-right">
          Copyright © {new Date().getFullYear()} Food delivery website
          <br /> All right reserved
        </span>
      </div>
      <div className="section">
        <h4 className="section-heading">Company</h4>
        <NavLink className="section-link" to={ABOUT_US.link}>
          {ABOUT_US.label}
        </NavLink>
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
      <div className="section" style={{ alignSelf: "flex-start" }}>
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
    </Gradient>
  );
}

export default Footer;
