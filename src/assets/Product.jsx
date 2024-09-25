import React, { createContext, useContext } from "react";
import { Countercontext } from "../Counter";


function Product(){
const{increment}=useContext(Countercontext)


return(
    <>
    <h2>apple</h2>

    <button onClick={increment}>add cart</button>


    </>
)

}
export default Product