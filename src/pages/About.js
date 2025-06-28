import React from "react";
import "./About.css"; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import  Images  from "../pics/images.png"; // Adjust the path as necessary


function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About</h1>
        <p>
          Hello! I'm [Your Name], a passionate developer and innovator with a deep
          interest in technology, IoT, and home automation. I have hands-on
          experience working with Arduino, C/C++, and Python.
        </p>
        <p>
          One of my notable achievements includes winning a bronze medal at WorldInvent
          Singapore, which has fueled my ambition to develop impactful projects.
        </p>
        <p>
          Recently, I built an intelligent environmental control system for mushrooms
          and other plants.
        </p>
        <p>
          I'm always eager to collaborate on new challenges. Feel free to contact me at
          [Your Contact Info]!
        </p>
      </div>
      <div className="about-image">
        <img src={Images} alt="profile" />
      </div>
    </div>
  );
}

export default About;
