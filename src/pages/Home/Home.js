import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Jayasree_Resume.pdf"
import { RiDownloadLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="home-content" id="home">
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
      <div className="mt-4">
        <button className="btn btn-primary me-4 btn-hire">Hire Me</button>
        <a href={Resume} download="Jayasree_Resume.pdf">
          <button className="btn btn-primary btn-hire">
            My Resume <RiDownloadLine />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
