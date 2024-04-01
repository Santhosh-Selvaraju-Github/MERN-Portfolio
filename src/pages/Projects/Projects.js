import React from "react";
import "./projects.css";
import ProjectImg from "../../assets/profile_pic.jpg";

const Projects = () => {
  return (
    <>
      <div className="projects-content text-center" id="projects">
        <div className="project-heading">
          <h1>Projects</h1>
        </div>
        <hr />
        <div class="row container-fluid justify-content-center project-body">
          <div class="col-md-3 m-0">
            <div class="card position-relative">
              <img src={ProjectImg} class="card-img-top" alt="..." />
              <h5>
                <span class="badge rounded-pill text-bg-success btn-badge">
                  Full Stack
                </span>
              </h5>
              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                <p class="card-text gap-1">
                  <span class="badge rounded-pill text-bg-success me-1">
                    React
                  </span>
                  <span class="badge rounded-pill text-bg-success me-1">
                    Express
                  </span>
                  <span class="badge rounded-pill text-bg-success me-1">
                    Tailwind
                  </span>
                  <span class="badge rounded-pill text-bg-success me-1">
                    Mongo Db
                  </span>
                </p>
              </div>
              <div class="card-footer">
                <h5 className="btn btn-success btn-view text-white">View</h5>
              </div>
            </div>
          </div>
          <div class="col-md-3 m-0 justify-content-center">
            <div class="card position-relative">
              <img src={ProjectImg} class="card-img-top" alt="..." />
              <h5>
                <span class="badge rounded-pill text-bg-success btn-badge">
                  Full Stack
                </span>
              </h5>
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text gap-1">
                  <span class="badge rounded-pill text-bg-success me-1">
                    React
                  </span>
                  <span class="badge rounded-pill text-bg-success me-1">
                    Express
                  </span>
                  <span class="badge rounded-pill text-bg-success me-1">
                    Tailwind
                  </span>
                  <span class="badge rounded-pill text-bg-success me-1">
                    Mongo Db
                  </span>
                </p>
              </div>
              <div class="card-footer">
                <h5 className="btn btn-success btn-view text-white">View</h5>
              </div>
            </div>
          </div>
          <div class="col-md-3 m-0">
            <div class="card position-relative">
              <img src={ProjectImg} class="card-img-top" alt="..." />
              <h5>
                <span class="badge rounded-pill text-bg-success btn-badge">
                  Full Stack
                </span>
              </h5>
              <div class="card-body">
                <h5 class="card-title">Project 3</h5>
                <p class="card-text gap-1">
                  <span class="badge rounded-pill text-bg-success me-1">
                    React
                  </span>
                  <span class="badge rounded-pill text-bg-success me-1">
                    Express
                  </span>
                  <span class="badge rounded-pill text-bg-success me-1">
                    Tailwind
                  </span>
                  <span class="badge rounded-pill text-bg-success me-1">
                    Mongo Db
                  </span>
                </p>
              </div>
              <div class="card-footer">
                <h5 className="btn btn-success btn-view text-white">View</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
