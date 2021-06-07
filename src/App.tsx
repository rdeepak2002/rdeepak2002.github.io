import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";

import CustomNavbar from "./components/navbar/"
import Home from "./components/home/";
import Admin from "./components/admin";

import { useState } from "react";

const App = () => {
    const [state, setState] = useState("");

    return (
        <Router>
            <div>
                <CustomNavbar />

                <Switch>
                    <Route exact path="/home">
                        <Home stateChanger={setState} />
                    </Route>
                    <Route exact path="/admin">
                        <Admin stateChanger={setState} />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
