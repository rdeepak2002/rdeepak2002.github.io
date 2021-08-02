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
        content={
          <>
            <p>
              The 26-minutes concise video demonstrates me (Deepak Ramalingam), a Senior at Monta Vista High School in Cupertino, California, teaching two weeks of Computer Science classes (Python 3 Programming language & Web Design) to a student body of 52 pupils at an Indian Village High School.
            </p>
          </>
        }
        tags={[]}
        showMoreHeight={showMoreHeight}
      />
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
    <Container className="card" style={{ width: "100%", padding: 0 }}>
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