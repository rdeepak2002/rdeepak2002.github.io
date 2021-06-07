import {
    NavLink,
    useLocation
} from "react-router-dom";

import {
    Navbar,
    Nav
} from "react-bootstrap";

import { isBrowser } from "react-device-detect";

import { Link } from 'react-scroll';

import useScrollState from "./../../utils/ScrollState";
import useWindowDimensions from "./../../utils/WindowDimensions";

import logo from "./../../logo.svg";

const CustomNavbar = () => {
    const navbarHeight = 60;
    const footerNameHeight = 100;
    const location = useLocation();
    const useTransparentNavbar = useScrollState(useWindowDimensions().height - navbarHeight - footerNameHeight) === "topSection" && location.pathname === "/home" && isBrowser;

    const user = null;

    return (
        <Navbar className={(useTransparentNavbar ? "transparent-background" : "black-background")} fixed="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/home">
                <img alt="logo" className="navbar-logo" src={logo} width="30" height="30" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="about" activeClass="active" spy={true} smooth={true}>
                        About
                    </Link>

                    <Link className="nav-link" to="innovative_endeavors" activeClass="active" spy={true} smooth={true}>
                        Innovative Endeavors
                    </Link>

                    <Link className="nav-link" to="achievements" activeClass="active" spy={true} smooth={true}>
                        Achievements
                    </Link>

                    <Link className="nav-link" to="contact" activeClass="active" spy={true} smooth={true}>
                        Contact
                    </Link>


                    {user && <NavLink to={"/admin"} className="nav-link" activeClassName="active">Admin</NavLink>}
                </Nav>
                {user && <a href="/home" style={{ color: "white", cursor: "pointer" }} className="nav-link">Sign Out</a>}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;