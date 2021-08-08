import {Chrono} from "react-chrono";
import {isMobile} from "react-device-detect";
import {Image} from "react-bootstrap";
import achievementsList from "./AchievementsList";

export interface AchievementProps {
    time: string;
    image?: string;
    title: string;
    content?: JSX.Element;
}

let items: any = [];

for (const achievementKey in achievementsList) {
    const achievement = achievementsList[achievementKey];
    items.push({title: achievement.time});
}

const AchievementsSection = () => {
    return (
        <div style={{height: isMobile ? "auto" : "60vh"}}>
            <Chrono
                scrollable={{scrollbar: true}}
                slideShow={true}
                mode={isMobile ? "HORIZONTAL" : "VERTICAL"}
                disableNavOnKey
                hideControls={!isMobile}
                useReadMore={false}
                allowDynamicUpdate={false}
                items={items}
            >
                {
                    Object.values(achievementsList).map((item, index) => {
                        return <Achievement key={index} time={item.time} image={item.image} title={item.title}
                                            content={item.content}/>
                    })
                }
            </Chrono>
        </div>
    );
}

const Achievement = (props: AchievementProps) => {
    return (
        <div className="chrono-custom-element" style={{width: "100%"}}>
            <h4>{props.title}</h4>
            {props.content &&
            props.content
            }
            {props.image &&
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Image src={props.image} fluid style={{maxWidth: "100%", width: "500px"}} loading={"lazy"}/>
            </div>
            }
        </div>
    );
}

export default AchievementsSection;