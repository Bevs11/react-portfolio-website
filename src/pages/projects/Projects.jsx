import React from "react";
import ECommerce from "../../assets/ECommerce.png";
import JsGame from "../../assets/JsGame.png";
import HtmlCssWebsite from "../../assets/HtmlCssWebsite.png";
import Coslike from "../../assets/Coslike.png";
import Pokedex from "../../assets/Pokedex.png";
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
        {/*HTML CSS Website */}
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
        {/*Coslike */}
        <div className="projects__content-items">
          <div className="projects__content-items-img">
            <img src={Coslike} atl="portfolio website" />
          </div>
          <div className="projects__content-items-text">
            <div className="projects__content-items-title">
              Coslike App Full Stack
            </div>
            <div className="projects__content-items-desc">
              A social media website that allows users to register and login.
              Users can posts and see other users' posts. This website is
              created using React and styled with Sass. The backend is created
              using Express Js and MongoDB.
            </div>
            <div className="projects__links-container">
              <a
                href="https://github.com/Bevs11/deployment-coslike/tree/develop"
                className="projects__links-github projects_links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://coslike-app.netlify.app/"
                className="projects__links-website projects_links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
          </div>
        </div>
        {/*Pokedex */}
        <div className="projects__content-items">
          <div className="projects__content-items-img">
            <img src={Pokedex} atl="portfolio website" />
          </div>
          <div className="projects__content-items-text">
            <div className="projects__content-items-title">
              Pokedex App Full Stack
            </div>
            <div className="projects__content-items-desc">
              A Pokedex App that allows users to view Pokemons with their name
              and type. Users click on the type to see more pokemons of that
              type. This website is created using React and styled with CSS. The
              backend is created using Express Js and MongoDB.
            </div>
            <div className="projects__links-container">
              <a
                href="https://github.com/Bevs11/react-pokedex-app"
                className="projects__links-github projects_links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://pokedex-react-express.netlify.app/"
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
