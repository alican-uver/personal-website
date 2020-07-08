import React from "react";
import { Row, Col } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <Row className=" px-3 text-center align-items-center no-gutters">
      <Col>&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</Col>
      <Col>
        <span className="lead text-primary">Email: </span>
        <span className="m-0 lead">can.uverr@gmail.com</span>
        <SocialMedia />
      </Col>
    </Row>
  );
};

export default Footer;
