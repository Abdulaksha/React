import React, { useContext } from "react";
import { Countercontext } from "./Counter";


function Cart(){
    const{coun}=useContext(Countercontext)


return(
    <>

    <h1>count-{coun}</h1>
    </>
)

}
export default Cart