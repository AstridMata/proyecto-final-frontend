import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import RecoverPassword from "../components/RecoverPassword"


const Setting = () => {

   

    return ( 
        <>
        <div>
       <Login/>
       <Register/>
       <RecoverPassword/>
       </div>
        </>
     );
}
 
export default Setting;