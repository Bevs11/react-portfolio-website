import React, { useState } from "react";
import { AboutMe, CTA, Home, Languages, Projects } from "./pages";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="gradient__bg">
        <Header />
        <Home />
        <AboutMe />
        <Languages />
        <Projects />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
