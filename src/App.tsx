import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
} from "react-router-dom";

import Home from "./components/Home";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Redirect to='/home'/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
