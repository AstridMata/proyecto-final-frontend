import React, {useContext,useEffect} from 'react';
import { useParams } from 'react-router';
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';


const Cardetails = () => {

    const {store, actions} = useContext(Context);
    console.log(store.details);
    const {id}= useParams();

    useEffect(()=>{
        actions.loadDetails(id);
    },[])

    return (
            <div>
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={store.details?.volumeInfo.imageLinks.thumbnail} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{store.details?.volumeInfo.title}</h5>
                <p className="card-text">
                  {store.details?.volumeInfo.authors}
                </p>
                <Link to="/"><button type="button" className="btn btn-outline-danger mt-5">Volver</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cardetails;
