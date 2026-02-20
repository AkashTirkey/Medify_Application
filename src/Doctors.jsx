import React from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import {Navigation,Autoplay} from "swiper/modules"
import style from "./styles/Doctors.module.css"
import doc1 from "./assets/Doctors/img1.png"
import doc2 from "./assets/Doctors/img2.png"
import doc3 from "./assets/Doctors/img3.png"
import doc4 from "./assets/Doctors/img4.png"
// import doc5 from "./assets/Doctors/img5.png"

const doc = [
    {name:"Henry Hull" , dept:"Orthopedic" , image:doc1},
    {name:"Dr. Ahmad Khan", dept: "NeuroLogist" , image:doc2},
    {name:"Dr Heena Sachdeva", dept:"Orthopedics" ,image:doc3},
    {name:"Dr Ankur Sharma", dept:"Medicine" , image:doc4},
    {name:"Dr Wasim Ahmed", dept:"Pediatrician", image:doc1}
];

const Doctors = () =>{
    return(
        <>
            <div className={style.container}>
                <h1>Our Media Specialist</h1>

                <Swiper 
                modules={[Navigation, Autoplay]}
                spaceBetween={80}
                slidesPerView={3}
                navigation
                autoplay={{ delay: 2500}}
                breakpoints={{
                    0:{slidesPerView:1},
                    600:{slidesPerView:2},
                    992:{slidesPerView:3},
                }}
                >
                    {doc.map((item,index)=>(
                        <SwiperSlide key={index}>
                            <div className={style.card}>
                                <img src={item.image} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p>{item.dept}</p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Doctors;