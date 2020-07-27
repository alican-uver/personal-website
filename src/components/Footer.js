import React from "react";
import { Row, Col } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <Row className="text-center align-items-center no-gutters">
      <Col xs={12} sm={6} className="order-2 order-sm-1">&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</Col>
      <Col xs={12} sm={6} className="py-2 order-1 order-sm-2">
        <span className="lead text-primary">Email: </span>
        <span className="m-0 lead">can.uverr@gmail.com</span>
        <SocialMedia />
      </Col>
    </Row>
  );
};

export default Footer;
