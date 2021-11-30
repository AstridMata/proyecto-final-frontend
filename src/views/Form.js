import React from 'react';
import { Link } from "react-router-dom";
const Form = () => {

    return ( 
        
        <div className="login-box"> 
            <h1>logo</h1>
         <form>
        <label>Email </label>
        <input type="email" />
        <label>Password </label>
        <input type="password" />
        <Link className="nav-link" to="/formRegister" input type="submit" value="Log In">Don't have An account?</Link>
        <Link className="nav-link" to="/RecuperarContraseña" input type="submit" value="Log In">Forget your password?</Link>
        <input type="submit" value="Log In"></input>
      </form>
      </div>  
     );
}
 
export default Form; 
