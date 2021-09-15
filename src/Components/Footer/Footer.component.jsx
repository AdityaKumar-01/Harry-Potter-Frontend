import React from "react";
import "./Footer.styles.css";
import logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <span className="footer-logo">
        <img src={logo} alt="img" />
      </span>
      <span>Made by Aditya</span>
      <span>
        <a
          className="source-link"
          href="https://github.com/AdityaKumar-01/Harry-Potter-Frontend"
          target="_blank"
        >
          Source code
        </a>
      </span>
    </div>
  );
};

export default Footer;
