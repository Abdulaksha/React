import React, { useState } from "react";



function Abuprop({names,age}){
   
const[data,setdata]=useState(names,age)

    return(
        <>
    {data.map((ch)=>
    <h1>{ch}</h1>
//    < h2>{age}-{names}</h2>




   ) }     
   


        </>
    )
}


export default Abuprop