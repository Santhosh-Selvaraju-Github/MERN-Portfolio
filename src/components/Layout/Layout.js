import React, { useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import "./layout.css";
import Home from "../../pages/Home/Home";
import Menu from "../Menus/Menu";
import About from "../../pages/About/About";
import TechStack from "../../pages/TechStack/TechStack";
import Projects from "../../pages/Projects/Projects";
import Education from "../../pages/Educations/Educations";
import Experience from "../../pages/WorkExperience/Experience";
import Contact from "../../pages/Contact/Contact";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={`${toggle ? "sidebar-toggle sidebar" : "sidebar"}`}>
          <div className="sidebar-toggle-icons">
            <p onClick={() => handleToggle()}>
              {toggle ? (
                <MdOutlineKeyboardDoubleArrowLeft size={30} />
              ) : (
                <MdOutlineKeyboardDoubleArrowRight size={30} />
              )}
            </p>
          </div>
          <div>
            <Menu toggle={toggle} />
          </div>
        </div>
        <div>
          <div className="home-container">
            <Home />
          </div>
          <div className="about-container">
            <About />
          </div>
          <div className="experience-container">
            <Experience />
          </div>
          <div className="techstack-container">
            <TechStack />
          </div>
          <div className="education-container">
            <Education />
          </div>
          <div className="projects-container">
            <Projects />
          </div>
          <div className="contact-container">
            <Contact />
          </div>
          <div className="footer-container">
            <h5>Jayasree's Portfolio &copy; 2024</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
