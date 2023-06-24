import React from "react";
import "./languages.css";
import javascript from "../../assets/javascript.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import git from "../../assets/git.png";
import reactjs from "../../assets/reactjs.png";
import nodejs from "../../assets/nodejs.png";
import mongodb from "../../assets/mongodb.png";
import expressjs from "../../assets/expressjs.png";
import materialui from "../../assets/materialui.png";
import sass from "../../assets/sass.png";
const Languages = () => {
  return (
    <div className="languages__container section__padding">
      <div className="languages__title gradient__text-resume">
        TECHNOLOGIES AND STACKS
      </div>
      <div className="languages__content-container">
        <div className="languages__content-item">
          <img className="icons" src={javascript} alt="javascript" />
          <p className="languages__content-item-text">Javascript</p>
        </div>
        <div className="languages__content-item">
          <img className="icons" src={html} alt="html" />
          <p className="languages__content-item-text">HTML</p>
        </div>
        <div className="languages__content-item">
          <img className="icons" src={css} alt="css" />
          <p className="languages__content-item-text">CSS</p>
        </div>
        <div className="languages__content-item">
          <img className="icons" src={git} alt="git" />
          <p className="languages__content-item-text">Git</p>
        </div>
        <div className="languages__content-item">
          <img className="icons" src={reactjs} alt="react" />
          <p className="languages__content-item-text">React</p>
        </div>
        <div className="languages__content-item">
          <img className="icons" src={nodejs} alt="ExpressJs" />
          <p className="languages__content-item-text">NodeJs</p>
        </div>
        <div className="languages__content-item">
          <img className="icons" src={mongodb} alt="MongoDB" />
          <p className="languages__content-item-text">MongoDB</p>
        </div>
        <div className="languages__content-item">
          <img className="icons" src={expressjs} alt="ExpressJs" />
          <p className="languages__content-item-text">ExpressJS</p>
        </div>
        <div className="languages__content-item">
          <img className="icons" src={materialui} alt="Material UI" />
          <p className="languages__content-item-text">Material UI</p>
        </div>
        <div className="languages__content-item">
          <img className="icons" src={sass} alt="Sass" />
          <p className="languages__content-item-text">Sass</p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
