import React, { createContext, useState } from "react";


export const Countercontext=createContext()

export const ConstProvider=({children})=>{

    const[coun,setcoun]=useState(0)

   const increment=()=>{


    setcoun(coun+1)
   }

return(
    <>
    <Countercontext.Provider value={{coun,increment}}>
    {children}
    </Countercontext.Provider>
    </>
)

}