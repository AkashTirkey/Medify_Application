import React, { useState } from "react";
import styles from './styles/Navbar.module.css'
import pic from './assets/hero/Medify.png'
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = ()=>{

    const navigate = useNavigate();

    const[open,setOpen]= useState(false);
    return(
        <>
        <div className={styles.navbar}>
        {/* <p style={{fontWeight:750}}>Medify</p> */}
        <img src={pic} alt="medify-logo" style={{cursor:"pointer"}} onClick={()=> navigate('/')} />

        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
            ☰
        </div>
        <ul className={`${styles.menu} ${open ? styles.active : ""}`}>
            <li>Find Doctors</li>
            <li>Hospitals</li>
            <li>Medicines</li>
            <li>Surgeries</li>
            <li>Software for Provider</li>
            <li>Facilities</li>
            <button onClick={()=> navigate('/bookings')}>My Bookings</button>
        </ul>
        </div>
        </>
    )
}

export default Navbar;