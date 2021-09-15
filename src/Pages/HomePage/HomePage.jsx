import React from "react";
import {Link} from "react-router-dom";

import Header from "./../../Components/Header/Header.component";
import Footer from "./../../Components/Footer/Footer.component";

import homeImg from "../../Assets/hero-img.png";
import staffImg from "../../Assets/sec-1.webp";
import studentImg from "../../Assets/sec-2.webp";
import houseImg from "../../Assets/sec-4.webp";

import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <div className="homepage-intro">
        <span>
          <img src={homeImg} alt="img" className="homepage-logo" />
        </span>
        <span className="homepage-hero-text">Hello Muggles !!!</span>
      </div>
      <div className="homepage-sections">
        <div className="section-row">
          <span className="section-img">
            <img src={studentImg} alt="img" />
          </span>
          <span className="section-info">
            <span>Find out about little wizards at Hogwrats</span>
            <button>
              <Link to="/StudentPage" className="section-btn">
                Find here
              </Link>
            </button>
          </span>
        </div>
        <div className="section-row">
          <span className="section-info">
            <span>Find out about great wizards at Hogwrats</span>
            <button>
              <Link to="/StaffPage" className="section-btn">
                Find here
              </Link>
            </button>
          </span>
          <span className="section-img">
            <img src={staffImg} alt="img" />
          </span>
        </div>
        <div className="section-row">
          <span className="section-img">
            <img src={houseImg} alt="img" />
          </span>
          <span className="section-info">
            <span>Find out about houses at Hogwrats</span>
            <button>
              <Link to="/HousePage" className="section-btn">
                Find here
              </Link>
            </button>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
