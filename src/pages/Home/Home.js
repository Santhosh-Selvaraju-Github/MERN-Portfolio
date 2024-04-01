import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Jayasree_Resume.pdf"
import { RiDownloadLine } from "react-icons/ri";
import { Fade, Flip } from "react-reveal";
import JobPic from "../../assets/homepic.png"

const Home = () => {
  return (
    <div className="home-content d-flex " id="home">
      <div className="col-md-6">
        <Flip top>
          <h1>Hi, I'm Jayasree P</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Associate Tech Lead",
                  "Full Stack Developer!",
                  "MERN Stack Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </Flip>
        <Fade bottom>
          <div className="mt-5">
            <button className="btn btn-primary me-4 btn-hire">Hire Me</button>
            <a href={Resume} download="Jayasree_Resume.pdf">
              <button className="btn btn-primary btn-hire">
                My Resume <RiDownloadLine />
              </button>
            </a>
          </div>
        </Fade>
      </div>
      <Fade right>
        <div className="jobpic col-md-5">
          <img src={JobPic} alt="Job_Pic" />
        </div>
      </Fade>
    </div>
  );
};

export default Home;
