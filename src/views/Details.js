import React, {useContext,useEffect} from "react";
import Card from "../components/Card";
import { Context } from "../store/appContext";

const Details = () => {
    const {store, actions} = useContext(Context);

    useEffect(()=>{
        actions.loadBooks()
    },[])

    return (
      <div className="CardDetails">
      {store.books.map((item) => (
        <Card
          title={item.volumeInfo.title}
          image={item.volumeInfo.imageLinks?.thumbnail}
          id={item.id}
        />
      ))}
      
    </div>
      );

   
}
 
export default Details; 

