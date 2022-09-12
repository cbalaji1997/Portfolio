import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import NDTV_logo from "../../Assets/Projects/NDTV_logo.png";

import kohls from "../../Assets/Projects/kohls.png"
import suicide from "../../Assets/Projects/suicide.png";
import lumen from "../../Assets/Projects/lumen.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             
              imgPath={kohls}
              
              isBlog={false}
              title="Kohl's"
              description="What type of business is Kohl's?
              Kohl's Corporation operates as a retail company in the United States.., i use html ,css ,local storage ,dom to make this site."
              ghLink="https://github.com/cbalaji1997/kohl-s.com-Clone"
              demoLink="https://taupe-boba-a36cbd.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NDTV_logo}
              isBlog={false}
              title="NDTV"
              description="The show proved to be popular and NDTV established its image as a private news producer..,i use html ,css ,local storage ,dom to make this site."
              ghLink="https://github.com/cbalaji1997/ndtvClone/tree/main/ndtv"
              demoLink="#"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
          
              imgPath={lumen}
              isBlog={false}
              title="Lumen5"
              description="Lumen5 is a video creation platform designed for brands and businesses to produce engaging video content for social posts, stories, and ads.i use html ,css ,local storage ,dom to make this site."
              ghLink="https://github.com/cbalaji1997/-social-flight-1775"
              demoLink="#"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
