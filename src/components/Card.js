
import React, {useContext} from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export const Card = (props) => {

    const{store,actions} = useContext(Context);

    console.log(store.favoritos);

    return (
        <div className="card-columns col-4" style={{ width: "18rem" }}>
          <div className="carta">
          <img
          src={props.image}
          className="card2 "
          alt="..."
        />
            <div className="card-body">  
                <h6 className="card-title">{props.title}</h6>
            </div>
            <div >
              <Link className="heart" to="/Details"><FontAwesomeIcon icon={faHeart} onClick={()=>actions.addFavoritos(props.title)} /></Link>
            </div>
          </div>
        </div>
      );

   
  } 
export default Card;


