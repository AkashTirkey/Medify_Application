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

    //states
    const[openIndex,setOpenIndex] = useState(null);
    const toggleSlots = (index) => {
        setOpenIndex(openIndex == index ? null : index);
    }

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
            <h1>{hospitals.length} medical Centers available in {city}</h1>
            <p>Book appointments with minimum wait time and verified doctor details</p>

           {hospitals.map((hospital,index) =>(
  <div key={index}>

    {/* Hospital Card */}
    <div className={styles.card}>
      <img src={hosp} alt="hospital" className={styles.image} />

      <div className={styles.info}>
        <h3 className={styles.name}>
          {hospital["Hospital Name"]}
        </h3>

        <p className={styles.address}>
          {hospital["Address"]}, {hospital["City"]}, {hospital["State"]}
        </p>

        <p className={styles.available}>
          Available Today
        </p>
      </div>

      <button
        className={styles.button}
        onClick={() => toggleSlots(index)}
      >
        Book Free Center Visit
      </button>
    </div>


    {/* Slots Section (appears when clicked) */}
    {openIndex === index && (
      <div className={styles.slotsContainer}>

        <div className={styles.daysRow}>
          <div>Today <span>8 Slots Available</span></div>
          <div>Tomorrow <span>10 Slots Available</span></div>
          <div>Friday <span>6 Slots Available</span></div>
        </div>

        <div className={styles.timeSection}>
          <p>Morning</p>
          <div className={styles.times}>
            <span>09:00 AM</span>
            <span>09:30 AM</span>
            <span>10:00 AM</span>
          </div>
        </div>

        <div className={styles.timeSection}>
          <p>Afternoon</p>
          <div className={styles.times}>
            <span>01:00 PM</span>
            <span>01:30 PM</span>
            <span>02:00 PM</span>
          </div>
        </div>

        <div className={styles.timeSection}>
          <p>Evening</p>
          <div className={styles.times}>
            <span>05:00 PM</span>
            <span>05:30 PM</span>
            <span>06:00 PM</span>
          </div>
        </div>

      </div>
    )}

  </div>
))}
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Hospitals;