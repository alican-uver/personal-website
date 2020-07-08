import React from 'react';
import { Container } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';
import ProjectCard from '../components/Project Card/ProjectCard';

const projectPageStyle = {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    background: 'linear-gradient(to left, #e6dace 40%, #fff 40%, #fff 100%)',
}

const ProjectsPage = () => {
    return (
        <Container fluid style={projectPageStyle} className= "responsive-bg-gradient">
            <PageTitle title="Projelerim" />
            <ProjectCard />
        </Container>
    )
}

export default ProjectsPage;
