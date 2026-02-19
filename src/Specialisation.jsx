import React from "react";
import style from "./styles/Specialisation.module.css";
import img1 from "./assets/Dept/Drugstore.png";
import img2 from "./assets/Dept/Stethoscope.png";
import img3 from "./assets/Dept/Heart Rate.png";
import img4 from "./assets/Dept/Heart Rate Monitor.png";
import img5 from "./assets/Dept/Blood Sample.png";
import img6 from "./assets/Dept/Immune.png";
import img7 from "./assets/Dept/Drugstore (1).png";
import img8 from "./assets/Dept/X-Ray.png";

const dept = [
  { name: "Dentistry", image: img1 },
  { name: "Primary Care", image: img2 },
  { name: "Cardiology", image: img3 },
  { name: "MRI Response", image: img4 },
  { name: "Blood Test", image: img5 },
  { name: "Piscologist", image: img6 },
  { name: "Laboratory", image: img7 },
  { name: "X-Ray", image: img8 },
];

const Specialisation = () => {
  return (
    <>
      <h1 style={{ color: "#1B3C74" }}>Find By Specialisation</h1>
    <div className={style.container}>
      {dept.map((department,index) =>(
        <div key={index} className={style.card}>
            <img src={department.image} alt={department.name} />
            <h3>{department.name}</h3>
        </div>
))}
<div className={style.btnWrapper}>

<button className={style.btn}>View All</button>
</div>
    </div>
    </>
  );
};

export default Specialisation;
