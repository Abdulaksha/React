import axios from "axios";
import React, { useEffect, useState } from "react";





const Usefetch=(url)=>{

      const[dat,setdat]=useState([])


    const hak=async()=>{
     
    let re=await axios.get(url);
    setdat(re.data)
}

useEffect(()=>{
    hak()
},[url])


return{dat}
}


export default Usefetch


