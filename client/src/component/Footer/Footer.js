import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          View this project on{"https://github.com/prathamesh901/Decentralized-Voting-System.git "}
          <a
            className="profile"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Made with <i className="fas fa-heartbeat" /> by{" "}
          <a
            className="profile"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            TEAM SPOC
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
