import React , {useState,useEffect }from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import axios from "axios"
import Navbar from "../Navbar";
import doc from "../assets/hero/NicePng_doctor-png_336282 1.png";
import Footer from "../FooterPage";
import FAQ from "../FAQ";
import Specialisation from "../Specialisation";
import Blog from "../Articles";
import { FiMapPin } from "react-icons/fi";
import Articles from "../Articles";
import Patient from "../Patients";
import Families from "../Families";
import Doctors from "../Doctors";
import Consult from "../ConsultationImages";
import doctor from "../assets/Search/Doctor.png"
import drugstore from '../assets/Search/Drugstore (3).png'
import hosp from "../assets/Search/Hospital (1).png"
import capsule from "../assets/Search/Capsule.png"
import ambulance from "../assets/Search/Ambulance.png"

const Search = [
  {name:"Doctor", image:doctor},
  {name:"Drugstore", image:drugstore},
  {name:"Hospital", image:hosp},
  {name:"Capsule", image:capsule},
  {name:"Ambulance", image:ambulance}
];

const Home = () => {
//states
const[selectedCard, setSelectedCard] = useState(null);
const [states, setStates] = useState([]);
const [cities, setCities] = useState([]);

const [selectedState, setSelectedState] = useState("");
const [selectedCity, setSelectedCity] = useState("");

const navigate = useNavigate();
const handleSearch = (e) =>{
    e.preventDefault(); 
  navigate(`/hospitals?state=${selectedState}&city=${selectedCity}`)
}


useEffect(() => {

 const fetchStates = async () =>{
  try{
    const res = await axios.get("https://meddata-backend.onrender.com/states");
    const data = res.data;

    setStates(data);
  }catch(error){
    console.error(error);
  }
 }

  fetchStates();

}, []);

const handleStateChange = async (e) =>{

  const state = e.target.value;
  setSelectedState(state);

  try{
    const res = await axios.get(`https://meddata-backend.onrender.com/cities/${state}`);

    const data = res.data;

    setCities(data);
  }catch(error){
    console.log(error);
  }
}


  return (
    <>
      <div className={styles.header}>
        <p>
          The health and well being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness!
        </p>
      </div>
      <Navbar />
      <div className={styles.section}>
        <div className={styles.hero}>
          <h2 style={{fontSize:"31px" , letterSpacing:"2%"}}>Skip the Travel! Find Online</h2>
          <h1 style={{fontSize:"50px"}}>Medical <span style={{color:"#2AA7FF"}}>Centers</span></h1>
          <p style={{color:"#5C6169" , fontSize:"18px", letterSpacing:"1%"}}>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <button>Find Centers</button>
        </div>
        <img src={doc} alt="Doctors_img" className={styles.heroImg} />
      </div>

    <div className={styles.formContainer}>


      <form className={styles.formInp}>

        <div className={styles.inputWrapper}>
          <FiMapPin className={styles.icon}/>
          {/* <input type="text" placeholder="State"/> */}
          <select onChange={handleStateChange}>
              <option>Select State</option>

              {states.map((state,index) =>(
                <option key={index} value={state}>{state}</option>
              ))}
          </select>
        </div>
        <div className={styles.inputWrapper}>
        <FiMapPin className={styles.icon}/>
        {/* <input type="text" placeholder="City"/> */}
        <select onChange={(e) =>setSelectedCity(e.target.value)} disabled={!selectedState}>
          <option>Select City</option>

          {cities.map((city,index)=>(
            <option key={index} value={city}>
              {city}
            </option>
          ))}

        </select>
        </div>
        <button className={styles.inputbtn} onClick={handleSearch}>Search</button>
      </form>


      <h3 className={styles.hTag}>You Maybe Looking for</h3>
      <div className={styles.gridContainer}>
          {Search.map((item,index)=>(
            <div key={index} 
            className={`${styles.card} ${selectedCard === index ? styles.activeCard : ""}`}
            onClick={() => setSelectedCard(index)}
            >
                <img src={item.image} alt={item.name} />
                <p style={{color:"#ABB6C7"}}>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
    <Consult/>
    <Specialisation/>
      <Doctors/>
    <Patient/>
    <Articles/>
    <Families/>
    <FAQ/>
    <Footer/>
      
    </>
  );
};

export default Home;
