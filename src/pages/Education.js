import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from "../pics/images.png"; // Adjust the path as necessary
//import Profile from "../pics/Profile.jpg"; // Adjust the path as necessary
import "../pages/Education.css";


const educationData = [
  {
    year: "2010",
    level: "Kindergarten",
    description: "description",
    image: Images
  },
  {
    year: "2014",
    level: "Elementary school",
    description: "description",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqV32fz7Kx8WqNicfgTa3sfo9uG4YIjrWNw&s",
  },
  {
    year: "2020",
    level: "High School",
    description: "description",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPL72D44D_j-hC3QDqkneZOiH1O-2emGkr0Q&s"
  }
];

function Education() {
  return (
    <div className="education-section">
      <h1 className="education-title">Education</h1>
      <Container>
        {educationData.map((edu, index) => (
          <Row key={index} className="justify-content-center">
            <Col xs={12} md={10}>
              <div className="edu-card">
                <div className="edu-img-box">
                  <img src={edu.image} alt="edu" />
                </div>
                <div className="edu-info">
                  <div className="edu-level">
                    {edu.level}
                    <span className="edu-year">{edu.year}</span>
                  </div>
                  <div className="edu-desc">{edu.description}</div>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Education;

