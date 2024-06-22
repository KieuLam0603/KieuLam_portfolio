import React, { useState } from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted: ", formData);
  };
  return (
    <div id="contact">
      <div className="contactForm">
        <div className="contactContainer">
          <h1>
            Get in touch with
            <span> ME</span>
          </h1>
          <p className="text">
            Thank you to spend your time visiting my page! Please feel free to
            send me some messages, hope that we can have a chance to work
            together.
          </p>
          <div className="contactForm">
            <div className="formInfo">
              <ul>
                <li>
                  <p>Lam Diem Kieu</p>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ marginRight: "10px", color: "#2c7490" }}
                    />
                    Location
                  </span>
                  <span className="infoText">
                    {" "}
                    District 7, Ho Chi Minh city
                  </span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ marginRight: "10px", color: "#2c7490" }}
                    />
                    Phone
                  </span>
                  <span className="infoText"> 096 998 9937</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginRight: "10px", color: "#2c7490" }}
                    />
                    Email
                  </span>
                  <span className="infoText"> kieulam6396@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="formSend">
              <form onSubmit={handleSubmit}>
                <div className="formInput">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formInput">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formInput">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formInput">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formButton">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
