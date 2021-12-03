import React, {useContext,useEffect} from "react";
import KidsBooks from "../components/KidsBooks";
import { Context } from "../store/appContext";

const Home = () => {

    const {store, actions} = useContext(Context);

    useEffect(()=>{
        actions.loadKidsBooks()
    },[])


    return ( 
        <>
        <h2>Kids Books</h2>
        <KidsBooks/>
        </>
     );
}
 
export default Home; 