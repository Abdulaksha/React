import React, { useState } from "react";

import './BirthDay.css';


function BirthDay(){







        const[datas,setdatas]=useState([ 

            { id: 1, name: 'Bertie Yates', age: 29, image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg', },
             { id: 2, name: 'Hester Hogan', age: 32, image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg', }, { id: 3, name: 'Larry Little', age: 36, image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg', }, { id: 4, name: 'Sean Walsh', age: 34, image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg', }, { id: 5, name: 'Lola Gardner', age: 29, image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg', }, ])
   
            const hands=()=>{
              setdatas([])
            }
   
             return(
        <>
        <div className="ac">
        <h1>{datas.length} Birthdays Today</h1>
        {datas.map((cd)=>
           <div className="ab">
        <img src={cd.image} className="abd"/>
        <div className="as">
        <span className="ad">{cd.name}</span><td/>
        <span className="an" >{cd.age} years</span>
        </div>
       
           </div>

        )}

         <button onClick={hands}>clear all</button>


        </div>
        </>
    )
}

export default BirthDay
