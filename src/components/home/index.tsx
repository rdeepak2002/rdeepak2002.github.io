import React, {useEffect, useState} from "react";
import {Container, Image} from "react-bootstrap";
import {isMobile} from "react-device-detect";
import HeaderScene from "components/header-scene/";
import Footer from "components/footer";
import Typewriter from "typewriter-effect";
import useWindowDimensions from "utils/WindowDimensions";

import AboutSection from "./AboutSection";
import WorkExperienceTimeline from "./WorkExperienceTimeline";
import Projects from "./Projects";
import AchievementsSection from "./AchievementsSection";

import robot_face_icon from "resources/icons/robot-face-icon.png";
import suitcase_icon from "resources/icons/suitcase-icon.png";
import trophy_icon from "resources/icons/trophy-icon.png";

import {
    k_about_href,
    k_achievements_href,
    k_home_link,
    k_innovative_endeavors_href,
    k_work_experience_href
} from "components/navbar";

interface HomeProps {
    setScreen: Function;
}

const Home = (props: HomeProps) => {
    const isMobileCss = useWindowDimensions().width <= 900;

    let [aboutRef, setAboutRef] = useState<any>(undefined);
    let [workExperienceRef, setWorkExperienceRef] = useState<any>(undefined);
    let [innovativeEndeavorsRef, setInnovativeEndeavorsRef] = useState<any>(undefined);
    let [achievementsRef, setAchievementsRef] = useState<any>(undefined);

    useEffect(() => {
        props.setScreen(k_home_link);
    }, [props]);

    useEffect(() => {
        const url: string = String(window.location);
        const anchorPresent = url.lastIndexOf("#") !== url.lastIndexOf("#/");
        const anchor = anchorPresent ? url.substring(url.lastIndexOf("#") + 1) : "";

        let ref: any = undefined;

        switch (anchor) {
            case k_about_href:
                ref = aboutRef;
                if (ref) {
                    setTimeout(() => {
                        ref.scrollIntoView();
                    }, 500);
                }
                break;
            case k_work_experience_href:
                ref = workExperienceRef;
                if (ref) {
                    setTimeout(() => {
                        ref.scrollIntoView();
                    }, 500);
                }
                break;
            case k_innovative_endeavors_href:
                ref = innovativeEndeavorsRef;
                if (ref) {
                    setTimeout(() => {
                        ref.scrollIntoView();
                    }, 500);
                }
                break;
            case k_achievements_href:
                ref = achievementsRef;
                if (ref) {
                    setTimeout(() => {
                        ref.scrollIntoView();
                    }, 500);
                }
                break;
        }


    }, [aboutRef, achievementsRef, innovativeEndeavorsRef, workExperienceRef]);

    return (
        <div style={{backgroundColor: "white"}}>
            {/*Header*/}
            <div>
                <div className={isMobile ? "bg-image-container fill-height-mobile" : "bg-image-container"}
                     style={{overflow: "hidden"}}>
                    <HeaderScene/>

                    <div style={{position: "absolute", color: "black", bottom: "30%", fontSize: 30}}
                         className="digital-font">
                        <Typewriter
                            options={{
                                strings: ["Software Engineer", "Innovator", "Problem Solver"],
                                autoStart: true,
                                loop: true,
                                cursor: ""
                            }}
                        />
                    </div>

                    <h1 className="big-name">Deepak Ramalingam</h1>
                </div>
            </div>

            {/*About Section*/}
            <div
                ref={ref => {
                    setAboutRef(ref);
                }}
                className="home-section"
                id={k_about_href}>
                <Container style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <AboutSection isMobileCss={isMobileCss}/>
                </Container>
            </div>

            {/*Work Experience Section*/}
            <div
                ref={ref => {
                    setWorkExperienceRef(ref);
                }}
                className="home-section"
                id={k_work_experience_href}
                style={{backgroundColor: "rgb(240, 240, 240)"}}>
                <Container>
                    <div style={{marginBottom: 10, display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <Image className="emoji-icon" src={suitcase_icon} fluid/>
                        <h1 style={{marginLeft: 10, marginBottom: 0}}>
                            Work Experience
                        </h1>
                    </div>
                    <WorkExperienceTimeline/>
                </Container>
            </div>

            {/*Innovative Endeavors Section*/}
            <div
                ref={ref => {
                    setInnovativeEndeavorsRef(ref);
                }}
                className="home-section"
                id={k_innovative_endeavors_href}>
                <Container>
                    <div style={{marginBottom: 10, display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <Image className="emoji-icon" src={robot_face_icon} fluid/>
                        <h1 style={{marginLeft: 10, marginBottom: 0}}>
                            Innovative Endeavors
                        </h1>
                    </div>
                    <Projects isMobileCss={isMobileCss} showAll={false}/>
                </Container>
            </div>

            {/*Achievements Section*/}
            <div
                ref={ref => {
                    setAchievementsRef(ref);
                }}
                className="home-section"
                id={k_achievements_href}
                style={{backgroundColor: "rgb(240, 240, 240)"}}>
                <Container>
                    <div style={{marginBottom: 10, display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <Image className="emoji-icon" src={trophy_icon} fluid/>
                        <h1 style={{marginLeft: 10, marginBottom: 0}}>
                            Achievements
                        </h1>
                    </div>
                    <AchievementsSection/>
                </Container>
            </div>

            {/*Footer*/}
            <Footer/>
        </div>
    );
}

export default Home;