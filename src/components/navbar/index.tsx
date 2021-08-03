import {
  NavLink
} from "react-router-dom";

import {
  Navbar,
  Nav
} from "react-bootstrap";

import { isBrowser } from "react-device-detect";
import { Link } from 'react-scroll';

import useScrollState from "utils/ScrollState";
import useWindowDimensions from "utils/WindowDimensions";

import logo from "resources/logo.svg";

interface CustomNavbarProps {
  screen: string,
  setScreen: Function,
  user: any
}

const CustomNavbar = (props: CustomNavbarProps) => {
  const navbarHeight = 60;
  const footerNameHeight = 100;
  const useTransparentNavbar = useScrollState(useWindowDimensions().height - navbarHeight - footerNameHeight) === "topSection" && props.screen === "home" && isBrowser;

  return (
    <Navbar className={(useTransparentNavbar ? "transparent-background" : "black-background-transparent")} fixed="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/home">
        <img alt="logo" className="navbar-logo" src={logo} width="30" height="30" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to={k_about_href} activeClass="active" spy={true} smooth={true}>
            About
          </Link>

          <Link className="nav-link" to={k_work_experience_href} activeClass="active" spy={true} smooth={true}>
            Work Experience
          </Link>

          <Link className="nav-link" to={k_innovative_endeavors_href} activeClass="active" spy={true} smooth={true}>
            Innovative Endeavors
          </Link>

          <Link className="nav-link" to={k_achievements_href} activeClass="active" spy={true} smooth={true}>
            Achievements
          </Link>

          <Link to={k_teaching_cs_indian_village_href}></Link>
          <Link to={k_the_right_price_href}></Link>

          {props.user && <NavLink to={k_admin_link} className="nav-link" activeClassName="active">Admin</NavLink>}
        </Nav>
        {props.user && <a href={k_home_link} style={{ color: "white", cursor: "pointer" }} className="nav-link">Sign Out</a>}
      </Navbar.Collapse>
    </Navbar>
  );
}

export const k_home_link = "/home";
export const k_admin_link = "/admin";

export const k_about_href = "about";
export const k_work_experience_href = "work_experience";
export const k_innovative_endeavors_href = "projects";
export const k_achievements_href = "achievements";

export const k_teaching_cs_indian_village_href = "teaching_cs";
export const k_the_right_price_href = "the_right_price";

export default CustomNavbar;