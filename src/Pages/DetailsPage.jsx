import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import styles from "../styles/Details.module.css";
import hosp from "../assets/Hospital/hosp.png";
import FAQ from "../FAQ";
import Footer from "../FooterPage";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchForm from "../SearchForm";
import { useNavigate } from "react-router-dom";

const Hospitals = () => {

  //Full Flow (Search Page
    // 👇
// URL params (city, state)
//    ↓
// Hospitals Page
//    ↓
// Fetch hospitals
//    ↓
// User selects hospital
//    ↓
// User selects time
//    ↓
// Booking saved in localStorage
//    ↓
// Redirect to Bookings Page)
  
  

  const navigate = useNavigate();

  // 6. Day Selection- users can pick today tomorrow  Friday
  const [selectedDay, setSelectedDay] = useState("today");
  const [openIndex, setOpenIndex] = useState(null);

  // 7. Time Slot Selection 
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCenter, setSelectedCenter] = useState(null);


  //Toggle System - Accordion Behaviour, click same card - close it , click diff card - switch, reset time.
  const toggleSlots = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setSelectedTime(null);
  };


  //1. Entry Point - Search params store state and city so page knows what to fetch.
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const city = searchParams.get("city");

  const [hospitals, setHospitals] = useState([]);

  // 9.1. Booking Function (localStorage)
  const handleBooking = () => {

    const booking = {
      hospitalName: selectedCenter["Hospital Name"],
      address: selectedCenter["Address"],
      city: selectedCenter["City"],
      state: selectedCenter["State"],
      day: selectedDay,
      time: selectedTime
    };

    // 9.2.Get existing Bookings.
    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

      //9.3 -  add new Booking
    existingBookings.push(booking);

      //9.4 - Save back
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    //9.5 Feedback + redirect
    alert("Booking Confirmed 🎉");

    setSelectedTime(null);

    navigate("/bookings"); //redirect to the booking page
  };

  //2. Fetching Hospitals - API call , whenever state and city changes API is called hospitals are stores.
  useEffect(() => {
    const fetchHospitals = async () => {
      const res = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      );
      const data = res.data;
      setHospitals(data);
    };

    fetchHospitals();
  }, [state, city]);

  const morningSlots = ["09:00 AM", "09:30 AM", "10:00 AM"];
  const afternoonSlots = ["01:00 PM", "01:30 PM", "02:00 PM"];
  const eveningSlots = ["05:00 PM", "05:30 PM", "06:00 PM"];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          The health and well being of our patients and their health care team
          will always be our priority.
        </p>
      </div>

      <Navbar />
      <SearchForm />

      <h1>{hospitals.length} medical Centers available in {city}</h1>
      <p>Book appointments with minimum wait time and verified doctor details</p>

      {/* Rendering Cards - image,name,address,button*/}
      {hospitals.map((hospital, index) => (

        <div key={index}>

          {/* Hospital Card */}
          <div className={styles.card}>
            <img src={hosp} alt="hospital" className={styles.image} />

            <div className={styles.info}>
              <h3 className={styles.name}>{hospital["Hospital Name"]}</h3>

              <p className={styles.address}>
                {hospital["Address"]}, {hospital["City"]}, {hospital["State"]}
              </p>

              <p className={styles.available}>Available Today</p>
            </div>

            <button
              className={styles.button}
              onClick={() => toggleSlots(index)}
            >
              Book Free Center Visit
            </button>
          </div>

          {/* 5.Showing Slots */}
          {openIndex === index && (

            <div className={styles.slotsContainer}>

              {/* Days */}
              <div className={styles.daysRow}>

                {/* 6. Day selection - users can pick today tomorrow friday */}
                <div
                  className={`${styles.day} ${selectedDay === "today" ? styles.activeDay : ""}`}
                  onClick={() => setSelectedDay("today")}
                >
                  <p>Today</p>
                </div>

                <div
                  className={`${styles.day} ${selectedDay === "tomorrow" ? styles.activeDay : ""}`}
                  onClick={() => setSelectedDay("tomorrow")}
                >
                  <p>Tomorrow</p>
                </div>

                <div
                  className={`${styles.day} ${selectedDay === "friday" ? styles.activeDay : ""}`}
                  onClick={() => setSelectedDay("friday")}
                >
                  <p>Friday</p>
                </div>

              </div>


              {/* Morning */}
              <div className={styles.timeSection}>
                <p>Morning</p>
                <div className={styles.times}>
                  {morningSlots.map((time) => (
                    <span
                      key={time}
                      className={
                        selectedTime === time ? styles.activeSlot : ""
                      }
                      // 7. Time Slot selection - when user clicks a time you store which time and hospital.
                      onClick={() => {
                        setSelectedTime(time);
                        setSelectedCenter(hospital);
                      }}
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>


              {/* Afternoon */}
              <div className={styles.timeSection}>
                <p>Afternoon</p>
                <div className={styles.times}>
                  {afternoonSlots.map((time) => (
                    <span
                      key={time}
                      className={
                        selectedTime === time ? styles.activeSlot : ""
                      }
                      onClick={() => {
                        setSelectedTime(time);
                        setSelectedCenter(hospital);
                      }}
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>


              {/* Evening */}
              <div className={styles.timeSection}>
                <p>Evening</p>
                <div className={styles.times}>
                  {eveningSlots.map((time) => (
                    <span
                      key={time}
                      className={
                        selectedTime === time ? styles.activeSlot : ""
                      }
                      onClick={() => {
                        setSelectedTime(time);
                        setSelectedCenter(hospital);
                      }}
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>


              {/*8. Book Now Button logic (very important) */}
              {selectedTime && selectedCenter === hospital && (
                <button
                  className={styles.bookBtn}
                  onClick={handleBooking}
                >
                  Book Now
                </button>
              )}

            </div>
          )}

        </div>

      ))}

      <FAQ />
      <Footer />
    </div>
  );
};

export default Hospitals;