import React from "react";
import Typical from "react-typical";

import "./TypycalText.scss";

const TypicalText = () => {
  return (
    <h1 className="typicalText">
      I'm{" "}
      <Typical
        steps={[" Lam Diem Kieu", 3000, " a Front-end Developer", 3000]}
        loop={Infinity}
        wrapper="span"
      />
    </h1>
  );
};

export default TypicalText;
