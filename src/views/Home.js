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
        <div className="container border-0 mt-5 mb-5 ms-4 upcoming">
          <h2 className="text-danger fw-bold">Romance-Books</h2>
            <RomanceBooks /> 
          </div>
        <div className="container border-0 mt-5 mb-5 ms-4 upcoming">
          <h2 className="text-danger fw-bold">Thriller-Books</h2>
            <ThrillerBooks /> 
          </div>
          <div className="container border-0 mt-5 mb-5 ms-4 upcoming">
          <h2 className="text-danger fw-bold">Fantasy-Books</h2>
            <FantasyBooks />
          </div>
          <div className="container border-0 mt-5 mb-5 ms-4 upcoming">
            <h2 className="text-danger fw-bold">Kids-Books</h2>
            <KidsBooks />
          </div>
        </div>
      </>
    );
}
 
export default Home; 