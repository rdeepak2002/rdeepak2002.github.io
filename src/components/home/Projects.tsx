import { k_augnav_href, k_club_websites_hef, k_hapi_app_href, k_more_projects, k_spanish_hero_href, k_teaching_cs_indian_village_href, k_the_right_price_href, k_tort_cam_href } from "components/navbar";
import { useEffect, useRef, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface ProjectsProps {
  isMobileCss: boolean
  showAll: boolean
}

const Projects = (props: ProjectsProps) => {
  const showMoreHeight = "100px";

  const [projects, setProjects] = useState<Array<ProjectProps>>([]);

  useEffect(() => {
    setProjects([
      {
        videoUrl: "https://www.youtube.com/embed/53qEBPBruRk",
        title: "Teaching Computer Science At Indian Village",
        type: "Volunteering",
        date: "July of 2019",
        content:
          <>
            <p>The 26-minutes concise video demonstrates me (Deepak Ramalingam), a Senior at Monta Vista High School in Cupertino, California, teaching two weeks of Computer Science classes (Python 3 Programming language & Web Design) to a student body of 52 pupils at an Indian Village High School.</p>
            <p><strong>Date of Internship: </strong>June 23 - July 8, 2019</p>
            <p><strong>Venue: </strong>Sankaramangalam Public High School & Junior College, Kaviyoor, Kerala, India</p>
            <p><strong>Note:</strong></p>
            <ul>
              <li>Due to the lack of air-conditioning / fans in the sweltering temperature and absence of sound-proof walls, external sounds and noises could not be eliminated because of the need for open doors and windows for aeration.</li>
              <li>No computers or internet were available for student usage. Thus, only the theory of computer science was taught to the students.</li>
            </ul>
            <p><strong>Teaching Medium:</strong></p>
            <ul>
              <li>Personally Prepared Power Points</li>
              <li>Digital Whiteboard</li>
              <li>Projector</li>
            </ul>
            <p>It was an interactive teaching session with doubts and questions being asked and answered from both sides. An exam was conducted after the teaching session in order to test the understanding of the material - the students did well.</p>
          </>,
        tags: [],
        showMoreHeight: showMoreHeight,
        id: k_teaching_cs_indian_village_href
      },
      {
        videoUrl: "https://www.youtube.com/embed/sywBQSnFeOw",
        title: "The Right Price",
        type: "Web App and iPhone App",
        date: "April of 2019",
        content:
          <>
            <p>Devpost Link: <a href="https://devpost.com/software/the-right-price-t4kipb">https://devpost.com/software/the-right-price-t4kipb</a></p>
            <p>“The Right Price” - An Effective Application to Help Small Businesses to Survive & Shine in a Competitive Economy.</p>
            <ul>
              <li>Developed Web Application & iPhone Application - “The Right Price.”</li>
              <li>Won 1st Place - Cupertino Hacks Hackathon.</li>
              <li>Presented on Live TV to Mayor of Cupertino, Mr. Steven Scharf - Cupertino City Council.</li>
              <li><strong>Inspired:</strong> After Observing How Online Shopping Services Mostly Target Large Retailers Causing Local Businesses in Small Towns to Lose Out on Customers.</li>
              <li><strong>Utilized:</strong> Augmented Reality (AR) on a Smartphone & Crowdsourcing to Guide The User to Nearby Locations Where Certain Products Are Sold.</li>
              <li><strong>Functions:</strong></li>
              <ol>
                <li>Helps local stores gain popularity by assisting customers in purchasing products of better quality at nearby locations.</li>
                <li>Helps local businesses to gain popularity by assisting users to find cheap, high-quality products nearby through the recommendations of their peers.</li>
                <li>Creates Virtual AR Labels of The Products in The Viewing Direction Relative to The User’s Current Location by Utilizing The Information Obtained From Other Users About Similar Products.</li>
              </ol>
              <li><strong>Advantages:</strong></li>
              <ol>
                <li>Serves as a Virtual Compass for The User And Makes The Shopping Experience Entertaining & Adventurous.</li>
                <li>Motivates Users to Purchase The Products From Local Stores, Instead of Buying The Products Online From Large Retailers.</li>
              </ol>
            </ul>
          </>,
        tags: [],
        showMoreHeight: showMoreHeight,
        id: k_the_right_price_href
      },
      {
        videoUrl: "https://www.youtube.com/embed/cDajvueR5Wk",
        title: "Hapi App",
        type: "Web App and Phone App",
        date: "July of 2018",
        content:
          <>
            <p>Website for the Application: <a href="http://www.hapidiary.com/">http://www.hapidiary.com</a></p>
            <p>Mentioned in News: <a href="https://patch.com/california/cupertino/cupertino-winners-teen-app-design-challenge-announced">https://patch.com/california/cupertino/cupertino-winners-teen-app-design-challenge-announced</a></p>
            <p>“Hapi App” - An Engaging Medium to Help People Cope With Psychological Depression, a Social Injustice That Affects People in All Walks of Life.</p>
            <ul>
              <li>Developed Web Application & Mobile Phone Application - “Hapi App.”</li>
              <li>Won 1st Place - Teen App Challenge Competition. Won 4th Place for App and Video - Congressional App Challenge National Competition.</li>
              <li>Featured in an Article on Patch News website.</li>
              <li>Interviewed by Mr. Matt Lorenzo, Teen Services Librarian - Video Recording of my Application Played Daily in the Cupertino Library TV.</li>
              <li><strong>Inspired:</strong> When Students Became Excessively Stressed About Their Academic Performance Due to The Competitive Environment of my High School.</li>
              <li><strong>Utilized:</strong> Machine Learning to Provide Users With an Automated Analysis to Visualize Their Feelings About Certain People, Places, or Things Mentioned in the Diary Entry.</li>
              <li><strong>Functions:</strong></li>
              <ol>
                <li>Serves as a Smart Diary to Help People Cope With Anxiety & Depression.</li>
                <li>Recommends a List of Possible Activities to Help Users Strengthen Relationships With People Mentioned in The Entries of The User’s Diary.</li>
                <li>Provides Videos Related to the Entries in the User’s Diary to Help Uplift The User’s Spirit.</li>
              </ol>
            </ul>
          </>,
        tags: [],
        showMoreHeight: showMoreHeight,
        id: k_hapi_app_href
      },
      {
        videoUrl: "https://www.youtube.com/embed/g88C3LuczK4",
        title: "\"Spanish Hero\" Educational Game",
        type: "Educational Software",
        date: "March of 2017",
        content:
          <>
            <p>Website to Download Application: <a href="https://spanishheromv.web.app/">https://spanishheromv.web.app</a></p>
            <p>Link to Source Code of the Software: <a href="https://github.com/rdeepak2002/SpanishHero/">https://github.com/rdeepak2002/SpanishHero/</a></p>
            <p>“Spanish Hero” - An Entertaining Medium to Practice Conjugating Verbs Into Various Spanish Grammar Tenses in a Fun & Easy Way.</p>
            <ul>
              <li>Developed Spanish Video Game - “Spanish Hero.”</li>
              <li><strong>Inspired:</strong> When I became flustered with the numerous Spanish grammar tenses and verb conjugations that I had to learn and remember in my Spanish 2 class.</li>
              <li><strong>Utilized:</strong> Advanced computer programming concepts such as Object-oriented programming to organize the structure of the game's logic.</li>
              <li><strong>Functions:</strong></li>
              <ol>
                <li>Helps All Students Learn Spanish Grammar in an Entertaining Way.</li>
                <li>Delightful Way to Teach Spanish Concepts Like Verb Conjugations to Students in Poor Communities Who Lack Educational Resources Such as Teachers and Textbooks to Practice Spanish Grammar Exercises.</li>
              </ol>
              <li><strong>Advantages:</strong></li>
              <ol>
                <li>Allows Other Software Developers to Add More Features to The Video Game.</li>
                <li>Video Game & Code is Made Available to The General Public - Allows Public to Learn & Improve Spanish grammar in a delightful manner.</li>
              </ol>
              <li><strong>Recognition:</strong> Received from Spanish Teacher and Mentor, Señora Griffin, that the software is very ‘advanced'.</li>
            </ul>
          </>,
        tags: [],
        showMoreHeight: showMoreHeight,
        id: k_spanish_hero_href
      },
      {
        videoUrl: "https://www.youtube.com/embed/Skl5BdvIy7U",
        title: "Tort Camera & Food Dispenser",
        type: "Hobbies",
        date: "November of 2019",
        content:
          <>

          </>,
        tags: [],
        showMoreHeight: showMoreHeight,
        id: k_tort_cam_href
      },
      {
        videoUrl: "https://www.youtube.com/embed/VwFOZGbdJio",
        title: "SmartRoom",
        type: "Web App",
        date: "May of 2020",
        content:
          <>

          </>,
        tags: [],
        showMoreHeight: showMoreHeight,
        id: k_tort_cam_href
      },
      {
        videoUrl: "https://www.youtube.com/embed/8opbh55IOg4",
        title: "AugNav",
        type: "Web App and Phone App",
        date: "March of 2021",
        content:
          <>

          </>,
        tags: [],
        showMoreHeight: showMoreHeight,
        id: k_augnav_href
      },
      {
        imageUrl: "https://theartsdevelopmentcompany.org.uk/wp-content/uploads/2019/02/Website-Building-Landscape-1280x640.jpg",
        title: "Websites For Clubs",
        type: "Web Apps",
        date: "August of 2019",
        content:
          <>

          </>,
        tags: [],
        showMoreHeight: showMoreHeight,
        id: k_club_websites_hef
      },
      {
        imageUrl: "https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg",
        title: "More Projects",
        type: "Hobbies",
        date: "Current",
        content:
          <>

          </>,
        tags: [],
        showMoreHeight: showMoreHeight,
        id: k_more_projects
      },
    ]);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridAutoRows: `minmax(${showMoreHeight}, auto)`,
        gridTemplateColumns: props.isMobileCss ? "repeat(1, 1fr)" : "repeat(2, 1fr)",
        columnGap: "1rem",
        rowGap: "1rem"
      }}
    >
      {
        projects.map((item, index) => {
          return <Project key={index} imageUrl={item.imageUrl} videoUrl={item.videoUrl} title={item.title} type={item.type} date={item.date} content={item.content} tags={item.tags} showMoreHeight={item.showMoreHeight} id={item.id} />
        })
      }

      {/* <h1>TODO: FINISH THE REST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FRUIT VISION (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: DEEP PLAYLIST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FORD CONNECTED (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: THIS WEBSITE (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: ADD COLOR CODED TAGS (below the date section)</h1> */}
      {/* <h1>TODO: FINISH THE REST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FRUIT VISION (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: DEEP PLAYLIST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FORD CONNECTED (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: THIS WEBSITE (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: ADD COLOR CODED TAGS (below the date section)</h1> */}      {/* <h1>TODO: FINISH THE REST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FRUIT VISION (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: DEEP PLAYLIST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FORD CONNECTED (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: THIS WEBSITE (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: ADD COLOR CODED TAGS (below the date section)</h1> */}      {/* <h1>TODO: FINISH THE REST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FRUIT VISION (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: DEEP PLAYLIST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FORD CONNECTED (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: THIS WEBSITE (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: ADD COLOR CODED TAGS (below the date section)</h1> */}      {/* <h1>TODO: FINISH THE REST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FRUIT VISION (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: DEEP PLAYLIST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FORD CONNECTED (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: THIS WEBSITE (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: ADD COLOR CODED TAGS (below the date section)</h1> */}      {/* <h1>TODO: FINISH THE REST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FRUIT VISION (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: DEEP PLAYLIST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FORD CONNECTED (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: THIS WEBSITE (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: ADD COLOR CODED TAGS (below the date section)</h1> */}
    </div>
  );
}

