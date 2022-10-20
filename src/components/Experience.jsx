import React from "react";
import "./sass/Experience.scss";
import visual from "../assets/images/visual-studio.png";
import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import sass from "../assets/images/sass.png";
import redux from "../assets/images/redux.png";
import svelte from "../assets/images/svelte.png";
import styledComponents from "../assets/images/styled-components.png";
import node from "../assets/images/node.png";
import postman from "../assets/images/postman.png";
import android from "../assets/images/android.png";
import lighthouse from "../assets/images/lighthouse.png";
import booststrap from "../assets/images/Booststrap.png";
import ReactBootstrap from "../assets/images/RB.png";
import tailwind from "../assets/images/Tailwind.png";
import materialize from "../assets/images/Materialize.png";
import github from "../assets/images/github.png";
import git from "../assets/images/git.png";
import terminal from "../assets/images/terminal.png";
import webpack from "../assets/images/webpack.png";
import babel from "../assets/images/babel.png";
import firebase from "../assets/images/firebase.png";
import npm from "../assets/images/npm.png";
import netlify from "../assets/images/netlify.png";
import prepos from "../assets/images/prepos.png";
import cPanel from "../assets/images/cPanel.png";
import wordpress from "../assets/images/wordpress.png";
import woo from "../assets/images/woo.png";
import figma from "../assets/images/figma.png";
import ai from "../assets/images/ai.png";
import ax from "../assets/images/adobexd.png";
import eslint from "../assets/icons/eslint.svg";
import prettier from "../assets/icons/prettier.svg";
import pwa from "../assets/icons/pwa.svg";
import vercel from "../assets/images/vercel.png";
import semanticUiReact from "../assets/images/semanticUiReact.png";
import jest from "../assets/images/jest-logo.png";
import materialui from "../assets/images/materialiui.png";
import next from "../assets/images/nextjs.png";
import nodemon from "../assets/images/nodemon.png";
import typescript from "../assets/images/Typescript.png";
import express from "../assets/images/express.png";
import postgresql from "../assets/images/postgreSql.png";
import docker from "../assets/images/docker.png";

