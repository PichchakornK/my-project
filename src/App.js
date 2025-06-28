import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import About from './pages/About';
import Education from './pages/Education';
import MyProject from './pages/MyProject';
import Experience from './pages/Experience';
import MySkills from './pages/MySkills';
import logo from './pics/images.png';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar
          expand="lg"
          className="shadow-sm"
          style={{
            background: '#b71c1c', 
            borderBottom: '3px solid #fff'
          }}
        >
          <Container style={{ fontSize: "1.25rem" }}>
            <Navbar.Brand className="d-flex align-items-center">
              <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top me-2"
                alt="Logo"
              />
              <Nav.Link as={Link} to="/" style={{ padding: 0 }}>
                <span style={{ fontWeight: 'bold', color: '#fff', fontSize: "1.4rem" }}>
                  PichchakornK
                </span>
              </Nav.Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link
                  as={Link}
                  to="/education"
                  style={{
                    fontSize: "1.18rem",
                    color: "#fff",
                    fontWeight: 600,
                    marginRight: "1.2rem"
                  }}
                >
                  Education
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/myskills"
                  style={{
                    fontSize: "1.18rem",
                    color: "#fff",
                    fontWeight: 600,
                    marginRight: "1.2rem"
                  }}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/myproject"
                  style={{
                    fontSize: "1.18rem",
                    color: "#fff",
                    fontWeight: 600,
                    marginRight: "1.2rem"
                  }}
                >
                  My Project
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/experience"
                  style={{
                    fontSize: "1.18rem",
                    color: "#fff",
                    fontWeight: 600
                  }}
                >
                  Experience
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="App p-5">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/myproject" element={<MyProject />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/myskills" element={<MySkills />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;