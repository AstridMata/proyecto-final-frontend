import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useContext} from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const FantasyBooks = () => {
    const{store} = useContext(Context);
    console.log(store.fantasy);

    const config = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
        <Slider {...config}>
        {store.fantasy.map((item, i) => {
          return (
            <div key={item.id} className="row row-cols-1">
              <div className="col">
                <div className="card h-100">
                  <div className="card text-white fs-6 fw-bold border-0 bg-transparent">
                    { item.volumeInfo.imageLinks?.thumbnail === undefined ? <img
                      src="https://images-na.ssl-images-amazon.com/images/I/41pKN5tH01S._SX258_BO1,204,203,200_.jpg"
                      className="card-img"
                      alt="..."
                    />: <Link to={"/cardetails/" + item.id}> <img
                    src={item.volumeInfo.imageLinks?.thumbnail}
                    className="card-img"
                    alt="..."
                  /> </Link>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      );
}
 
export default FantasyBooks;