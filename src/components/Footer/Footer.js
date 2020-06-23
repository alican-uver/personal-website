import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Row className="bg-light px-3 text-center align-items-center" >
      <Col>&copy; {new Date().getFullYear()} Tüm hakları saklıdır</Col>
      <Col className="text-center">
        <h4>E-Mail</h4>
        <p className="">can.uverr@gmail.com</p>
      </Col>
    </Row>
  );
};

export default Footer;
