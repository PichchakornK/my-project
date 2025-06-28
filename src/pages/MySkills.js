// MySkills.js
import React from "react";
import "./MySkills.css"; 

const skills = [
  {
    name: "HTML",
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    description: "ภาษาสำหรับโครงสร้างของหน้าเว็บ"
  },
  {
    name: "CSS",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    description: "ใช้สำหรับตกแต่งและจัด layout หน้าเว็บ"
  },
  {
    name: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    description: "ภาษาโปรแกรมฝั่ง Frontend และ Backend"
  },
  {
    name: "Python",
    image: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1",
    description: "ภาษายอดนิยมสำหรับงาน data, AI, automation"
  },
  {
    name: "React",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*aLg1-G2UAlaKpBopRnmCRg.png",
    description: "ไลบรารีสร้าง UI ที่ทันสมัยของเว็บ"
  },
  {
    name: "C++",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    description: "ภาษาสำหรับงานระบบและ IoT"
  },
  {
    name: "VS Code",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXw1e_BUF94tqvmJWuXqHzbCG-nP0ONdK4rA&s",
    description: "เครื่องมือเขียนโค้ดที่นักพัฒนานิยม"
  },
  {
    name: "Arduino",
    image: "https://img.utdstc.com/icon/165/ef1/165ef10274290f7ef9573f230b88a8ce490efb6ae64debb759dd659c0b55051d:200",
    description: "แพลตฟอร์มสำหรับงาน embedded และ IoT"
  }
];

function MySkills() {
  return (
    <div style={{ margin: "1rem" }}>
<h1 style={{
        color: "#ff2d00", // เปลี่ยนเป็นแดงสดใส
        textAlign: "center",
        marginBottom: "2rem",
        letterSpacing: "0.04em",
        textShadow: "0 2px 12px #ffb3a7"
      }}>       

        Skills
      </h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <div className="skill-overlay">
              <span>{skill.name}</span>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkills;