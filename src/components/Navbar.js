
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";

const Navbar = () => {

  const { store, actions } = useContext(Context)
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Poderío</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Details">Explore</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                { store.favoritos.length===0? <li><a className="dropdown-item" > No hay libros agregados</a></li>:    store.favoritos.map((item)=> <li><a className="dropdown-item" ><Link className="nav-link" to="/Details">{item}</Link></a></li>)}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faUser} />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" ><Link className="nav-link" to="/setting/login">login</Link></a></li>
                <li><a className="dropdown-item" ><Link className="nav-link" to="/setting/register">Register</Link></a></li>
                <li><a className="dropdown-item" ><Link className="nav-link" to="/setting/recoverPassword">Recover Password</Link></a></li>
              </ul>
              {store.auth ?
              <li className="nav-item">
                <Link className="nav-link" to="/"> <button onClick={() => actions.logout()} className="btn btn-warning" >Logout</button></Link>
              </li> : null}
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;