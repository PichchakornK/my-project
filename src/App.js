import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './component/About'
import Education from './component/Education'
import MyProject from './component/MyProject'
import Experience from './component/Experience'

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar bg="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand  className="d-flex align-items-center">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
              alt="Logo"
            />
            <span style={{ fontWeight: 'bold', color:'white' }}>Name Surname</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
            <Nav>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/education">Education</Nav.Link>
              <Nav.Link as={Link} to="/myproject">My Project</Nav.Link>
              <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="App p-4">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/myproject" element={<MyProject />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
