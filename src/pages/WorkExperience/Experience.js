import React from "react";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaBugSlash } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experience.css";

const Experience = () => {
  return (
    <>
      <div className="work" id="experience">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="2022 - 2023"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaNodeJs />}
            >
              <h3 className="vertical-timeline-element-title">
                Associate Tech Lead
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                BYJU’S (Think and Learn Private Limited)
              </h5>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2020 - 2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                BYJU’S (Think and Learn Private Limited)
              </h5>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2020 - 2020"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaBugSlash />}
            >
              <h3 className="vertical-timeline-element-title">
                Quality Assurance Engineer
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                BYJU’S (Think and Learn Private Limited)
              </h5>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
