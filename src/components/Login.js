import React from 'react';
import { Link } from "react-router-dom";
import react, {useState} from 'react';
import {Redirect} from 'react-router';
import axios from 'axios';

const Form = () => {
    const [email, setEmail]= useState('');
const [password,setPassword]= useState ('');
const [auth,setAuth]= useState(false);

function handleSubmit(e) {
    e.preventDefault()
    console.log(email,password);

    axios.post('http://localhost:8080/setting/login',{
        email:email,
        password:password
        })
        .then(function(response){
        if(response.status ===200){
        setAuth(true)
        localStorage.setItem('token',response.data.token)
        }
        console.log(response);
        })
        .catch(function(error){
        console.log(error);
        });
        
}    


    return ( 
        <>
        {auth?<Redirect to='/Details'/>:
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
 
export default Form; 
