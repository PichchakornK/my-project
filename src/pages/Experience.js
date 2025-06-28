import React from "react";
import './Experience.css'


function Experience(){
  const Experience = [
  {
    name: "ชื่อกิจกรรมที่เคยทำ",
    image: "https://image.bangkokbiznews.com/image/kt/media/image/fileupload1/source/157931346012.jpg?1579273120661?x-image-process=style/lg-webp",
    description: "รายละเอียด............"
  },
  {
    name: "ชื่อกิจกรรมที่เคยทำ",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0OXjCXao84zfqlsKs05Vs8r87djEHQ2fTYMsZJsmhPS9q_dxM9BnByGwmkGgW4xrkhzpU2pVsLdEXmDEKbSGR_Bjg6wDYU_UuhYeOf3ANJtJBr1U3rZ6elB7apTUz6LyV1r1tfNMBZvY/s1600/20180731_%25E0%25B9%2591%25E0%25B9%2598%25E0%25B9%2590%25E0%25B9%2597%25E0%25B9%2593%25E0%25B9%2591_0013.jpg",
    description: "รายละเอียด............"
  },
  {
    name: "ชื่อกิจกรรมที่เคยทำ",
    image: "https://mec.rmuti.ac.th/images/Web2021/LearningRoom/12.jpg",
    description: "รายละเอียด............"
  },
  {
    name: "ชื่อกิจกรรมที่เคยทำ",
    image: "https://mec.rmuti.ac.th/images/Web2021/LearningRoom/5513218.jpg",
    description: "รายละเอียด............"
  },
  {
    name: "ชื่อกิจกรรมที่เคยทำ",
    image: "https://www.spu.ac.th/images/contents/20190522102427.jpg",
    description: "รายละเอียด............"
  },
    {
    name: "ชื่อกิจกรรมที่เคยทำ",
    image: "https://phukhieo.ac.th/wp-content/uploads/2023/08/IMG_3112.jpg",
    description: "รายละเอียด............"
  }
];
    return(
  <div className="exp-container">
      {Experience.map((exp, index) => (
        <div className="exp-card" key={index}>
          <img src={exp.image} alt={exp.name} className="exp-image" />
          <div className="exp-overlay">
            <h4>{exp.name}</h4>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
    );
}

export default Experience;