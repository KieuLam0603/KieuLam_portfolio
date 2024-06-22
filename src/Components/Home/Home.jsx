import React, { useEffect, useState } from "react";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import "./Home.scss";
import TypicalText from "../TypycalText/TypicalText";
import ButtonCV from "../Buttons/ButtonCV";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../FontAwesome/fontAwesome";
const Home = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setShowLinks(true);
      } else {
        setShowLinks(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homePage">
      <div className="homeContent">
        <div className="homeContainer">
          <div className="homeLeft">
            <h2>Welcome!</h2>
            <TypicalText />
            <p>
              I'm passionate about learning new technologies and always keep
              concentrated on improving my self skills. Being patient and
              responsible for working help me implement completely assigned
              tasks.
            </p>
            <div className="buttonCV">{<ButtonCV />}</div>
          </div>
          <div className="homeRight" data-aos-delay="200">
            <img className="homeImg" src="/images/avt.png" alt="avt" />
          </div>
          <div class="homeButton">
            <div class="buttonContainer">
              <ul id="buttonLinks" className={showLinks ? "show" : ""}>
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/profile.php?id=100022299992969"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "#2c7490", fontSize: "28px" }}
                    />
                    <div className="tooltip">
                      <span>My Facebook</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="github"
                    href="https://github.com/KieuLam0603"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      fontSize={"28px"}
                      color="#2c7490"
                    />
                    <div class="tooltip">
                      <span>My Github</span>
                    </div>
                  </a>
                </li>
              </ul>
              <a className="buttonMenu" onClick={toggleLinks}>
                <FontAwesomeIcon
                  icon={faShareAlt}
                  style={{ color: "white", fontSize: "25px" }}
                />
                <div class="tooltip">
                  <span>See my links</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
