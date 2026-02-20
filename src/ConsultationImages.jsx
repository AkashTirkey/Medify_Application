import React from "react";
import pic1 from "./assets/Consultation/pic1.png"
import pic2 from "./assets/Consultation/pic2.png"
import style from "./styles/Consultation.module.css"

const images = [
    {image:pic1,name:"pic1"},
    {image:pic2,name:"pic2"},
    {image:pic1,name:"pic3"}
]

const Consult = ()=>{
    return(
        <>
        <div className={style.container}>
            <div className={style.cardWrapper}>
                {images.map((item,index)=>(
                    <div className={style.card} key={index}>
                        <img src={item.image} alt={item.name} />
                    </div>
                ))}

            </div>
        </div>
        </>
    )
}

export default Consult;