import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from '../Button';
import LoadingSpinner from "../LoadingSpinner";
import "./projectCard.scss";
import { client } from './projectsFromContentful';

const ProjectCard = () => {

  const [projects, setProjects] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);
  const [numberProject, setNumberProject] = useState(3);
  const [projectLoading, setprojectLoading] = useState(false);

  const increaseProject = () => {
    setprojectLoading(true);
    setTimeout(() => {
      setNumberProject(numberProject + 3);
    }, 500);
    setTimeout(() => {
      setprojectLoading(false)
    }, 500);
  }

  useEffect(() => {
    setPageLoading(true);
    client.getEntries({
      content_type: 'personalWebsite'
    })
      .then(items => {
        let projects = items.items.map(item => {
          const { title, tools, description, codeLink, liveLink } = item.fields;
          const { id } = item.sys;
          const image = item.fields.image.fields.file.url
          return { title, tools, description, codeLink, liveLink, id, image }
        })
        setProjects(projects)
      })
    setTimeout(() => {
      setPageLoading(false)
    }, 700);
  }, [])

  return (
    <>
      {
        !pageLoading ? <>
          {projects.slice(0, numberProject).map(project => {
            return <Row key={project.id} className="project-card mx-auto no-gutters">
              <Col md={7} className="pr-5 mx-auto" style={{ padding: '30px' }}>
                <h2 className="project-card-name">{project.title}</h2>
                <small className="project-card-tools text-muted">{project.tools}</small>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-links">
                  <a className="project-card-link mb-4" href={project.codeLink}>Kodları İncelemek İçin</a>
                  <a className="project-card-link" href={project.liveLink}>Canlı Görmek için</a>
                </div>
              </Col>
              <Col md={5} className="img-container mx-auto">
                <img className="img-container-item" src={project.image} alt="project-img" />
              </Col>
            </Row>
          })}
          {
            projectLoading ? <LoadingSpinner /> :
              numberProject < projects.length && <Row>
                <Col md={12} className="text-center">
                  <Button name="daha fazla proje yükle"
                    loadMore={increaseProject}
                    remainingProjects={projects.length - numberProject}
                  />
                </Col>
              </Row>
          }
        </>
          : <LoadingSpinner />
      }
    </>
  );
};

export default ProjectCard;