import axios from "axios";
import React, { useEffect, useState } from "react";

import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

function Abdul(){

      const[groc,setgroc]=useState([])
      const[inpu,setinpu]=useState("")
       const hat=async()=>{
       let add=await axios.get("http://localhost:3000/todoList");
          setgroc(add.data);
       }
          useEffect(()=>{
            hat();
          },[]);

       

       const ha=(e)=>{

        setinpu(e.target.value)
      
    }
    const fd=async()=>{
let body={
    grocery:inpu
}
        setinpu("")
        let gfd=await axios.post("http://localhost:3000/todoList",body)

      hat()
      
    }



    const handdelete=async(id)=>{
                let dele=await axios.delete(`http://localhost:3000/todoList/${id}`)
                hat()

    }

  const handedi=async(i)=>{

       let rd=prompt("enter the groce",groc[i].grocery)
        let body={
            id:groc[i].id,
            grocery:rd
        }


        let edi=await axios.put(`http://localhost:3000/todoList/${groc[i].id}`,body)
        hat()
  }






    return(
        <>   
        <div>
                <input onChange={ha} placeholder="enter grocery" value={inpu}/>
            <button onClick={fd}> submit </button>
            {groc.map((cd,i)=>(
                <ul>{i+1}.{cd.grocery}
                <span onClick={()=>handedi(i)}><CiEdit /></span>
                <span onClick={()=>handdelete(cd.id)}> <MdOutlineDelete /> </span>
                
                </ul>

            ))}

        </div>

         
        </>
    )
        
    
}

export default Abdul