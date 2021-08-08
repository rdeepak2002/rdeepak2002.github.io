import {HashRouter as Router, Redirect, Route, Switch,} from "react-router-dom";

import {useEffect, useState} from "react";
import {createView} from "service/ViewService";
import {k_device, readFromStorage, saveToStorage} from "utils/Serialize";

import CustomNavbar, {k_achievements_link, k_admin_link, k_home_link, k_project_link} from "components/navbar/"
import Home from "components/home";
import ProjectPage from "components/project";
import Admin from "components/admin";
import IDevice from "interfaces/Device";
import AchievementsPage from "./components/achievement";

const App = () => {
    const [screen, setScreen] = useState("App");
    const [device, setDevice] = useState<IDevice | undefined>(undefined);
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        setUser(undefined);
        setDevice(readFromStorage(k_device));

        createView().then(([response, error]) => {
            if (error) {
                console.error(error);
            } else if (response) {
                console.log(response);
                setDevice(response);
            } else {
                console.error("error tracking view");
            }
        });
    }, []);

    useEffect(() => {
        if (device) {
            saveToStorage(k_device, JSON.stringify(device));
        }
    }, [device]);

    return (
        <Router>
            <CustomNavbar screen={screen} setScreen={setScreen} user={user}/>

            <Switch>
                <Route path={k_home_link}>
                    <Home setScreen={setScreen}/>
                </Route>
                <Route path={k_admin_link}>
                    <Admin setScreen={setScreen}/>
                </Route>
                <Route path={k_project_link}>
                    <ProjectPage setScreen={setScreen}/>
                </Route>
                <Route path={k_achievements_link}>
                    <AchievementsPage setScreen={setScreen}/>
                </Route>
                <Redirect to={k_home_link}/>
            </Switch>
        </Router>
    );
}

export default App;
