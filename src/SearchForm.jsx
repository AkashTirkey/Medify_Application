import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styles from "./styles/SearchForm.module.css";

const SearchForm = () => {

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  useEffect(() => {

    const fetchStates = async () => {
      try {
        const res = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );

        setStates(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStates();

  }, []);

  const handleStateChange = async (e) => {

    const state = e.target.value;
    setSelectedState(state);

    try {
      const res = await axios.get(
        `https://meddata-backend.onrender.com/cities/${state}`
      );

      setCities(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`/hospitals?state=${selectedState}&city=${selectedCity}`);
  };

  return (

    <form className={styles.form} onSubmit={handleSearch}>

      <div className={styles.inputWrapper}>
        <FiMapPin />

        <select onChange={handleStateChange}>
          <option>Select State</option>

          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}

        </select>

      </div>

      <div className={styles.inputWrapper}>
        <FiMapPin />

        <select
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        >
          <option>Select City</option>

          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}

        </select>

      </div>

      <button className={styles.button}>Search</button>

    </form>
  );
};

export default SearchForm;