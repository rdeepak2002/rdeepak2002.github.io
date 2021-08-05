import { k_home_link, k_project_link } from "components/navbar";
import { useEffect, useRef, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import projectsList, { showMoreHeight } from "./ProjectsList";
import TagsSection from "./TagsSection";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface ProjectsProps {
  isMobileCss: boolean
  showAll: boolean
}

const Projects = (props: ProjectsProps) => {
  const [projects, setProjects] = useState<Array<ProjectProps>>([]);

  useEffect(() => {
    setProjects(Object.values(projectsList));
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
    </div>
  );
}

export interface ProjectProps {
  imageUrl?: string
  videoUrl?: string
  title: string
  type: string
  date: string
  content: any
  tags: Array<string>
  showMoreHeight: number | string
  id: string
  showMore?: boolean
}

export const Project = (props: ProjectProps) => {
  const getUrl: any = window.location;
  const baseUrl: string = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
  const sectionUrl = `${baseUrl}#${k_project_link}?id=${props.id}`;

  const contentRef: any = useRef();
  const showMoreHeight = props.showMoreHeight;
  const videoId = props.videoUrl ? props.videoUrl.substring(props.videoUrl.lastIndexOf("embed/") + "embed/".length) : "YGE5euSZnbI";

  const [showMore, setShowMore] = useState<boolean>(props.showMore ? true : false);
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
        <div className="project-img-container" style={{ height: "306.56px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
        <CopyToClipboard text={sectionUrl}>
          <h4 style={{ marginTop: "1rem" }}>{props.title}</h4>
        </CopyToClipboard>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <p style={{ color: "#0078ff" }}>{props.type}</p> <p style={{ marginLeft: 10, marginRight: 10, color: "rgba(50, 50, 50)" }}>/</p> <p style={{ color: "rgba(50, 50, 50)" }}>{props.date}</p>
        </div>
        <div ref={contentRef} style={{ marginBottom: "1rem", paddingLeft: 15, paddingRight: 15, overflow: "hidden", maxHeight: showMore ? "999999px" : showMoreHeight }}>
          <TagsSection marginBottom tags={props.tags} />
          {props.content}
        </div>
        { !props.showMore && 
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
        }
      </div>
    </Container>
  );
}

const isOverflowActive = (event: any) => {
  return event.offsetHeight < event.scrollHeight || event.offsetWidth < event.scrollWidth;
}

export default Projects;