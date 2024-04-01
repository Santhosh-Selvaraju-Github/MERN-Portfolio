import React from "react";
import "./techstack.css";
import { TechstackList } from "../../utils/TechStackList";

const TechStack = () => {
  return (
    <>
      <div className="techstack-content" id="teckStack">
        <div className="techstack-heading">
          <h2>Technologies Stack</h2>
          <hr />
        </div>
        <div className="row">
          {TechstackList.map((tech) => (
            <>
              <div class="col-md-3">
                <div class="">
                  <div class="card m-2">
                    <div className="card-content">
                      <div class="card-body techstack-body d-flex justify-content-center">
                        <h4 class="card-title">
                          <tech.icon className={tech.icon} size={30} />
                        </h4>
                        <p class="card-title mt-1 ms-2">{tech.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
