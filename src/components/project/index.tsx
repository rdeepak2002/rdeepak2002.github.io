import { k_project_link } from "components/navbar";
import { useState, useEffect } from "react";
import { Project, ProjectProps } from "components/home/Projects";
import qs from "qs";
import projectsList from "components/home/ProjectsList";
import { getBaseUrl } from "utils/UrlTools";

interface PojectPageProps {
  setScreen: Function
}

const ProjectPage = (props: PojectPageProps) => {
  const [project, setProject] = useState<ProjectProps>();

  useEffect(() => {
    props.setScreen(k_project_link);
    const projectId: string = String(Object.values(qs.parse(window.location.href, { ignoreQueryPrefix: true }))[0]);
    const project: ProjectProps = projectsList[projectId];

    setProject(project);

    if(!project) {
      window.location.href = getBaseUrl();
    }
  });

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem"}}>
      { project && 
        <div style={{maxWidth: "800px"}}>
          <Project showMore imageUrl={project.imageUrl} videoUrl={project.videoUrl} title={project.title} type={project.type} date={project.date} content={project.content} tags={project.tags} showMoreHeight={project.showMoreHeight} id={project.id} />
        </div>
      }
    </div>
  );
}

export default ProjectPage;