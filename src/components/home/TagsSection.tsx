import projectTags from "./ProjectTags";

interface TagsSectionProps {
  tags: Array<string>;
  marginTop?: boolean;
  marginBottom?: boolean;
}

const TagsSection = (props: TagsSectionProps) => {
  return (
    <>
      {props.tags.length > 0 &&
        <div style={{ display: "flex", alignItems: "center", marginBottom: props.marginBottom ? "1rem" : "0rem", marginTop: props.marginTop ? "1rem" : "0rem", flexWrap: "wrap" }}>
          {
            props.tags.map((tagStr, index) => {
              const tagObj = projectTags[tagStr];

              if (tagObj) {
                return (
                  <div key={index} style={{ backgroundColor: tagObj.color, borderRadius: 5, padding: 2, paddingLeft: 4, paddingRight: 4, display: "flex", alignItems: "center", margin: 2 }}>
                    <a rel="noreferrer" target="_blank" href={tagObj.link} style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>{tagObj.name}</a>
                  </div>
                );
              }
              else {
                console.error(`tag '${tagStr}' not found`);
                return <></>;
              }
            })
          }
        </div>
      }
    </>
  );
}

export default TagsSection;