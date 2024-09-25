import React, { useEffect, useState } from "react";


function Compo(){
// const [data,setdata]=useState([]);


const [count,setcount]=useState(0)
const [islog,setislog]=useState(false)
const handl=(()=>{
   setislog(true)
})

// const hand=(()=>{
//    setcount(count+1)
  
// })


useEffect(() => {
   // handlefetch();
     
   console.log("abu");

return()=>{
   console.log("logged out");
}



},[])


   // const handlefetch=async ()=>{
   //    let b= await fetch('https://fakestoreapi.com/products')
   //    let d= await b.json()
   //   console.log(d);
   //   setdata(d);
   // };


    return(
        <>
        {islog ? null :<Compo/>}
   <h1>abu{count}</h1>
 <button onClick={handl}>click</button>
 



{/* 
// <div>
//     {data.map((ch)=>
//    <div>
//       <img src={ch.image}></img>
//       {ch.id}
      
//       {ch.image}
//     </div>
//    )}
// </div> */}


 </>


    )
}

export default Compo