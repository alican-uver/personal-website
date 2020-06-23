import React from "react";
import { Container } from "react-bootstrap";
import "./home.scss";
import ProfileCard from "../../components/Home/ProfileCard";

const homeContainer = {
  background: 'linear-gradient(to right, #e6dace 40%, #fff 40%, #fff 100%)',
}

const Home = () => {
  return (
    <Container fluid className="home-container" style ={homeContainer}>
        <ProfileCard />
    </Container>
  );
};

export default Home;
