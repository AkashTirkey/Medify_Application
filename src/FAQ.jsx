import React from "react";
import style from "./styles/FAQ.module.css";
import doctor from "./assets/hero/FAQ.png";
import small1 from './assets/hero/hover1.png';
import small2 from './assets/hero/hover2.png'

const FAQ = () => {
  return (
    <>
    <div className={style.start}>

      <div className={style.heading}>
        <p style={{ color: "#2AA7FF" }}>Get your Answer</p>
        <h1 style={{ color: "#1B3C74" }}>Frequently Asked Questions</h1>
      </div>
      <div className={style.content}>

        <div className={style.imageWrapper}>

        <img src={doctor} alt="doctor-patient"  className={style.mainImage}/>

        <img src={small1} alt="icon1"  className={style.smallImg1}/>
        <img src={small2} alt="icon2" className={style.smallImg2}/>
        </div>

        <div className={style.para}>
          <p>Why choose our medical for your family? <span>+</span> </p>
          <p>Why we are different from others? <span>+</span></p>
          <p>Trusted & experience senior care & love <span>+</span></p>
          <p>How to get appointment for emergency cases? <span>+</span></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQ;
