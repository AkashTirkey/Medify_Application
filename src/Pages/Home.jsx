import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../Navbar";
import doc from "../assets/hero/NicePng_doctor-png_336282 1.png";
import Footer from "../FooterPage";
import FAQ from "../FAQ";
import Specialisation from "../Specialisation";
import Blog from "../Articles";
import Articles from "../Articles";
import Patient from "../Patients";

const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <p>
          The health and well being of out patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanlines!
        </p>
      </div>
      <Navbar />
      <div className={styles.section}>
        <div className={styles.hero}>
          <h2 style={{fontSize:"31px" , letterSpacing:"2%"}}>Skip the Travel! Find Online</h2>
          <h1 style={{fontSize:"56px"}}>Medical <span style={{color:"#2AA7FF"}}>Centers</span></h1>
          <p style={{color:"#5C6169" , fontSize:"20px", letterSpacing:"2%"}}>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <button>Find Centers</button>
        </div>
        <img src={doc} alt="Doctors_img" className={styles.heroImg} />
      </div>

    <div className={styles.floatingCard}>
      <form className={styles.form}>
        <input type="text" placeholder="State"/>
        <input type="text" placeholder="City"/>
        <button>Search</button>
      </form>
    </div>
    {/* <Footer/> */}
    {/* <FAQ/> */}

    {/* <Specialisation/> */}
    {/* <Articles/> */}
    <Patient/>
      
    </>
  );
};

export default Home;
