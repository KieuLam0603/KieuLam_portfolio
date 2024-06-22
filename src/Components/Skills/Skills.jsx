import React from "react";
import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div id="skills">
      <div className="skillsContainer">
        <h1>
          <span>My </span>
          <span>Skills</span>
        </h1>
        <div className="skillsContent">
          <div className="skillsItems">
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ marginRight: "10px", color: "#2c7490" }}
                />
                <span className="skillsUnit"> HTML/CSS</span>
                <span className="skillsIcon">
                  <img src="/images/html.png" alt="html" />
                </span>
                <span className="skillsIcon">
                  <img src="/images/css.png" alt="css" />
                </span>
                <span className="skillsIcon">
                  <img
                    src="/images/bootstrap.png"
                    style={{ width: "28px" }}
                    alt="bootstrap"
                  />
                </span>
                <span className="skillsIcon">
                  <img
                    src="/images/materialize.png"
                    style={{ width: "45px" }}
                    alt="materialize"
                  />
                </span>
                <span className="skillsIcon">
                  <img
                    src="/images/sass.png"
                    style={{ width: "38px" }}
                    alt="sass"
                  />
                </span>
                <span className="skillsIcon">Reponsive</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ marginRight: "10px", color: "#2c7490" }}
                />
                <span className="skillsUnit">Javascript</span>
                <span className="skillsIcon">ES5/ES6</span>
                <span className="skillsIcon">
                  <img
                    src="/images/jquery.png"
                    style={{ width: "90px" }}
                    alt="jQuery"
                  />
                </span>
                <span className="skillsIcon">AJAX</span>
                <span className="skillsIcon">RESfull API</span>
                <span className="skillsIcon">AXIOS</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ marginRight: "10px", color: "#2c7490" }}
                />
                <span className="skillsUnit">ReactJs</span>
                <span className="skillsIcon">ReactJS basic</span>
                <span className="skillsIcon">Router</span>
                <span className="skillsIcon">Redux</span>
                <span className="skillsIcon">React Hooks</span>
                <span className="skillsIcon">Tailwindcss</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ marginRight: "10px", color: "#2c7490" }}
                />
                <span className="skillsUnit">Git</span>
                <span className="skillsIcon">Git basic</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ marginRight: "10px", color: "#2c7490" }}
                />
                <span className="skillsUnit">Knowledge base</span>
                <span className="skillsIcon">OOP</span>
                <span className="skillsIcon" style={{ width: "250px" }}>
                  Data Structure and Algorithms
                </span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ marginRight: "10px", color: "#2c7490" }}
                />
                <span className="skillsUnit">Soft skills</span>
                <span className="skillsIcon">Photoshop</span>
                <span className="skillsIcon" style={{ width: "150px" }}>
                  Microsoft Office
                </span>
                <span className="skillsIcon">AutoCAD</span>
                <span className="skillsIcon">Teamwork</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ marginRight: "10px", color: "#2c7490" }}
                />
                <span className="skillsUnit">Languages</span>
                <span className="skillsIcon" style={{ width: "130px" }}>
                  Basic English
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="skillsBg">
        {Array.from({ length: 50 }).map((_, index) => (
          <span
            key={index}
            className="dot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 15}px`,
              height: `${Math.random() * 15}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
