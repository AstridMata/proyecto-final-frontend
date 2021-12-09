import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {Redirect} from 'react-router';
// import { Context } from '../store/appContext';

const Login = () => {
    const [email, setEmail]= useState("");
    const [password,setPassword]= useState ("");
    const [auth, setAuth] = useState(false);
    // const { store,actions } = useContext(Context);

function handleSubmit(e) {
    e.preventDefault()
    console.log(email,password) //ver consola
    const raw = {
        "email":email,
        "password": password
    }

    fetch('http://localhost:8080/setting/login',{
        method: 'POST',
        headers: {
            'Content-Type':'aplication/json'
        },
        body:JSON.stringify(raw)

    })
    .then((response)=>{
        console.log(response.status);
        if(response.status ===200){
            setAuth(true)
        }
        return response.json()
    })
    .then((data)=>{
        //guardo el usuario en el localStorage
        localStorage.setItem("token", data.token)
        console.log(data)
    })
    .catch((error)=>console.log(error))

    // actions.login(email,password);
    }

    
    return ( 
        <>
       {auth?<Redirect to='/details'/>:
        <div className="login-box"> 
            <h1>Inicia con tu contraseña</h1>
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
