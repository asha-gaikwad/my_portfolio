import React from "react";
import aboutCss from "../About/About.module.css";
import aboutImg from "../../assets/about-bg.png";

function About() {
  return (
    <>
      <section  className={`${aboutCss.AboutWrapper} section`} id="about">
        <div className={aboutCss.aboutContainer}>
          <h2>About Me</h2>
          <p>
            I'm Nancy, a React Web Developer. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Reprehenderit, at reiciendis.
          </p>
          <div className={aboutCss.skills}>
            <h2>My Skills</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <div className={aboutCss.skillWrapper}>
              <div className={aboutCss.skill}>
                <h3>React JS</h3>
                <div className={aboutCss.line}></div>
              </div>
              <div className={aboutCss.skill}>
                <h3>HTML</h3>
                <div className={aboutCss.line}></div>
              </div>
              <div className={aboutCss.skill}>
                <h3>CSS</h3>
                <div className={aboutCss.line}></div>
              </div>
              <div className={aboutCss.skill}>
                <h3>JavaScript</h3>
                <div className={aboutCss.line}></div>
              </div>
              <div className={aboutCss.skill}>
                <h3>Figma</h3>
                <div className={aboutCss.line}></div>
              </div>
              <div className={aboutCss.skill}>
                <h3>Tailwind</h3>
                <div className={aboutCss.line}></div>
              </div>
              <div className={aboutCss.skill}>
                <h3>Blender</h3>
                <div className={aboutCss.line}></div>
              </div>
              <div className={aboutCss.skill}>
                <h3>PHP</h3>
                <div className={aboutCss.line}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={aboutCss.AboutImg}>
          <img src={aboutImg} alt="" />
          <div className={aboutCss.Exp}>
            <h2><span>3+</span>Of Experience</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
