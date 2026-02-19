import React from "react";
import phone_1 from "./assets/hero/SeekPng 1.png";
import phone_2 from "./assets/hero/SeekPng 2.png";
import style from "./styles/Footer.module.css";
import googlePlay from "./assets/hero/google_play.png.png";
import appleStore from "./assets/hero/apple_store.png.png";
import footerIMG from "./assets/hero/div.elementor-widget-wrap.png";

const Footer = () => {
  return (
    <>
      <div className={style.footerStart}>
        <div className={style.footerLeft}>
          <img
            src={phone_1}
            alt="Phone Small"
            className={`${style.phoneSmall} ${style.phone1}`}
          />
          <img
            src={phone_2}
            alt="Phone Big"
            className={`${style.phoneBig} ${style.phone1}`}
          />
        </div>

        <div className={style.footerRight}>
          <h1>
            Download the <br /> <span style={{ color: "#2AA7FF" }}>Medify</span> App
          </h1>

          <p style={{ color: "#5C6169", fontWeight: 400 }}>
            Get the link to download the app
          </p>
          <div className={style.inputRow}>
            <div className={style.phoneInput}>
              <input className={style.countryCode} value="+91" readOnly />
              <input
                className={style.phoneNumber}
                type="tel"
                placeholder="Enter phone number"
              />
            </div>

            <button
              style={{
                backgroundColor: "#2AA7FF",
                padding: "5px ",
                borderRadius: "8px",
                color: "white",
              }}
              className={style.smsBtn}
            >
              Send Sms
            </button>
            {/* <img src={googlePLay} alt="google play" />
          <img src={apple} alt="apple" /> */}
          </div>

          <div className={style.storeButtons}>
            <img src={googlePlay} alt="Google Play" />
            <img src={appleStore} alt="Apple Store" />
          </div>
        </div>
      </div>
      <div className={style.footerInfo}>

  <div className={style.footerTop}>
    <img src={footerIMG} alt="medify" />

    <ul>
      <li>About us</li>
      <li>Our pricing</li>
      <li>Our Gallery</li>
      <li>Appointment</li>
      <li>Privacy Policy</li>
      <li>Orthology</li>
      <li>NeuroLogy</li>
      <li>DentalCare</li>
      <li>Opthalmology</li>
      <li>CardioLogy</li>
      <li>About us</li>
      <li>Our pricing</li>
      <li>Our Gallery</li>
      <li>Appointment</li>
      <li>Privacy Policy</li>
    </ul>
  </div>

  <div className={style.footerBottom}>
    <p>Copyright 2026 Surya Nursing Home.com. All rights Reserved</p>
  </div>

</div>

    </>
  );
};

export default Footer;
