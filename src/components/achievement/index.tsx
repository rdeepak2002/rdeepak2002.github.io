import {k_achievements_link, k_home_link} from "components/navbar";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Achievement} from "../home/AchievementsSection";
import {Chrono} from "react-chrono";
import {Button} from "react-bootstrap";
import achievementsList from "../home/AchievementsList";

interface AchievementsPageProps {
    setScreen: Function;
}

let items: any = [];

for (const achievementKey in achievementsList) {
    const achievement = achievementsList[achievementKey];
    items.push({title: achievement.time});
}

const AchievementsPage = (props: AchievementsPageProps) => {
    const history = useHistory();

    useEffect(() => {
        props.setScreen(k_achievements_link);
    }, [props]);

    return (
        <div style={{
            marginTop: "1rem",
            marginBottom: "1rem",
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
                    Object.values(achievementsList).map((item, index) => {
                        return <Achievement key={index} time={item.time} image={item.image} title={item.title}
                                            content={item.content}/>
                    })
                }
            </Chrono>

            <Button onClick={() => {
                history.push(k_home_link);
            }}>
                Go Home
            </Button>
        </div>
    );
}

export default AchievementsPage;