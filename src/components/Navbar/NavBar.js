import React from "react";
import "./navbar.scss";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3 sticky-top">
      <Navbar.Brand className = "d-flex align-items-center" href="#home">
        <span>ALİCAN UVER</span>
        <span> / </span>
        <span>Junior Front End Developer</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="text-dark pr-4" as= {Link} to="/">Hakkımda</Nav.Link>
          <Nav.Link className="text-dark pr-4" as= {Link} to="/cv">Özgeçmiş</Nav.Link>
          <Nav.Link className="text-dark pr-4" as= {Link} to="/projects">Projelerim</Nav.Link>
          <Nav.Link className="text-dark" as= {Link} to="/contact">İletişim</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
