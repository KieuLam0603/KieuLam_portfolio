import React, { useState, useEffect } from "react";
import "./TypycalText.scss";

const TypicalText = () => {
  const [displayText, setDisplayText] = useState("");
  const texts = [" Lam Diem Kieu", " a Front-end Developer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentText = texts[currentIndex];
      if (displayText.length < currentText.length) {
        const slicedText = currentText.slice(0, displayText.length + 1);
        setDisplayText(slicedText);
      } else if (displayText.length === currentText.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setDisplayText("");
        }, 2000);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, [displayText, currentIndex, texts]);

  return (
    <h1 className="typicalText">
      I'm<span>{displayText}</span>
    </h1>
  );
};

export default TypicalText;
