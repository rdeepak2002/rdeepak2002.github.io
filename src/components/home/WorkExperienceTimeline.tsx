import { Image } from "react-bootstrap";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import tiktok_logo from "resources/images/TikTokLogo.png";
import mylifeguard_logo from "resources/images/MyLifeGuardLogo.png";

import { MdLocationOn } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import TagsSection from "./TagsSection";
import { k_cpp_tag } from "./ProjectTags";

const WorkExperienceTimeline = () => {
  const [workExperienceItems, setWorkExperienceItems] = useState<Array<WorkExperienceItemProps>>([]);

  useEffect(() => {
    setWorkExperienceItems([
      {
        date: "May 2021 - August 2021",
        logo: tiktok_logo,
        title: "Augmented Reality Software Engineering Intern",
        location: "Mountain View, CA",
        tags: [k_cpp_tag],
        content:
          <>
            <ul style={{ marginTop: "1rem" }}>
              <li>Contributed to the research and development of creative tools utilized by designers for creating Augmented Reality filters and effects in the TikTok app</li>
              <li>Contributed to the development of a machine learning powered smart playlist generator during an internal Hackathon</li>
              <li>Patent pending internship project</li>
            </ul>
          </>
      },
      {
        date: "June 2020 - Present",
        logo: mylifeguard_logo,
        title: "Software Developer",
        location: "Madison, WI",
        tags: [],
        content:
          <>
            <ul style={{ marginTop: "1rem" }}>
              <li>Developed a secure REST API using Spring Boot, JSON Web Tokens, and MongoDB</li>
              <li>Developed a real-time cloud messaging system for instant updates between clients</li>
              <li>Developed a frontend React web application that communicates with my Spring Boot REST API</li>
              <li>Developed a remote debugging Android app that sends debug logs to my Spring Boot REST API</li>
              <li>Installed and configured NGINX and Jenkins on a remote Linux machine for automatic continuous integration</li>
            </ul>
          </>
      },
    ]);
  }, []);

  return (
    <VerticalTimeline animate={false}>
      {
        workExperienceItems.map((item, index) => {
          return <WorkExperienceItem key={index} date={item.date} logo={item.logo} title={item.title} location={item.location} tags={item.tags} content={item.content} />
        })
      }
    </VerticalTimeline>
  );
}

interface WorkExperienceItemProps {
  date: string
  logo: any
  title: string
  location: string
  tags: Array<string>
  content: any
}

const WorkExperienceItem = (props: WorkExperienceItemProps) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={props.date}
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
      icon={<Image src={props.logo} fluid roundedCircle />}
    >
      <h3 className="vertical-timeline-element-title">{props.title}</h3>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignContent: "center", marginTop: "1rem" }}>
        <MdLocationOn style={{ marginRight: "0.2rem" }} color="red" />
        <h4 className="vertical-timeline-element-subtitle">{props.location}</h4>
      </div>
      <TagsSection marginBottom marginTop tags={props.tags} />
      {props.content}
    </VerticalTimelineElement>
  );
}

export default WorkExperienceTimeline;