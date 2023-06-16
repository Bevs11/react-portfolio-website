import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./cta.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function PopUp() {
  return (
    <div className="popup__container gradient__footer bounce-top">
      <div className="popup__text">Message Sent</div>
    </div>
  );
}

function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const checkValidity = () => {
    if (name.length > 3 && email.length > 4 && message.length > 4) {
      setIsValid(true);
    }
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    checkValidity();
    if (isValid) {
      setIsError(false);
      emailjs
        .sendForm(
          "service_64tdsz7",
          "template_0r59rfl",
          form.current,
          "V7sP-CFu9Fq0ROIOJ"
        )
        .then(
          (result) => {
            console.log("Message sent");
            setIsSent(true);
          },
          (error) => {
            console.log("error:", error.text);
          }
        );
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } else {
      setIsError(true);
    }
  };

  return (
    <div id="cta" className="cta__container section__padding">
      {isSent && <PopUp className="slide-in-fwd-center" />}
      <div className="cta__title gradient__text-cta">Contact Me</div>
      <form ref={form} className="cta__form">
        <div className="cta__form-text">
          Need consultaion? Send me a message 😊
        </div>
        <div className="cta__form-items">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>
        <div className="cta__form-items">
          <label>Email</label>
          <input
            type="text"
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="cta__form-items">
          <label>Message</label>
          <input
            type="text"
            name="message"
            className="cta__input-message"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></input>
        </div>
        {isError && (
          <div style={{ color: "white" }}>
            Please fill out the form before submitting
          </div>
        )}
        <button className="cta__button" onClick={sendEmail}>
          Submit
        </button>
        <div className="cta__social-container">
          <a
            href="https://github.com/Bevs11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "#ad65e6", fontSize: "5rem" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/beverly-mateo-426b58219/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "#fa8067", fontSize: "5rem" }} />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100074051976436"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ color: "#d352bb", fontSize: "5rem" }} />
          </a>
        </div>
      </form>
    </div>
  );
}

export default CTA;
