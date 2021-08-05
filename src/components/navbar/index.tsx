import {
  NavLink
} from "react-router-dom";

import {
  Navbar,
  Nav
} from "react-bootstrap";

import { isBrowser } from "react-device-detect";
import { Link } from "react-scroll";

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

  const blacklist = [k_admin_link, k_project_link];

  if(blacklist.includes(props.screen)) {
    return <></>;
  }

  return (
    <Navbar className={(useTransparentNavbar ? "transparent-background" : "black-background-transparent")} fixed="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
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

          {props.user && <NavLink to={k_admin_link} className="nav-link" activeClassName="active">Admin</NavLink>}
        </Nav>
        {props.user && <a href={k_home_link} style={{ color: "white", cursor: "pointer" }} className="nav-link">Sign Out</a>}
      </Navbar.Collapse>
    </Navbar>
  );
}

export const k_home_link = "/home";
export const k_project_link = "/project";
export const k_admin_link = "/admin";

export const k_about_href = "about";
export const k_work_experience_href = "work_experience";
export const k_innovative_endeavors_href = "projects";
export const k_achievements_href = "achievements";

export const k_teaching_cs_indian_village_href = "teaching_cs";
export const k_the_right_price_href = "the_right_price";
export const k_hapi_app_href = "hapi_app";
export const k_spanish_hero_href = "spanish_hero";
export const k_tort_cam_href = "tort_cam";
export const k_smart_room_href = "smart_room";
export const k_augnav_href = "augnav";
export const k_club_websites_href = "club_websites";
export const k_more_projects_href = "more_projects";
export const k_ford_connected_href = "ford_connected";
export const k_deep_playlist_href = "deep_playlist";
export const k_fruit_vision_href = "fruit_vision";
export const k_personal_website_href = "personal_website";

export default CustomNavbar;