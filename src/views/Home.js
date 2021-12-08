import React, {useContext,useEffect} from "react";
import KidsBooks from "../components/KidsBooks";
import { Context } from "../store/appContext";
import FantasyBooks from "../components/FantasyBooks";
import ThrillerBooks from "../components/ThrillerBooks";
import RomanceBooks from "../components/RomanceBooks";

const Home = () => {

    const {store, actions} = useContext(Context);

    useEffect(()=>{
        actions.loadKidsBooks();
        actions.loadFantasyBooks();
        actions.loadThillerBooks();
        actions.loadRomanceBooks();
    },[])


    return (
      <>
        <div className="row gradient">
        <div className="container border-0 ms-5 mt-5 upcoming">
          <h4 className="text-danger fw-bold">Romance-Books</h4>
            <RomanceBooks /> 
          </div>
        <div className="container border-0 ms-5 mt-5 upcoming">
          <h4 className="text-danger fw-bold">Thriller-Books</h4>
            <ThrillerBooks /> 
          </div>
          <div className="container border-0 ms-5 mt-5 upcoming">
          <h4 className="text-danger fw-bold">Fantasy-Books</h4>
            <FantasyBooks />
          </div>
          <div className="container border-0 ms-5 mb-5 mt-5 upcoming">
            <h4 className="text-danger fw-bold">Kids-Books</h4>
            <KidsBooks /> 
          </div>
        </div>
      </>
    );
}
 
export default Home; 