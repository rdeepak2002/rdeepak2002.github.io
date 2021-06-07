import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    NavLink
} from "react-router-dom";

import { 
    Navbar,
    Nav
} from "react-bootstrap";

import Home from "./components/home/";
import Admin from "./components/admin";

function App() {
    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Deepak Ramalingam</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to={"/home"} className="nav-link" activeClassName="active">Home</NavLink>
                            <NavLink to={"/admin"} className="nav-link" activeClassName="active">Admin</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/admin">
                        <Admin />
                    </Route>
                    <Redirect to='/home' />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
