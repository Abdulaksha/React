import React, { useState } from "react";

export default Form
function Form(){

    const[ddata,setddata]=useState("")
    const handlee=(e)=>{
        console.log(e.target.value);
        
        setddata(e.target.value)
    }
    return(<>
        <h1>name:{ddata}</h1>
        <input  onChange={handlee} placeholder="enter ur name"/>

        </>
    )
}