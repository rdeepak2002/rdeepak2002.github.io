import { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
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

interface HomeProps {
  setScreen: Function
}

const Home = (props: HomeProps) => {
  const isMobileCss = useWindowDimensions().width <= 900;

  useEffect(() => {
    props.setScreen("home");
  });

  return (
    <div>
      <div className="bg-image-container">
        <HeaderScene />

        <div style={{ position: "absolute", color: "white", bottom: "30%", fontSize: 30 }} className="digital-font">
          <Typewriter
            options={{
              strings: ["Software Engineer", "Innovator", "Problem Solver"],
              autoStart: true,
              loop: true,
              cursor: ""
            }}
          />
        </div>
      </div>

      <h1 className="big-name">Deepak Ramalingam</h1>

      <div className="home-section" id="about">
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <AboutSection isMobileCss={isMobileCss} />
        </Container>
      </div>

      <div className="home-section" id="work_experience" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
        <Container>
          <div style={{ marginBottom: 10, display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Image className="emoji-icon" src={suitcase_icon} fluid />
            <h1 style={{ marginLeft: 10, marginBottom: 0 }}>
              Work Experience
            </h1>
          </div>
          <WorkExperienceTimeline />
        </Container>
      </div>

      <div className="home-section" id="innovative_endeavors">
        <Container>
          <div style={{ marginBottom: 10, display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Image className="emoji-icon" src={robot_face_icon} fluid />
            <h1 style={{ marginLeft: 10, marginBottom: 0 }}>
              Innovative Endeavors
            </h1>
          </div>
          <Projects isMobileCss={isMobileCss} showAll={false}/>
        </Container>
      </div>

      <div className="home-section" id="achievements" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
        <Container>
          <div style={{ marginBottom: 10, display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Image className="emoji-icon" src={trophy_icon} fluid />
            <h1 style={{ marginLeft: 10, marginBottom: 0 }}>
              Achievements
            </h1>
          </div>
          <AchievementsSection />
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Home;