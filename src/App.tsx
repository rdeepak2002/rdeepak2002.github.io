import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import { useState, useEffect } from "react";
import { createView } from "service/ViewService";
import { k_device, readFromStorage, saveToStorage } from "utils/Serialize";

import CustomNavbar, { k_admin_link, k_home_link, k_project_link } from "components/navbar/"
import Home from "components/home";
import ProjectPage from "components/project";
import Admin from "components/admin";
import IDevice from "interfaces/Device";

const App = () => {
  const [screen, setScreen] = useState("App");
  const [device, setDevice] = useState<IDevice | undefined>(undefined);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const url: string = String(window.location);
    const anchorPresent = url.lastIndexOf("#") !== url.lastIndexOf("#/");

    if (anchorPresent) {
      const anchor = url.substring(url.lastIndexOf("#") + 1);
      if (anchor && anchor !== "") {
        setTimeout(() => {
          const element = document.getElementById(anchor);
          if (element) element.scrollIntoView();
        }, 1000);
      }
    }
  }, []);

  useEffect(() => {
    setUser(undefined);
    setDevice(readFromStorage(k_device));

    createView().then(([response, error]) => {
      if (error) {
        console.error(error);
      }
      else if (response) {
        console.log(response);
        setDevice(response);
      }
      else {
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
      <CustomNavbar screen={screen} setScreen={setScreen} user={user} />

      <Switch>
        <Route path={k_home_link}>
          <Home setScreen={setScreen} />
        </Route>
        <Route path={k_admin_link}>
          <Admin setScreen={setScreen} />
        </Route>
        <Route path={k_project_link}>
          <ProjectPage setScreen={setScreen} />
        </Route>
        <Redirect to={k_home_link} />
      </Switch>
    </Router>
  );
}

export default App;