const Experience = () => {
  return (
    <>
      <div className="container">
        <h4>
          Herramientas de Frontend <span>💻</span>{" "}
        </h4>
      </div>
      <section className="experiencia-container">
        <div className="item-experiencia">
          <img src={html5} alt="HTML5" title="HTML5" />
        </div>
        <div className="item-experiencia">
          <img src={css3} alt="CSS3" title="CSS3" />
        </div>
        <div className="item-experiencia">
          <img src={js} alt="JavaScript" title="JavaScript" />
        </div>
        <div className="item-experiencia">
          <img src={typescript} alt="TypeScript" title="TypeScript" />
        </div>
        <div className="item-experiencia">
          <img src={react} alt="React js" title="React js" />
        </div>
        <div className="item-experiencia">
          <img src={sass} alt="Sass" title="Sass" />
        </div>
        <div className="item-experiencia">
          <img src={redux} alt="Redux" title="Redux" />
        </div>
        <div className="item-experiencia">
          <img
            src={styledComponents}
            alt="styled-components"
            title="styled-components"
          />
        </div>
        <div className="item-experiencia">
          <img src={jest} alt="Jest" title="Jest" />
        </div>
        <div className="item-experiencia">
          <img src={svelte} alt="Svelte" title="Svelte" />
        </div>
        <div className="item-experiencia">
          <img src={next} alt="Next js" title="Next js" />
        </div>
      </section>

      <div className="container">
        <h4>
          Herramientas de Backend <span>🧲</span>{" "}
        </h4>
      </div>
      <section className="experiencia-container">
        <div className="item-experiencia">
          <img src={node} alt="Node js" title="Node js" />
        </div>
        <div className="item-experiencia">
          <img src={nodemon} alt="Nodemon" title="Nodemon" />
        </div>
        <div className="item-experiencia">
          <img src={postman} alt="Postman" title="Postman" />
        </div>
        <div className="item-experiencia">
          <img src={docker} alt="docker" title="Docker" />
        </div>
        <div className="item-experiencia">
          <img src={postgresql} alt="PostgreSql" title="PostgreSql" />
        </div>
        <div className="item-experiencia">
          <img src={express} alt="express" title="express" />
        </div>
      </section>

      <div className="container">
        <h4>Herramientas de desarrollo</h4>
      </div>
      <section className="experiencia-container">
        <div className="item-experiencia">
          <img
            src={visual}
            alt="Visual Studio Code"
            title="Visual Studio Code"
          />
        </div>
        <div className="item-experiencia">
          <img
            src="http://pngimg.com/uploads/google/google_PNG19633.png"
            alt="Chrome dev tools"
            title="Chrome dev tools"
          />
        </div>
        <div className="item-experiencia">
          <img src={eslint} alt="esLint" title="esLint" />
        </div>
        <div className="item-experiencia">
          <img
            src={lighthouse}
            alt="Google lighthouse"
            title="Google lighthouse"
          />
        </div>
        <div className="item-experiencia">
          <img src={terminal} alt="Terminal" title="Terminal" />
        </div>
        <div className="item-experiencia">
          <img src={prettier} alt="Prettier" title="Prettier" />
        </div>
        <div className="item-experiencia">
          <img
            src={pwa}
            alt="Progressive Web Apps"
            title="Progressive Web Apps"
          />
        </div>
        <div className="item-experiencia">
          <img src={android} alt="Android Studio" title="Android Studio" />
        </div>
      </section>

      <div className="container">
        <h4>Herramientas de maquetación web</h4>
      </div>
      <section className="experiencia-container">
        <div className="item-experiencia">
          <img
            src={ReactBootstrap}
            alt="React Bootstrap"
            title="React Bootstrap"
          />
        </div>
        <div className="item-experiencia">
          <img src={booststrap} alt="Booststrap" title="Booststrap" />
        </div>
        <div className="item-experiencia">
          <img src={tailwind} alt="Tailwind css" title="Tailwind css" />
        </div>
        <div className="item-experiencia">
          <img
            src={materialize}
            alt="Materialize css"
            title="Materialize css"
          />
        </div>
        <div className="item-experiencia">
          <img
            src={semanticUiReact}
            alt="Semantic UI React"
            title="Semantic UI React"
          />
        </div>
        <div className="item-experiencia">
          <img src={materialui} alt="Material Ui" title="Material Ui" />
        </div>
      </section>

      <div className="container">
        <h4>DevOps</h4>
      </div>
      <section className="experiencia-container">
        <div className="item-experiencia">
          <img src={github} alt="GitHub" title="GitHub" />
        </div>
        <div className="item-experiencia">
          <img src={webpack} alt="Webpack" title="Webpack" />
        </div>
        <div className="item-experiencia">
          <img src={babel} alt="Babel" title="Babel" />
        </div>
        <div className="item-experiencia">
          <img src={git} alt="Git" title="Git" />
        </div>
        <div className="item-experiencia">
          <img src={npm} alt="npm" title="npm" />
        </div>
        <div className="item-experiencia">
          <img src={netlify} alt="Netlify" title="Netlify" />
        </div>
        <div className="item-experiencia">
          <img src={vercel} alt="Vercel" title="Vercel" />
        </div>
        <div className="item-experiencia">
          <img src={firebase} alt="FireBase" title="FireBase" />
        </div>
        <div className="item-experiencia">
          <img src={cPanel} alt="cPanel" title="cPanel" />
        </div>
        <div className="item-experiencia">
          <img src={prepos} alt="Prepos" title="Prepos" />
        </div>
      </section>

      <div className="container">
        <h4>Diseño Web | UX/UI</h4>
      </div>
      <section className="experiencia-container">
        <div className="item-experiencia">
          <img src={wordpress} alt="WordPress" title="WordPress" />
        </div>
        <div className="item-experiencia">
          <img src={woo} alt="WooCommerce" title="WooCommerce" />
        </div>
        <div className="item-experiencia">
          <img src={figma} alt="Figma" title="Figma" />
        </div>
        <div className="item-experiencia">
          <img src={ai} alt="Adobe Illustrator" title="Adobe Illustrator" />
        </div>
        <div className="item-experiencia">
          <img src={ax} alt="Adobe XD" title="Adobe XD" />
        </div>
      </section>
    </>
  );
};

export { Experience };
