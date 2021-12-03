
import React, {useContext} from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Card = (props) => {

    const{store} = useContext(Context);

    return (
        <div className="card-columns col-4" style={{ width: "18rem" }}>
          <div className="carta">
          <img
          src={props.image}
          className="card "
          alt="..."
        />
            <div className="card-body">  
                <h6 className="card-title">{props.title}</h6>
            </div>
          </div>
        </div>
      );

   
  } 
export default Card;


