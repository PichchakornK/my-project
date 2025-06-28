import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MyProject.css";

const projects = [
  {
    title: "Gesture-Controlled Smart Lamp",
    description: "A touchless smart lamp that adjusts brightness and color temperature based on hand gestures, providing a more intuitive user experience.",
    image: "https://cu.lnwfile.com/_/cu/_webp_max/4096/4096/3m/q2/kx.webp",
    reverse: false
  },
  {
    title: "Smart Plant Monitoring System",
    description: "A sensor-based system that monitors soil moisture, temperature, and light levels, automatically watering plants when needed to ensure optimal growth.",
    image: "https://cu.lnwfile.com/_/cu/_webp_max/4096/4096/0d/bg/cf.webp",
    reverse: true
  }
];

function MyProject() {
  return (
    <div className="project-section">
      <h1 className="project-title">My Project</h1>
      <Container className="project-list">
        {projects.map((project, index) => (
          <Row
            key={index}
            className={`project-row align-items-center mb-5${project.reverse ? " flex-row-reverse" : ""}`}
          >
            <Col xs={12} md={3} className="d-flex justify-content-center">
              <div className="project-image-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
            </Col>
            <Col xs={12} md={9}>
              <div className="project-card">
                <div className="project-name">{project.title}</div>
                <div className="project-desc">{project.description}</div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default MyProject;