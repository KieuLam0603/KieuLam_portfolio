import React, { useEffect, useRef } from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (aboutLeftRef.current) {
      observer.observe(aboutLeftRef.current);
    }
    if (aboutRightRef.current) {
      observer.observe(aboutRightRef.current);
    }

    return () => {
      if (aboutLeftRef.current) {
        observer.unobserve(aboutLeftRef.current);
      }
      if (aboutRightRef.current) {
        observer.unobserve(aboutRightRef.current);
      }
    };
  }, []);

  return (
    <div id="about">
      <div className="aboutBg"></div>
      <div className="aboutContainer">
        <h1>
          <span>About </span>
          <span>Me</span>
        </h1>
        <div className="aboutContent">
          <div className="aboutLeft" ref={aboutLeftRef}>
            <img className="aboutImg" src="/images/avatar.jpg" alt="avatar" />
          </div>
          <div className="aboutRight" ref={aboutRightRef}>
            <ul>
              <li>
                <p className="aboutItem">
                  <span className="aboutIcon">
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ marginLeft: "10px" }}
                    />
                    <span>Name:</span>
                  </span>
                  <span className="aboutText"> Lam Diem Kieu</span>
                </p>
              </li>
              <li>
                <p className="aboutItem">
                  <span className="aboutIcon">
                    {" "}
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ marginLeft: "10px" }}
                    />{" "}
                    <span>Address:</span>
                  </span>
                  <span className="aboutText">
                    District 7, Ho Chi Minh City
                  </span>
                </p>
              </li>
              <li>
                <p className="aboutItem">
                  <span className="aboutIcon">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginLeft: "10px" }}
                    />
                    <span>Email:</span>
                  </span>
                  <span className="aboutText"> kieulam6396@gmail.com</span>
                </p>
              </li>
              <li>
                <p className="aboutItem">
                  <span className="aboutIcon">
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ marginLeft: "10px" }}
                    />
                    <span>Phone:</span>
                  </span>
                  <span className="aboutText"> 096 998 9937</span>
                </p>
              </li>
              <li className="icon">
                <a
                  className="facebook"
                  href="https://www.facebook.com/profile.php?id=100022299992969"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{
                      fontSize: "35px",
                      marginRight: "30px",
                    }}
                  />
                </a>
                <a
                  className="github"
                  href="https://github.com/KieuLam0603"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} fontSize={"35px"} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
