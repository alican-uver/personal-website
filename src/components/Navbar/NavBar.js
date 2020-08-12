import React, { useState } from "react";
import "./navbar.scss";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} bg="light" expand="lg" className="py-3 sticky-top">
      <Navbar.Brand>
        <Link to="/">
          <span>ALİCAN UVER</span>
          <span> / </span>
          <span>Junior Front End Developer</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={() => setExpanded(false)} className="text-dark pr-4" as={Link} to="/">Hakkımda</Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} className="text-dark pr-4" as={Link} to="/projects">Projelerim</Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} className="text-dark" as={Link} to="/contact">İletişim</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
