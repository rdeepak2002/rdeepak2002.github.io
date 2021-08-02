import { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import HeaderScene from "components/header-scene/";
import Footer from "components/footer";
import Typewriter from "typewriter-effect";

import deepak_picture from "resources/images/deepak_1.jpg";
import useWindowDimensions from "utils/WindowDimensions";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

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
          <div className="card" style={{ width: "100%" }}>
            <div style={{ display: "flex", flexDirection: isMobileCss ? "column" : "row", paddingTop: 64, paddingBottom: 64, paddingRight: 48, paddingLeft: 48 }}>
              <div style={{ display: "flex", flexDirection: "column", flex: 0.5, borderBottomStyle: isMobileCss ? "solid" : "none", borderBottomWidth: 1, marginBottom: isMobileCss ? 10 : 0 }}>
                <Image src={deepak_picture} fluid rounded style={{ width: isMobileCss ? "100%" : "60%", height: "auto" }} />

                <div style={{ marginTop: "1rem" }}>
                  <p><strong>Name:</strong> Deepak Ramalingam</p>
                  <p><strong>Major:</strong> B.S. Computer Science @ Georgia Institute of Technology</p>
                  <p><strong>Email:</strong> rdeepak2002@gmail.com</p>
                  <p><strong>Phone:</strong> +1 (208) 391-9267</p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", flex: 0.5 }}>
                <h5>Biography</h5>

                <p>
                  I was born in Boise, Idaho, and I am currently a second year Computer Science student at the Georgia Institute of Technology.
                </p>

                <p>
                  I am passionate about Computer Science and during my free time I like to create full stack applications. I also love to play racquet sports like badminton and tennis.
                </p>

                <p>
                  I work part-time as a Software Developer for PeeblesTech LLC in Wisconsin, Madison.
                </p>

                <p>
                  I am also a full-time Augmented Reality Software Engineering Intern at TikTok's Intelligent Creation R&D Lab in Mountain View, California.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="home-section" id="work_experience" style={{backgroundColor: "rgb(240, 240, 240)"}}>
        <Container>
          <h1>
            Work Experience
          </h1>
          <p>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                  User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                  User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                  Strategy, Social Media
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                  Creative Direction, User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                  Creative Direction, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
              />
            </VerticalTimeline>
          </p>
        </Container>
      </div>

      <div className="home-section" id="innovative_endeavors">
        <Container>
          <h1>
            Innovative Endeavors
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem metus, semper non egestas ac, volutpat sit amet diam. Quisque quis dolor eu dolor viverra pharetra feugiat nec turpis. Curabitur convallis a eros a condimentum. Pellentesque congue lorem et augue rhoncus, ac feugiat turpis auctor. Suspendisse nec lorem quis velit porta mattis eget lacinia purus. Nam at commodo felis. Proin eleifend in libero eu porta. Donec rhoncus ligula id vestibulum finibus. Duis elementum lorem sed erat sagittis pretium. Ut quis erat enim. Integer pellentesque odio felis, sit amet vulputate nisi volutpat et.

            Phasellus sagittis aliquet facilisis. Donec commodo justo nibh, et tincidunt libero laoreet et. Donec auctor pulvinar urna, sit amet porta orci blandit sit amet. Donec sagittis porttitor turpis consectetur laoreet. Etiam pulvinar lorem justo, in pellentesque lorem feugiat sed. Ut sed bibendum erat. Mauris malesuada tincidunt tortor. Vestibulum pellentesque suscipit fringilla. Ut luctus, dui at pellentesque elementum, urna arcu iaculis massa, ac commodo tellus diam vitae nisl. Morbi in quam rhoncus, tincidunt diam at, vulputate augue.

            Vivamus sit amet tempus nisi. Suspendisse lacus quam, placerat sed felis quis, dictum congue tellus. Cras sit amet mollis quam, eget scelerisque libero. Donec ac diam eleifend, interdum felis id, vulputate dui. Maecenas aliquet lacus sit amet tortor tincidunt accumsan. Maecenas sed dictum metus. Sed sollicitudin leo ut dapibus aliquet. Vivamus lobortis vehicula urna et posuere. Nunc eget erat in nisi blandit suscipit a sit amet purus. Phasellus at tristique nisi, ac laoreet urna. Sed porttitor lacus tellus, rhoncus dictum magna vulputate sed. Aliquam hendrerit molestie sem, a dignissim nibh dignissim quis. Suspendisse faucibus porta ornare. In in quam sagittis, molestie sem ut, porta sem. Donec mollis ultricies convallis. Proin quam magna, vulputate a posuere sed, ullamcorper nec diam.

            Nunc id ligula feugiat, pulvinar purus eu, dignissim massa. Curabitur auctor ultricies turpis at egestas. Curabitur at risus magna. Proin id sollicitudin neque, condimentum tempor leo. Praesent et ullamcorper neque. Pellentesque in arcu eu sem sodales aliquet. Nulla ut accumsan risus. Sed erat justo, commodo ut tempus et, placerat sit amet augue. Quisque non enim in ante porttitor commodo tristique ut quam. Aenean fermentum, neque sit amet tincidunt ullamcorper, nisi turpis lacinia est, quis interdum tortor nisi ut mi.

            Nam eu felis a nibh iaculis tincidunt vitae sed justo. Nullam elementum ante eu arcu volutpat, vitae consequat libero vehicula. Phasellus vestibulum, lacus in tincidunt viverra, metus erat pretium enim, a fringilla purus sem ac quam. Etiam blandit libero ut nibh interdum, sit amet sodales velit porttitor. In scelerisque a ex a tristique. Integer pharetra mi nec urna iaculis varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque porta cursus augue sit amet euismod. In pretium dignissim ante molestie rhoncus. Suspendisse suscipit eleifend lectus, facilisis placerat est dignissim sit amet. Ut euismod neque at iaculis eleifend.
          </p>
        </Container>
      </div>

      <div className="home-section" id="achievements">
        <Container>
          <h1>
            Achievements
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem metus, semper non egestas ac, volutpat sit amet diam. Quisque quis dolor eu dolor viverra pharetra feugiat nec turpis. Curabitur convallis a eros a condimentum. Pellentesque congue lorem et augue rhoncus, ac feugiat turpis auctor. Suspendisse nec lorem quis velit porta mattis eget lacinia purus. Nam at commodo felis. Proin eleifend in libero eu porta. Donec rhoncus ligula id vestibulum finibus. Duis elementum lorem sed erat sagittis pretium. Ut quis erat enim. Integer pellentesque odio felis, sit amet vulputate nisi volutpat et.

            Phasellus sagittis aliquet facilisis. Donec commodo justo nibh, et tincidunt libero laoreet et. Donec auctor pulvinar urna, sit amet porta orci blandit sit amet. Donec sagittis porttitor turpis consectetur laoreet. Etiam pulvinar lorem justo, in pellentesque lorem feugiat sed. Ut sed bibendum erat. Mauris malesuada tincidunt tortor. Vestibulum pellentesque suscipit fringilla. Ut luctus, dui at pellentesque elementum, urna arcu iaculis massa, ac commodo tellus diam vitae nisl. Morbi in quam rhoncus, tincidunt diam at, vulputate augue.

            Vivamus sit amet tempus nisi. Suspendisse lacus quam, placerat sed felis quis, dictum congue tellus. Cras sit amet mollis quam, eget scelerisque libero. Donec ac diam eleifend, interdum felis id, vulputate dui. Maecenas aliquet lacus sit amet tortor tincidunt accumsan. Maecenas sed dictum metus. Sed sollicitudin leo ut dapibus aliquet. Vivamus lobortis vehicula urna et posuere. Nunc eget erat in nisi blandit suscipit a sit amet purus. Phasellus at tristique nisi, ac laoreet urna. Sed porttitor lacus tellus, rhoncus dictum magna vulputate sed. Aliquam hendrerit molestie sem, a dignissim nibh dignissim quis. Suspendisse faucibus porta ornare. In in quam sagittis, molestie sem ut, porta sem. Donec mollis ultricies convallis. Proin quam magna, vulputate a posuere sed, ullamcorper nec diam.

            Nunc id ligula feugiat, pulvinar purus eu, dignissim massa. Curabitur auctor ultricies turpis at egestas. Curabitur at risus magna. Proin id sollicitudin neque, condimentum tempor leo. Praesent et ullamcorper neque. Pellentesque in arcu eu sem sodales aliquet. Nulla ut accumsan risus. Sed erat justo, commodo ut tempus et, placerat sit amet augue. Quisque non enim in ante porttitor commodo tristique ut quam. Aenean fermentum, neque sit amet tincidunt ullamcorper, nisi turpis lacinia est, quis interdum tortor nisi ut mi.

            Nam eu felis a nibh iaculis tincidunt vitae sed justo. Nullam elementum ante eu arcu volutpat, vitae consequat libero vehicula. Phasellus vestibulum, lacus in tincidunt viverra, metus erat pretium enim, a fringilla purus sem ac quam. Etiam blandit libero ut nibh interdum, sit amet sodales velit porttitor. In scelerisque a ex a tristique. Integer pharetra mi nec urna iaculis varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque porta cursus augue sit amet euismod. In pretium dignissim ante molestie rhoncus. Suspendisse suscipit eleifend lectus, facilisis placerat est dignissim sit amet. Ut euismod neque at iaculis eleifend.
          </p>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Home;