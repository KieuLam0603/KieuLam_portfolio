import React from "react";
import "./ButtonCV.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ButtonCV = () => {
  const handleDownload = () => {
    const fileID = "1chQS9I5hVdI0FkdD-KnpkLW9jnfz41Hx";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileID}`;
    const link = document.createElement("a");

    link.style.display = "none";
    link.href = downloadUrl;
    link.download = "CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="button" onClick={handleDownload}>
      <FontAwesomeIcon icon={faDownload} style={{ marginRight: "10px" }} />
      Download CV
    </button>
  );
};

export default ButtonCV;
