import {Chrono} from "react-chrono";
import {Button, Image} from "react-bootstrap";
import achievementsList, {AchievementList} from "./AchievementsList";
import {k_achievements_link} from "../navbar";
import {useHistory} from "react-router-dom";

export interface AchievementProps {
    time: string;
    image?: string;
    title: string;
    content?: JSX.Element;
}

let achievementsListShort: AchievementList = {};
let items: any = [];
let index = 0;
let achievementsListCap = 0;

// get the number of achievements until middle school
for (const achievementKey in achievementsList) {
    const achievement = achievementsList[achievementKey];
    if (achievement.time === "Grade 8") {
        break;
    }
    achievementsListCap++;
}

// only use achievements until middle school
for (const achievementKey in achievementsList) {
    if (index < achievementsListCap) {
        const achievement = achievementsList[achievementKey];
        achievementsListShort[achievementKey] = achievement;
        items.push({title: achievement.time});
    }
    index++;
}

const AchievementsSection = () => {
    const history = useHistory();

    return (
        <div style={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <Chrono
                scrollable={{scrollbar: true}}
                slideShow={false}
                mode={"VERTICAL"}
                disableNavOnKey
                hideControls={true}
                useReadMore={false}
                allowDynamicUpdate={false}
                items={items}
            >
                {
                    Object.values(achievementsListShort).map((item, index) => {
                        return <Achievement key={index} time={item.time} image={item.image} title={item.title}
                                            content={item.content}/>
                    })
                }
            </Chrono>
            <Button onClick={() => {
                history.push(k_achievements_link);
            }}>
                View All Achievements
            </Button>
        </div>
    );
}

export const Achievement = (props: AchievementProps) => {
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