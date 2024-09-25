import React, { Suspense, useState } from "react"
import Abdul from "./abdul"
import Reduce from "./Reduce"
import Prod from "./Prod"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Subname from "./Subname"
// import Propse from "./Propse"
// import Abuprop from "./abuprop"
// import Form from "./Form"
// import BirthDay from "./BirthDay"
// import Compo from "./Compo"
import "./app.css"
import { ConstProvider, Countercontext } from "./Counter";
import Cart from "./Cart";
import Product from "./assets/Product";


const Load=React.lazy(()=>import("./Prod"))


function App() {

const[Comp,setcomp]=useState(null)

const dynamicimport=async()=>{

let  r=await import("./Subname")


setcomp(()=>r.default)
}






return(
  <>

     {/* <Compo/> */}



     
  {/* <Propse name={"abu"}/> */}
 {/* <Abuprop names={["rahma","rahim","ayas"] } age={[20,30,40]}/> */}
 {/* <Form/> */}
{/* <BirthDay/> */}
<Subname/>

{/* <Abdul/> */}


{/* <Reduce/> */}

{/* {
  Comp?
  <Comp/>
  :
  ""
} */}

{/* <button onClick={dynamicimport}>todoList</button> */}

   {/* <Suspense  fallback={<span class="loader">loadi</span>}>
    <Load/>
   </Suspense> */}

   {/* <ConstProvider>
    <Cart/>
    <Product/>
   </ConstProvider> */}


  </>
)
}
export default App
