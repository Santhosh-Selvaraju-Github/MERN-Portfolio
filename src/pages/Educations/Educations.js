import React from "react";
import "./educations.css";
import { FaUserGraduate } from "react-icons/fa";

const Educations = () => {
  return (
    <>
      <div className="education" id="education">
        <div className="techstack-heading">
          <h2>Education Details</h2>
          <hr />
        </div>
        <div className="d-flex justify-content-center">
          <h2 className="mt-4">
            <FaUserGraduate size={50} />
          </h2>
          <div className="pt-2 ms-5">
            <h2>Bachelor of Engineering in Computer Science</h2>
            <h4>SRM TRP Engineering College</h4>
            <p>Tiruchirappalli, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;
