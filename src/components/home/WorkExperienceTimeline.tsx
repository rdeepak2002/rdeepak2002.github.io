import { Image } from "react-bootstrap";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import tiktok_logo from "resources/images/TikTokLogo.png";
import mylifeguard_logo from "resources/images/MyLifeGuardLogo.png";

const WorkExperienceTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2021 - August 2021"
        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
        icon={<Image src={tiktok_logo} fluid roundedCircle />}
      >
        <h3 className="vertical-timeline-element-title">Augmented Reality Software Engineering Intern</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: "1rem" }}>Mountain View, CA</h4>
        <ul style={{ marginTop: "1rem" }}>
          <li>Contributed to the research and development of creative tools utilized by designers for creating Augmented Reality filters and effects in the TikTok app</li>
          <li>Contributed to the development of a machine learning powered smart playlist generator</li>
          <li>Patent pending internship project</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="June 2020 - Present"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<Image src={mylifeguard_logo} fluid roundedCircle />}
      >
        <h3 className="vertical-timeline-element-title">Software Developer</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: "1rem" }}>Madison, WI</h4>
        <ul style={{ marginTop: "1rem" }}>
          <li>Developed a secure REST API using Spring Boot, JSON Web Tokens, and MongoDB</li>
          <li>Developed a real-time cloud messaging system for instant updates between clients</li>
          <li>Developed a frontend React web application that communicates with my Spring Boot REST API</li>
          <li>Developed a remote debugging Android app that sends debug logs to my Spring Boot REST API</li>
          <li>Installed and configured NGINX and Jenkins on a remote Linux machine for automatic continuous integration</li>
        </ul>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default WorkExperienceTimeline;