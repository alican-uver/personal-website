import React from "react";
import { Container } from "react-bootstrap";
import ProfileCard from "../components/Home/ProfileCard";

const homeContainer = {
  background: 'linear-gradient(to right, #e6dace 40%, #fff 40%, #fff 100%)',
}

const HomePage = () => {
  return (
    <Container fluid style ={homeContainer} className = "responsive-bg-gradient">
        <ProfileCard />
    </Container>
  );
};

export default HomePage;
