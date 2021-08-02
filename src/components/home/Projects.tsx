import { useState } from "react";
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
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
          </>
        }
        tags={[]}
        showMoreHeight={showMoreHeight}
      />

      <Container style={{ backgroundColor: "red" }}>
        <h5>Hello World</h5>
      </Container>
      <Container style={{ backgroundColor: "blue" }}>
        <h5>Hello World</h5>
      </Container>
      <Container style={{ backgroundColor: "green" }}>
        <h5>Hello World</h5>
      </Container>
      <Container style={{ backgroundColor: "pink" }}>
        <h5>Hello World</h5>
      </Container>
      <Container style={{ backgroundColor: "purple" }}>
        <h5>Hello World</h5>
      </Container>

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
  const showMoreHeight = props.showMoreHeight;
  const [showMore, setShowMore] = useState<boolean>(false);

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
        <div style={{ marginBottom: "1rem", paddingLeft: 15, paddingRight: 15, overflow: "hidden", maxHeight: showMore ? "999999px" : showMoreHeight }}>
          {props.content}
        </div>
        <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
        </div>
      </div>
    </Container>
  );
}

export default Projects;