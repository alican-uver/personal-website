import React from "react";
import { Container } from "react-bootstrap";
import "./home.scss";
import ProfileCard from "../../components/Home/ProfileCard";

const Home = () => {
  return (
    <Container fluid className="home-container">
        <ProfileCard />
    </Container>
  );
};

export default Home;
