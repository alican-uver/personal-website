import React from "react";
import { Row, Col } from "react-bootstrap";
import "./profileCard.scss";
import profileImg from "../../images/profile_images/profile_photo.jpeg";

const ProfileCard = () => {
  return (
    <Row className="card-container justify-content-center">
      <Col md={3} className="card-container-left">
        <img src={profileImg} alt="card-container-left-img" />
        <p className="card-container-left-name pt-3">
          Alican <br /> Uver
        </p>
        <p className="card-container-left-line"></p>
        <p className="card-container-left-job mt-2 text-capitalize">
          {" "}
          junior front end developer
        </p>
        <div className="social-media-container">
          <a className ="pr-4" href="https://www.instagram.com/alicanuverrr/?hl=tr">
            <i class="fab fa-instagram"></i>
          </a>
          <a className ="pr-4" href="https://www.linkedin.com/in/alicanuver/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a className ="pr-4" href="https://stackoverflow.com/users/12348877/canuver">
            <i class="fab fa-stack-overflow"></i>
          </a>
          <a href="https://github.com/alican-uver">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </Col>
      <Col md={3} className="card-container-right">
        <p className="card-container-right-title text-uppercase">merhaba</p>
      </Col>
    </Row>
  );
};

export default ProfileCard;
