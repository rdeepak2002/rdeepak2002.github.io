import { useEffect, useRef, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";

interface ProjectsProps {
  isMobileCss: boolean
  showAll: boolean
}

const Projects = (props: ProjectsProps) => {
  const showMoreHeight = "100px";

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
      <Project
        videoUrl={"https://www.youtube.com/embed/53qEBPBruRk"}
        title={"Teaching Computer Science At Indian Village"}
        type={"Volunteering"}
        date={"July of 2019"}
        id={"teaching_cs"}
        content={
          <>
            <p>
              The 26-minutes concise video demonstrates me (Deepak Ramalingam), a Senior at Monta Vista High School in Cupertino, California, teaching two weeks of Computer Science classes (Python 3 Programming language & Web Design) to a student body of 52 pupils at an Indian Village High School.
            </p>
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
          </>
        }
        tags={[]}
        showMoreHeight={showMoreHeight}
      />
      
      <Project
        videoUrl={"https://www.youtube.com/embed/sywBQSnFeOw"}
        title={"The Right Price"}
        type={"Web App and iPhone App"}
        date={"April of 2019"}
        id={"the_right_price"}
        content={
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
          </>
        }
        tags={[]}
        showMoreHeight={showMoreHeight}
      />

      <h1>TODO: FINISH THE REST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FRUIT VISION (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: DEEP PLAYLIST (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: FORD CONNECTED (dont forget to add the id to the link in navbar.ts)</h1>
      <h1>TODO: ADD COLOR CODED TAGS</h1>
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

  const [showMore, setShowMore] = useState<boolean>(false);
  const [overflowActive, setOverflowActive] = useState<boolean>(false);

  useEffect(() => {
    if (isOverflowActive(contentRef.current)) {
      setOverflowActive(true);
      return;
    }

    setOverflowActive(false);
  }, [isOverflowActive]);

  return (
    <Container className="card" style={{ width: "100%", padding: 0 }} id={props.id}>
      {props.imageUrl &&
        <Image src={props.imageUrl} fluid />
      }
      {props.videoUrl &&
        <iframe width="100%" height="300" src={props.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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

function isOverflowActive(event: any) {
  return event.offsetHeight < event.scrollHeight || event.offsetWidth < event.scrollWidth;
}

export default Projects;