import {Image} from "react-bootstrap";

import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import netflix_logo from "resources/images/NetflixLogo.png";
import tiktok_logo from "resources/images/TikTokLogo.png";
import mylifeguard_logo from "resources/images/MyLifeGuardLogo.png";

import {MdLocationOn} from "react-icons/md";
import {useEffect, useState} from "react";
import TagsSection from "./TagsSection";
import {
    k_android_tag,
    k_ar_tag,
    k_cpp_tag,
    k_digital_ocean_tag,
    k_java_tag,
    k_jenkins_tag,
    k_js_tag,
    k_lua_tag,
    k_mongodb_tag,
    k_napi_tag,
    k_nginx_tag,
    k_react_tag,
    k_spring_boot_tag,
    k_ts_tag
} from "./ProjectTags";

const WorkExperienceTimeline = () => {
    const [workExperienceItems, setWorkExperienceItems] = useState<Array<WorkExperienceItemProps>>([]);

    useEffect(() => {
        setWorkExperienceItems([
            {
                date: "May 2022 - August 2022",
                logo: netflix_logo,
                title: "Big Data Platform Software Engineer Intern @ Netflix",
                location: "Los Gatos, CA",
                tags: [],
                content:
                    <>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Incoming software engineering intern on the Big Data Platform team
                            </li>
                        </ul>
                    </>
            },
            {
                date: "May 2021 - August 2021",
                logo: tiktok_logo,
                title: "Augmented Reality Software Engineering Intern @ TikTok (Intelligent Creation Lab)",
                location: "Mountain View, CA",
                tags: [k_ar_tag, k_react_tag, k_cpp_tag, k_lua_tag, k_ts_tag, k_napi_tag],
                content:
                    <>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Contributed to the research and development of ”TikTok Effect House,” a tool utilized by designers for developing Augmented Reality filters and effects for the TikTok app
                            </li>
                            <li>Contributed to the development of a machine learning powered smart playlist generator during an internal Hackathon
                            </li>
                            <li>Worked with React, TypeScript, Node Addon API, C++, Lua, and multiprocessing to implement a patent pending internship project</li>
                            <li>Featured in the news: <a rel="noreferrer" target="_blank" href={"https://techcrunch.com/2021/08/23/tiktok-is-building-its-own-ar-development-platform-tiktok-effect-studio/"} style={{wordBreak: "break-all"}}>https://techcrunch.com/2021/08/23/tiktok-is-building-its-own-ar-development-platform-tiktok-effect-studio/</a></li>
                        </ul>
                    </>
            },
            {
                date: "June 2020 - May 2021",
                logo: mylifeguard_logo,
                title: "Software Developer @ PeeblesTech LLC",
                location: "Madison, WI",
                tags: [k_spring_boot_tag, k_java_tag, k_js_tag, k_react_tag, k_android_tag, k_nginx_tag, k_jenkins_tag, k_mongodb_tag, k_digital_ocean_tag],
                content:
                    <>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Developed a secure REST API using Spring Boot, JSON Web Tokens, and MongoDB</li>
                            <li>Developed a real-time cloud messaging system for instant updates between clients</li>
                            <li>Developed a frontend React web application that communicates with my Spring Boot REST
                                API
                            </li>
                            <li>Developed a remote debugging Android app that sends debug logs to my Spring Boot REST
                                API
                            </li>
                            <li>Installed and configured NGINX and Jenkins on a remote Linux machine for automatic
                                continuous integration
                            </li>
                        </ul>
                    </>
            },
        ]);
    }, []);

    return (
        <VerticalTimeline animate={false}>
            {
                workExperienceItems.map((item, index) => {
                    return <WorkExperienceItem key={index} date={item.date} logo={item.logo} title={item.title}
                                               location={item.location} tags={item.tags} content={item.content}/>
                })
            }
        </VerticalTimeline>
    );
}

interface WorkExperienceItemProps {
    date: string;
    logo: string;
    title: string;
    location: string;
    tags: Array<string>;
    content: JSX.Element;
}

const WorkExperienceItem = (props: WorkExperienceItemProps) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={props.date}
            iconStyle={{background: 'rgb(255, 255, 255)', color: '#fff'}}
            icon={<Image src={props.logo} fluid roundedCircle/>}
        >
            <h3 className="vertical-timeline-element-title">{props.title}</h3>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                marginTop: "1rem"
            }}>
                <MdLocationOn style={{marginRight: "0.2rem"}} color="red"/>
                <h4 className="vertical-timeline-element-subtitle">{props.location}</h4>
            </div>
            <TagsSection marginBottom marginTop tags={props.tags}/>
            {props.content}
        </VerticalTimelineElement>
    );
}

export default WorkExperienceTimeline;
