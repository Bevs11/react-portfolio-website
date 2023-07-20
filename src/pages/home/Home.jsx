import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div id="home" className="home__container section__padding">
      <div className="home__content">
        <h1 className="gradient__text name__width tracking-in-expand">
          Beverly Mateo
        </h1>
        <p>Full Stack Web Developer</p>
        <div className="home__buttons-container">
          <a href="#about">
            <button className="home__button-aboutme button__margin">
              About me
            </button>
          </a>
          <a href="#projects">
            <button className="home__button-projects button__margin">
              See Projects
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1VUUbVlOw-Hd_CiOtSFlLdq90VLhsVcH6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="home__button-cta button__margin">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
