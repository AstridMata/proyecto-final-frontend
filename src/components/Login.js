import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import {Redirect} from 'react-router';
import { Context } from '../store/appContext';

const Login = () => {
    const [email, setEmail]= useState('');
const [password,setPassword]= useState ('');
const { store,actions } = useContext(Context);

function handleSubmit(e) {
    e.preventDefault()
    actions.login(email,password);}

    
    return ( 
        <>
       {store.auth ?<Redirect to='/Details'/>:
        <div className="login-box"> 
            <h1>logo</h1>
         <form onSubmit={handleSubmit}>
        <label>Email </label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}  />
        <label>Password </label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}   />
        <Link className="nav-link" to="/setting/register" input type="submit" value="Log In">Don't have An account?</Link>
        <Link className="nav-link" to="/setting/recoverPassword" input type="submit" value="Log In">Forget your password?</Link>
        <input type="submit" value="Log In"></input>
      </form>
        
      </div> 
      }
      </> 
     );
}
 
export default Login; 
