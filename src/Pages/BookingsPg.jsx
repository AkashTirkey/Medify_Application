import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../FooterPage";
const Bookings = () => {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(storedBookings);
  }, []);

  return (
    <div>

      <Navbar />

      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((booking, index) => (
          <div key={index} style={{border:"1px solid #ddd",padding:"15px",margin:"10px"}}>

            <h3>{booking.hospitalName}</h3>

            <p>{booking.address}</p>

            <p>{booking.city}, {booking.state}</p>

            <p>
              <strong>Day:</strong> {booking.day}
            </p>

            <p>
              <strong>Time:</strong> {booking.time}
            </p>

          </div>
        ))
    )}
    <Footer/>

    </div>
  );
};

export default Bookings;