import React from 'react';
import { Link } from "react-router-dom";


const FormRegister = () => {

    return (

        <div className="login-box">
            <h1>logo</h1>
            <form>
                <label>Email </label>
                <input type="email" />
                <label>Password </label>
                <input type="password" />
                <label>Confirm Password </label>
                <input type="password" />
                <Link className="nav-link" to="/form" input type="submit" value="Log In">Register</Link>
                
            </form>
        </div>
    );
}

export default FormRegister;