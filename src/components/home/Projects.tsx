import { Container } from "react-bootstrap";

interface ProjectsProps {
  isMobileCss: boolean
  showAll: boolean
}

const Projects = (props: ProjectsProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridAutoRows: "minmax(100px, auto)",
        gridTemplateColumns: props.isMobileCss ? "repeat(1, 1fr)" : "repeat(2, 1fr)",
        columnGap: "1rem",
        rowGap: "1rem"
      }}
    >
      <Project
        title={"Teaching Computer Science At Indian Village"}
        type={"Volunteering"}
        date={"July of 2019"}
        content={
          <div>hello world</div>
        }
        tags={[]}
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
}

const Project = (props: ProjectProps) => {
  return (
    <Container className="card" style={{ width: "100%" }}>
      <h4 style={{ marginTop: "1rem" }}>{props.title}</h4>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <p style={{color: "#0078ff"}}>{props.type}</p> <p style={{marginLeft: 10, marginRight: 10, color: "rgba(50, 50, 50)"}}>/</p> <p style={{color: "rgba(50, 50, 50)"}}>{props.date}</p>
      </div>
      <div style={{marginBottom: "1.5rem"}}>
        {props.content}
      </div>
    </Container>
  );
}

export default Projects;