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
    k_android_tag, k_apache_iceberg_tag,
    k_ar_tag, k_aws_tag,
    k_cpp_tag, k_css_tag,
    k_digital_ocean_tag, k_html_tag,
    k_java_tag,
    k_jenkins_tag,
    k_js_tag,
    k_lua_tag,
    k_mongodb_tag,
    k_napi_tag,
    k_nginx_tag, k_presto_tag, k_python_tag,
    k_react_tag, k_spinnaker_tag,
    k_spring_boot_tag,
    k_ts_tag,
    k_spark_tag
} from "./ProjectTags";

const WorkExperienceTimeline = () => {
    const [workExperienceItems, setWorkExperienceItems] = useState<Array<WorkExperienceItemProps>>([]);

    useEffect(() => {
        setWorkExperienceItems([
            {
                date: "May 2023 - August 2023",
                logo: netflix_logo,
                title: "Big Data Platform Software Engineer Intern @ Netflix",
                location: "Los Gatos, CA",
                tags: [k_java_tag, k_python_tag, k_jenkins_tag, k_spring_boot_tag, k_aws_tag, k_apache_iceberg_tag, k_spark_tag, k_presto_tag, k_spinnaker_tag, k_html_tag, k_css_tag],
                content:
                    <>
                        <p>(Return internship)</p>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Developed a framework to provide a detailed diagnosis of long-running jobs for Netflix's Big Data workflow orchestrator that supports over 150 teams and 70,000 workflows</li>
                        </ul>
                    </>
            },
            {
                date: "May 2022 - August 2022",
                logo: netflix_logo,
                title: "Big Data Platform Software Engineer Intern @ Netflix",
                location: "Los Gatos, CA",
                tags: [k_java_tag, k_python_tag, k_jenkins_tag, k_spring_boot_tag, k_aws_tag, k_apache_iceberg_tag, k_presto_tag, k_spinnaker_tag, k_html_tag, k_css_tag, k_js_tag],
                content:
                    <>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Refactored Spring Boot server code to publish tens of thousands of Big Data Platform jobs daily to an Apache Iceberg table for future analysis</li>
                            <li>Developed a framework to smartly manage and validate hundreds of rules used for the auto diagnosis and remediation of millions of Big Data Platform jobs, and to ensure that compute resources are not wasted on failed auto remediation attempts</li>
                            <li>Collaborated with a cross-functional team within the Big Data Platform organization to develop an API and web application to aid in resolving on-call alerts for data pipelines used for the real-time processing of petabytes of data</li>
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
                            <li>Name mentioned in below LinkedIn post:</li>
                        </ul>

                        <div>
                            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6919641954519584768"
                                    height="500" width="100%" frameBorder="0" allowFullScreen={true}
                                    title="Embedded post"></iframe>
                        </div>
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
