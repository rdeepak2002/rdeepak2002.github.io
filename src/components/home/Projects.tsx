import { k_project_link } from "components/navbar";
import { useEffect, useRef, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getBaseUrl } from "utils/UrlTools";
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
        rowGap: "1rem",
        width: "100%"
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
  goHomeBtn?: boolean
  goBackBtn?: boolean
}

export const Project = (props: ProjectProps) => {
  const sectionUrl = `${getBaseUrl()}#${k_project_link}?id=${props.id}`;

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
    <div id={props.id} className="project-card-container" >
      <div className="project-card">
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
        <div style={{paddingLeft: 10, paddingRight: 10}}>
          <CopyToClipboard text={sectionUrl}
            onCopy={() => {
              window.location.href = sectionUrl;
            }}
          >
            <h4 style={{ marginTop: "1rem", cursor: "pointer" }}>{props.title}</h4>
          </CopyToClipboard>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <p style={{ color: "#0078ff" }}>{props.type}</p> <p style={{ marginLeft: 10, marginRight: 10, color: "rgba(50, 50, 50)" }}>/</p> <p style={{ color: "rgba(50, 50, 50)" }}>{props.date}</p>
          </div>
          <div ref={contentRef} style={{ marginBottom: "1rem", overflow: "hidden", maxHeight: showMore ? "999999px" : showMoreHeight }}>
            <TagsSection marginBottom tags={props.tags} />
            {props.content}
          </div>
          {!props.showMore &&
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
          {
            (!props.goBackBtn && props.goHomeBtn) &&
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
              <Button onClick={()=>{
                window.location.href = getBaseUrl();
              }}>
                View All Projects
              </Button>
            </div>
          }
          {
            (props.goBackBtn) &&
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
              <Button onClick={()=>{
                window.history.go(-1);
              }}>
                View All Projects
              </Button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

const isOverflowActive = (event: any) => {
  return event.offsetHeight < event.scrollHeight || event.offsetWidth < event.scrollWidth;
}

export default Projects;