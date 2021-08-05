import { k_project_link } from "components/navbar";
import { useState, useEffect } from "react";
import { Project, ProjectProps } from "components/home/Projects";
import { getBaseUrl, getSearchUrl } from "utils/UrlTools";
import qs from "qs";
import projectsList from "components/home/ProjectsList";

interface PojectPageProps {
  setScreen: Function
}

const ProjectPage = (props: PojectPageProps) => {
  const [project, setProject] = useState<ProjectProps>();
  const [goBack, setGoBack] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    props.setScreen(k_project_link);

    const parsedUrl: any = qs.parse(getSearchUrl(), { ignoreQueryPrefix: true });
    const projectId: string = parsedUrl.id;
    const project: ProjectProps = projectsList[projectId];

    setProject(project);

    let previousHost = String(document.referrer);
    let currentHost = String(window.location.host);

    try {
      previousHost = previousHost.substring(previousHost.indexOf("://")+3, previousHost.lastIndexOf("/"));
    }
    catch(err: any) {
      console.log('unknown referrer');
    }

    setGoBack(previousHost === currentHost);
    
    if (!project) {
      window.location.href = getBaseUrl();
    }
  });

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      {project &&
        <div style={{ maxWidth: "800px" }}>
          <Project showMore goHomeBtn goBackBtn={goBack} imageUrl={project.imageUrl} videoUrl={project.videoUrl} title={project.title} type={project.type} date={project.date} content={project.content} tags={project.tags} showMoreHeight={project.showMoreHeight} id={project.id} />
        </div>
      }
    </div>
  );
}

export default ProjectPage;