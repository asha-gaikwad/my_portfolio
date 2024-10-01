import React from "react";
import headerCss from "../Header/Header.module.css";
import heroImg from "../../assets/hero.png";

function Header() {
  return (
    <>
      <div className={headerCss.headerWrapper}>
        <div className={headerCss.headerContainer}>
          <img src={heroImg} alt="Hero-img" />
          <h1>
            Hello 👋 I M <span>Nancy Nelson</span>
          </h1>
          <p>
            Welcome to my portfolio I m <strong>Sr.Front End Developer</strong>{" "}
            Based in India.
            Over 3 Years of Professional Experience
          </p>
          <div className={headerCss.social}>
            <i className="ri-linkedin-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-github-line"></i>
          </div>
          <button>Download CV
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
