import React from "react";
import style from "./styles/Families.module.css"
import img1 from "./assets/Families/doctors.png"
import img2 from "./assets/Families/Hospital.png"
import img3 from "./assets/Families/Drugstore (2).png"
import img4 from "./assets/Families/helpinghands.png"

const info = [
    {name:"Happy Patients", count:"5000+" , image:img1 , bg:"#EBF7FF"},
    {name:"Hospitals", count:"200+" , image:img2, bg:"#FFF2F0"},
    {name:"Laboratories", count:"1000+" , image:img3 , bg:"#FFF7E6"},
    {name:"Expert Doctors", count:"700+" , image:img4 , bg:"#EBFAF1"}
];

const Families = ()=>{
    return(
        <>
        <div className={style.container}>
            <div className={style.leftPart}>
                <p style={{color:"#2AA7FF" , fontWeight:600 , textAlign:"center"}}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILIY</p>
                <h1 style={{color:"#1B3C74" , fontSize:"40px"}}>Our Families</h1>      
                <p style={{color:"#77829D" , lineHeight:1.8}}>We will work with you to develop indivisualised care plans,
                    including management of chronic diseases, if we cannot assist, we can provide referrals or advice about the type of practioner
                    you require. We treat all enquiries sensitively and in the strictest confidence.
                     </p>
            </div>

            <div className={style.rightPart}>
                {
                    info.map((item,index)=>(
                        <div key={index} className={style.card}>
                            <div className={style.imageWrapper} style={{backgroundColor:item.bg}}>

                            <img src={item.image} alt={item.name} />
                            </div>
                            <h1>{item.count}</h1>
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        
        </>
    )
}

export default Families;