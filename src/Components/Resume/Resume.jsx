import React from "react";
import "./Resume.scss";
const Resume = () => {
  return (
    <div id="resume">
      <div className="resumeContainer">
        <h1>
          <span>My </span>
          <span>Resume</span>
        </h1>
          <div className="resumeContent">
            <div className="resumeLeft">
              <div className="leftText">
                <h3 id="leftTitle">EXPERIENCE</h3>
              </div>
              <div className="leftBox">
                <div className="boxContent">
                  <div className="boxItem" style={{ marginBottom: "30px" }}>
                    <h4>CyberSoft - CyberLearn Programing Education</h4>
                    <h5>3/2023 - 10/2023</h5>
                    <h6>Intern & Mentor</h6>
                    <p>- Support the development of web projects</p>
                    <p>- Support programming teachers</p>
                  </div>

                  <div className="boxItem">
                    <h4>Apec Home Company</h4>
                    <h5>2020 - present</h5>
                    <h6>Marketing</h6>
                    <p>- Build Google Ads campaigns</p>
                    <p>- Verify business on Google Map</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resumeRight">
              <div className="rightText">
                <h3 id="rightTitle">EDUCATION</h3>
              </div>
              <div className="rightBox">
                <div className="boxContent">
                  <div className="boxItem">
                    <h4>Cybersoft - Cyberlearn Programing Education Center</h4>
                    <h5>3/2023 - 9/2023</h5>

                    <p style={{ marginBottom: "10px" }}>
                      {" "}
                      <span>- Programming course: </span>
                      thinking in programming, problem-solving, Java language, OOP
                    </p>
                    <p>
                      {" "}
                      <span>- Front-end Foundation course: </span>
                      basic knowledge of HTML5, CSS3, Boostrap 4, SASS/SCSS,
                      Javascript, Jquery, AJAX, Git, ReactJS, Tailwindcss, Ant
                      design,...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Resume;
