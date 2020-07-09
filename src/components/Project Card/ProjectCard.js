import React, { useState, useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import "./projectCard.scss";
import { client } from './projectsFromContentful';

const ProjectCard = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    client.getEntries({
      content_type: 'personalWebsite'
    })
      .then(items => {
        let projects = items.items.map(item => {
          const { title, tools, description, link } = item.fields;
          const { id } = item.sys;
          const image = item.fields.image.fields.file.url
          return { title, tools, description, link, id, image }
        })
        setProjects(projects)
      })
    setTimeout(() => {
      setLoading(false)
    }, 700);
  }, [])

  return (
    <>
      {
        !loading ? <>
        {projects.map(project => {
          return <Row key={project.id} className="project-card mx-auto no-gutters">
            <Col md={7} className="pr-5 mx-auto" style={{ padding: '30px' }}>
              <h2 className="project-card-name">{project.title}</h2>
              <small className="project-card-tools text-muted">{project.tools}</small>
              <p className="project-card-description">{project.description}</p>
              <a href={project.link}>Kodları İncelemek İçin</a>
            </Col>
            <Col md={5} className="img-container mx-auto">
              <img className="img-container-item" src={project.image} alt="project-img" />
            </Col>
          </Row>
        })} </> :
        <div className = "text-center">
        <Spinner animation="grow" variant="info" />
        <p className = "text-muted">Yükleniyor...</p>
        </div>
      }
    </>
  );
};

export default ProjectCard;
