import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

import { useState, useEffect } from "react";

import { createView } from "service/ViewService";

import CustomNavbar from "components/navbar/"
import Home from "components/home/";
import Admin from "components/admin";
import IDevice from "interfaces/Device";

const App = () => {
  const [screen, setScreen] = useState("App");
  const [device, setDevice] = useState<IDevice | undefined>(undefined);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(undefined);
    setDevice(undefined);
    createView().then(([response, error]) => {
      if (error) {
        console.error(error);
      }
      else if (response) {
        console.log('setting device', response);
        setDevice(response);
      }
      else {
        console.error("error tracking view");
      }
    });
  }, []);

  return (
    <Router>
      <CustomNavbar screen={screen} setScreen={setScreen} user={user} />

      <Switch>
        <Route exact path="/home">
          <Home setScreen={setScreen} />
        </Route>
        <Route exact path="/admin">
          <Admin setScreen={setScreen} />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
