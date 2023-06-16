import React from "react";
import ECommerce from "../../assets/ECommerce.png";
import JsGame from "../../assets/JsGame.png";
import HtmlCssWebsite from "../../assets/HtmlCssWebsite.png";
import "./projects.css";

function Projects() {
  return (
    <div id="projects" className="projects__container section__padding">
      <div className="projects__title gradient__text-projects">PROJECTS</div>
      <div className="projects__content">
        <div className="projects__content-items">
          <div className="projects__content-items-img">
            <img src={ECommerce} alt="E Commerce Website" />
          </div>
          <div className="projects__content-items-text">
            <div className="projects__content-items-title">
              E-Commerce Website
            </div>
            <div className="projects__content-items-desc">
              {" "}
              Website that features soap products by a small business named Soap
              Boulangerie. This website is created using React and is styled
              using CSS.
            </div>
            <div className="projects__links-container">
              <a
                href="https://github.com/Bevs11/deployment-react-ecommerce"
                className="projects__links-github projects_links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://shop-soap-boulangerie.netlify.app/"
                className="projects__links-website projects_links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
          </div>
        </div>
        <div className="projects__content-items">
          <div className="projects__content-items-img">
            <img src={JsGame} alt="javascript game" />
          </div>
          <div className="projects__content-items-text">
            <div className="projects__content-items-title">Javascript Game</div>
            <div className="projects__content-items-desc">
              An entertaining game suitable for adults and children. This game
              is created using Javascript and CSS.
            </div>
            <div className="projects__links-container">
              <a
                href="https://github.com/Bevs11/deployment-js-game"
                className="projects__links-github projects_links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://ghostly-drift.netlify.app/"
                className="projects__links-website projects_links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
          </div>
        </div>
        <div className="projects__content-items">
          <div className="projects__content-items-img">
            <img src={HtmlCssWebsite} atl="portfolio website" />
          </div>
          <div className="projects__content-items-text">
            <div className="projects__content-items-title">
              HTML CSS Website
            </div>
            <div className="projects__content-items-desc">
              A website that showcase skills, personality and experience of the
              owner. This website is created using HTML and CSS.
            </div>
            <div className="projects__links-container">
              <a
                href="https://github.com/Bevs11/deployment-html-portfolio"
                className="projects__links-github projects_links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://beverly-html-website.netlify.app/"
                className="projects__links-website projects_links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
