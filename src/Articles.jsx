import React from "react";
// import {
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Avatar,
//   Box
// } from "@mui/material";
import mainImg from "./assets/hero/Detox.jpg"
import doctor from "./assets/hero/RebeccaLee.jpg"
import style from "./styles/Articles.module.css"

const Articles = ()=>{
    return(
        <>
        <div>
            <p style={{textAlign:"center" , color:"#2AA7FF"}}>Blog & News</p>
            <h1>Read out Latest News</h1>
            <div className={style.container}>
                {[1,2,3].map((item)=> (
                    <div key={item} className={style.card}>
                        <img src={mainImg} alt="article" className={style.mainImg} />

                            <div className={style.meta}>
                                <span className={style.category}>Medical</span>
                                <span className={style.date}>| March 22,2022</span>
                            </div>

                            <h2 className={style.title}>
                                6 tips to Protect Your Mental Health When You're Sick
                            </h2>

                            <div className={style.author}>
                                <img src={doctor} alt="doctor" />
                                <span>Rebecca Lee</span>
                            </div>
                    </div>
                ))}
            </div>
            
        </div>
        </>
    )
}

export default Articles;