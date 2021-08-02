interface ProjectsProps {
  isMobileCss: boolean
  showAll: boolean
}

const Projects = (props: ProjectsProps) => {
  return (
    <div style={{ display: "grid", gridAutoRows: "minmax(100px, auto)", gridTemplateColumns: props.isMobileCss ? "repeat(1, 1fr)" : "repeat(2, 1fr)" }}>
      <p>
        asdf
      </p>
      <p>
        asdf
      </p>      <p>
        asdf
      </p>      <p>
        asdf
      </p>      <p>
        asdf
      </p>

    </div>
  );
}

interface ProjectProps {

}

const Project = (props: ProjectProps) => {

}

export default Projects;