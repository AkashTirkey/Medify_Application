import React, { useState } from "react";
import styles from './styles/Navbar.module.css'
import pic from './assets/hero/Medify.png'

const Navbar = ()=>{

    const[open,setOpen]= useState(false);
    return(
        <>
        <div className={styles.navbar}>
        {/* <p style={{fontWeight:750}}>Medify</p> */}
        <img src={pic} alt="medify-logo" />

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
            <button>My Bookings</button>
        </ul>
        </div>
        </>
    )
}

export default Navbar;