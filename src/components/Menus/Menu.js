import React from "react";
import "./menu.css";
import {
  Link
} from "react-scroll";
import {
  FcHome,
  FcContacts,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  // FcVoicePresentation,
} from "react-icons/fc";
import profilePic from "../../assets/jayPic.jpg";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="profile-pic">
            <img src={profilePic} alt="Profile pic" />
          </div>
          <div className="nav">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcHome />
                <p>Home</p>
              </div>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcAbout />
                <p>About</p>
              </div>
            </Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcPortraitMode />
                <p>Work Experience</p>
              </div>
            </Link>
            <Link
              activeClass="active"
              to="teckStack"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcBiotech />
                <p>Tech Stack</p>
              </div>
            </Link>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcReadingEbook />
                <p>Education</p>
              </div>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcVideoProjector />
                <p>Projects</p>
              </div>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcContacts />
                <p>Contact</p>
              </div>
            </Link>
            {/* <div className="nav-item">
              <FcVoicePresentation />
              <p>Testimonial</p>
            </div> */}
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcHome title="Home" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcAbout title="About" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcPortraitMode title="Work Experience" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="teckStack"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcBiotech title="Tech Stack" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcReadingEbook title="Education" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcVideoProjector title="Projects" />
              </div>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="nav-item">
                <FcContacts title="Contact" />
              </div>
            </Link>

            {/* <div className="nav-item">
              <FcVoicePresentation title="Testimonial" />
            </div> */}
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
