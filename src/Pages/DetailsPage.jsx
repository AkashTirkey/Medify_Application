import React ,{useState,useEffect}from "react";
import Navbar from "../Navbar";
import styles from "../styles/Details.module.css"
import hosp from "../assets/Hospital/hosp.png"
import FAQ from "../FAQ";
import Footer from "../FooterPage";
import { useSearchParams } from "react-router-dom";
import axios from "axios"
import SearchForm from "../SearchForm";

const Hospitals = ()=>{

    const [searchParams] = useSearchParams();
    const state = searchParams.get("state");
    const city = searchParams.get("city")

    const [hospitals,setHospitals] = useState([]);

    useEffect(() =>{
        const fetchHospitals = async () =>{
            const res = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
            setHospitals(res.data);
        }
        fetchHospitals();
    },[state,city])


    return(
        <div className={styles.container}>
             <div className={styles.header}>
                    <p>
                      The health and well being of our patients and their health care team
                      will always be our priority, so we follow the best practices for
                      cleanliness!
                    </p>
                  </div>
            <Navbar/>
            <SearchForm/>
            <h2>{hospitals.length} medical Centers available in {city}</h2>
            <p>Book appointments with minimum wait time and verified doctor details</p>

            {hospitals.map((hospital,index) =>(
                <div key={index} className={styles.card}>
                    <img src={hosp} alt="hospital" className={styles.image} />
                    <div className={styles.info}>
                        <h3 className={styles.name}>{hospital["Hospital Name"]}</h3>
                        <p className={styles.address}>{hospital["Address"]},{hospital["City"]}, {hospital["State"]}</p>
                        <p className={styles.available}>Available Today</p>
                    </div>

                    <button className={styles.button}>Book Free Center Visit</button>
                </div>
            ))}
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Hospitals;