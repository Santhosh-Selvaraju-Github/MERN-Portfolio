import React from "react";
import "./about.css";
import ProfilePic from "../../assets/jaypic1.jpg";

const About = () => {
  return (
    <>
      <div className="about-content" id="about">
        <div className="profile-img">
          <img src={ProfilePic} alt="Profile_pic" />
        </div>
        <div className="about">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            fugiat? In neque, tempore harum voluptate ad veritatis, sed
            excepturi quia quis vero, necessitatibus ea repellendus dolor
            reprehenderit consequatur nulla consequuntur voluptates dolorem
            tempora ut quod quas. Laudantium, nihil? Iusto cumque incidunt
            suscipit! Adipisci impedit quae, omnis est earum itaque vitae!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
