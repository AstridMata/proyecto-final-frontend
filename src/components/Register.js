import React from 'react';
import { Link } from "react-router-dom";


const Register = () => {

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
                <Link className="nav-link" to="/setting/login" input type="submit" value="Log In">login</Link>
                
            </form>
        </div>
    );
}

export default Register;