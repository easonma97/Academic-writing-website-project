import React from "react";
import image from '../assets/img/logo.png';

function Footer(){
    return <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 footer-info">
            <a href="index.html"><img src={image} alt="" className="img-fluid footerlogo" /></a>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="/">Home</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="about">About us</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="signup">Sign Up</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="login">Log In</a></li>
            </ul>
          </div>
          <div className="col-lg-7 col-md-12 footer-newsletter">
            <h4>Academic Writing Suggestions Site</h4>
            <p className="footerDescribe">The website could describe a trend, to argue the benefit of the proposed method, etc. Then for a query sentence, it will return the sentence with the same function and serve as a writing suggestion. The Website will allow a user
              to customize their own sentence library and automatically collect the feedback from users to update the model for refining the search results.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright <strong><span>Group 23</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by Group 23
      </div>
    </div>
  </footer>
}

export default Footer;