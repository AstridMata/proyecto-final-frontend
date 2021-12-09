import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";



const Register = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (email === "" || pass === "") {
            alert("El correo y la contraseña son requeridos");
        }
        console.log(email, pass);

        // FETCH
        const data = { email: email, password: pass };

        fetch("http://localhost:8080/setting/users", {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Success:", data);
                setRedirect(true);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    return (

        <div className="login-box">
            <h1>Registrarse</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Email </label>
                <input type="email" id="floatingInput" placeholder="nombre@dominio.com" onChange={e => setEmail(e.target.value)} />
                <label>Password </label>
                <input type="password"id="floatingPassword"placeholder="Contraseña"
                onChange={e => setPass(e.target.value)} />
                <label>Confirm Password </label>
                <input type="password" />
                <Link className="nav-link" to="/setting/login" input type="submit" value="Log In">Register</Link> 
            </form>
            {redirect ? <Redirect to="/setting/login" /> : ""}
        </div>
    );

}

export default Register;