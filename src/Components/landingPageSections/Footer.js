import React from "react";
import "./LandingPage.css";
import StaffingSolutionsLogo from "../../assets/Vector-footer.png";

import { DarkmodeContext } from "../../contex/darkmode/index";

const Footer = () => {
  const [state, dispatch] = React.useContext(DarkmodeContext);
  return (
    <div
      style={{
        color: state.shades.secondary,
        // backgroundColor: state.shades.solutionCardBackground,
      }}
    >
      <div
        className="section-51"
        style={{
          color: state.shades.secondary,
          backgroundColor: state.shades.solutionCardBackground,
        }}
      >
        <h3>
          Never Want to Miss <br />
          Any <span>Job News?</span>
        </h3>
        <div className="newsletter"
        
        >
          <input type="email" placeholder="Enter your email" />
          <button className="footerBtn">Subscribe</button>
        </div>
      </div>
      <div className="section-52">
        <div className="footers">
          <div>
            {" "}
            <h3>
              {" "}
              <span>Staffing</span>Solutions
            </h3>
            <img className="footer-logo" src={StaffingSolutionsLogo} />{" "}
          </div>
          <h3>About</h3>
          <h3>Jobs</h3>
          <h3>Contact Us</h3>
          <h3>Terms</h3>
          <h3>Privacy Policy</h3>
        </div>
        <hr />
        <small>@staffingSolutions All right reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
