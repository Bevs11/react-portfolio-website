import React from "react";
import "./aboutme.css";
import profile from "../../assets/profile.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="aboutme__container section__padding">
      <div className="aboutme__image-container">
        <img src={profile} className="image" />
      </div>
      <div className="aboutme__content">
        <div className="gradient__text-aboutme aboutme__title">ABOUT ME</div>
        <p className="aboutme__desc">
          I am a <strong>Full Stack Web Developer</strong> with a passion for
          creating applications that help businesses run smoothly. I’m
          proficient in HTML, CSS, JavaScript and MERN Stack. I’m continuously
          improving my skills and learning new technologies by taking online
          courses and creating projects. I have 10 years of experience in
          managing projects in the construction industry which honed my
          problem-solving skills, attention to detail and knowledge of business
          processes.
          <br />
          <br />
          My hobbies include: traveling, watching anime and doing digital art.
        </p>
        <div className="aboutme__buttons-container">
          <a href="#projects">
            <button className="aboutme__button-projects button__margin">
              See Projects
            </button>
          </a>
          <a href="#cta">
            <button className="aboutme__button-cta button__margin">
              Contact Me
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/11dmTt3bFw097pj48sy3IMtrG_kRukzku/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="aboutme__button-resume button__margin">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
