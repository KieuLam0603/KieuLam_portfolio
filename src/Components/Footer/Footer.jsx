import React, { useEffect, useState } from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="footerContainer">
      <p>© Copyright 2022 by Kieu Lam</p>
      <div className="backToTop">
        {isVisible && (
          <div onClick={scrollToTop} className="backToTopButton">
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
