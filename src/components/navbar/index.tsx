import {
    NavLink,
    useLocation
} from "react-router-dom";

import {
    Navbar,
    Nav
} from "react-bootstrap";

import { isBrowser } from "react-device-detect";

import useScrollState from "./../../utils/ScrollState";
import useWindowDimensions from "./../../utils/WindowDimensions";

import logo from "./../../logo.svg";

const CustomNavbar = () => {
    const location = useLocation();
    const useTransparentNavbar = useScrollState(useWindowDimensions().height - 60) === "topSection" && location.pathname === "/home" && isBrowser;

    return (
        <Navbar className={(useTransparentNavbar ? "transparent-background" : "black-background")} fixed="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/home">
                <img alt="logo" className="navbar-logo" src={logo} width="30" height="30" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to={"/home"} className="nav-link" activeClassName="active">Home</NavLink>
                    <NavLink to={"/admin"} className="nav-link" activeClassName="active">Admin</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;