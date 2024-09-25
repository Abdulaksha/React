import React, { useReducer } from "react";


function arith(state,action){
        if(action.type=="increment"){
         return  {count:state.count+1}
        }
}






function Reduce()
{





    const[state,dispatch]=useReducer(arith,{count:0})



    const hanfe=()=>{

         dispatch({type:"increment"})
    }
    

    return(
        <>
        <h1>count-{state.count}</h1>

        <button onClick={hanfe}>su</button>
        </>



    )
}







export default Reduce