import React from "react";
import style from "./styles/Patient.module.css"

import img1 from "./assets/Patient/patient1.png"
import img2 from "./assets/Patient/patient2.png"
import img3 from "./assets/Patient/hover.png"

const Patient = () =>{
    return(
        <>
        <div className={style.container}>
            <div className={style.leftContent}>
                <img src={img2} alt="patient1" className={style.firstPatient}/>
                <img src={img1} alt="patient2" className={style.secondPatient}/>
                <img src={img3} alt="patient3" className={style.hoverImg}/>
            </div>

            <div className={style.rightContent}>
                <p style={{color:"#2AA7FF", fontWeight:500}}>Helping Patients from around the Globe!!</p>
                <h1 style={{color:"#1B3C74"}}>Patients <span style={{color:"#2AA7FF"}}>Caring</span></h1>
                <p>Our goal is to deliever quality of care in a courteous, respectful, 
                    and compassionate manner. We hope you will allow us to care for you and
                    strive to be the first and best choice for healthcare.
                </p>
                <ul className={style.listItems}>
                    <li>Stay Updated</li>
                    <li>Check Your Results Online</li>
                    <li>Manage your Appointment Online</li>
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default Patient;