interface ProjectProps {
  imageUrl?: string
  videoUrl?: string
  title: string
  type: string
  date: string
  content: any
  tags: Array<string>
  showMoreHeight: number | string
  id: string
}

const Project = (props: ProjectProps) => {
  const contentRef: any = useRef();
  const showMoreHeight = props.showMoreHeight;
  const videoId = props.videoUrl ? props.videoUrl.substring(props.videoUrl.lastIndexOf("embed/") + "embed/".length) : "YGE5euSZnbI";

  const [showMore, setShowMore] = useState<boolean>(false);
  const [overflowActive, setOverflowActive] = useState<boolean>(false);


  useEffect(() => {
    if (isOverflowActive(contentRef.current)) {
      setOverflowActive(true);
    }
    else {
      setOverflowActive(false);
    }
  }, []);

  return (
    <Container className="card" style={{ width: "100%", padding: 0 }} id={props.id}>
      {props.imageUrl &&
      <div className="project-img-container" style={{height: "306.56px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Image className="project-img" src={props.imageUrl} fluid />
      </div>
      }
      {props.videoUrl &&
        <LiteYouTubeEmbed
          id={videoId}
          title=""
        />
      }
      <div style={{ paddingLeft: 15, paddingRight: 15 }}>
        <h4 style={{ marginTop: "1rem" }}>{props.title}</h4>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <p style={{ color: "#0078ff" }}>{props.type}</p> <p style={{ marginLeft: 10, marginRight: 10, color: "rgba(50, 50, 50)" }}>/</p> <p style={{ color: "rgba(50, 50, 50)" }}>{props.date}</p>
        </div>
        <div ref={contentRef} style={{ marginBottom: "1rem", paddingLeft: 15, paddingRight: 15, overflow: "hidden", maxHeight: showMore ? "999999px" : showMoreHeight }}>
          {props.content}
        </div>
        <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {overflowActive &&
            <>
              {
                showMore
                  ?
                  (
                    <Button
                      onClick={() => {
                        setShowMore(false);
                      }}
                    >
                      Show Less
                    </Button>
                  )
                  :
                  (
                    <Button
                      onClick={() => {
                        setShowMore(true);
                      }}
                    >
                      Show More
                    </Button>
                  )
              }
            </>
          }
        </div>
      </div>
    </Container>
  );
}

const isOverflowActive = (event: any) => {
  return event.offsetHeight < event.scrollHeight || event.offsetWidth < event.scrollWidth;
}

export default Projects;