import React from "react";
import { Row, Col } from "react-bootstrap";
import "./profileCard.scss";
import Button from "../Button";
import { Link } from 'react-router-dom';
import SocialMedia from "../SocialMedia";

const ProfileCard = () => {
  return (
    <Row className="card-container justify-content-center">
      <Col xs={10} md={5} xl={3} className="card-container-left">
        <img src="/profile_images/profile_photo.jpeg" alt="card-container-left-img" />
        <p className="card-container-left-name pt-3">
          Alican <br /> Uver
        </p>
        <p className="card-container-left-line"></p>
        <p className="card-container-left-job mt-2 text-capitalize">
          {" "}
          junior front end developer
        </p>
        <SocialMedia />
      </Col>
      <Col xs={10} md={5} xl={3} className="card-container-right">
        <p className="card-container-right-title text-uppercase">merhaba</p>
        <p className="text-capitalize">ben kimim & neler yapıyorum</p>
        <a download href="../my_resume/AlicanUVER_CV.pdf"><Button name="Özgeçmiş" /></a>
        <Link to="/projects"><Button name="Projelerim" /></Link>
        <p className="card-container-right-info pt-4">
          Jeoloji mühendisliği mezunuyum. Kendimi bu alanda geliştirmeye başladığımdan
          beri, ne kadar sevdiğimin ve bu alan için çalışmak istediğimin farkına vardım ve serüven başladı. Benim için 
          gelişim hiçbir zaman sona ermeyecek.
        </p>
      </Col>
    </Row>
  );
};

export default ProfileCard;
