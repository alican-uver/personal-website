import React from "react";
import { Row, Col } from "react-bootstrap";
import "./profileCard.scss";
import profileImg from "../../images/profile_images/profile_photo.jpeg";
import Button from "../Button";

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
          <a
            className="pr-4"
            href="https://www.instagram.com/alicanuverrr/?hl=tr"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a className="pr-4" href="https://www.linkedin.com/in/alicanuver/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="pr-4"
            href="https://stackoverflow.com/users/12348877/canuver"
          >
            <i className="fab fa-stack-overflow"></i>
          </a>
          <a href="https://github.com/alican-uver">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </Col>
      <Col md={3} className="card-container-right">
        <p className="card-container-right-title text-uppercase">merhaba</p>
        <p className="text-capitalize">ben kimim & neler yapıyorum</p>
        <Button name="Özgeçmiş" />
        <Button name="Projelerim" />
        <p className="card-container-right-info pt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          quibusdam voluptatem neque dolore commodi voluptate facilis nam
          similique iure aperiam numquam dolor asperiores atque ipsa omnis,
          sapiente tenetur optio earum! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. 
        </p>
      </Col>
    </Row>
  );
};

export default ProfileCard;
