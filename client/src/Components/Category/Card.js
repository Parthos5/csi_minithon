import { BsFillBagFill } from "react-icons/bs";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const [wishItems,setwishItems] = useState([]);

  function handleWishlist(title){
    // setwishItems((prevWishItems) => [...prevWishItems, title]);
    // loca
    // console.log(wishItems);
    // localStorage.setItem("wishlist")
    // let items = [title]
    // localStorage.setItem("wishlist",JSON.stringify(items));
    if(localStorage.getItem("wishlist")){
      let litems = [localStorage.getItem("wishlist")];
      let items = JSON.parse(litems);
      console.log(items)
      items.push(title);
      localStorage.setItem("wishlist",JSON.stringify(items));
    }
    // else{
    //   localStorage.setItem("wishlist",title);
    //   console.log(title)
    // }
  }
  // localStorage.setItem("cart",JSON.stringify(["U S POLO T-Shirt"]))
  function handleCart(){
    if(localStorage.getItem("cart")){
      let citems = [localStorage.getItem("cart")];
      let c_items = JSON.parse(citems);
      console.log(c_items)
      c_items.push(title);
      localStorage.setItem("cart",JSON.stringify(c_items));
    }
  }
  useEffect(() => {
    console.log(wishItems); // This will log the updated wishItems
    // You can perform other actions here
  }, [wishItems]);
  return (
    <>
    <Link to={`/productDetails?title=${title}`}>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              Rs. {newPrice}
            </div>
            <i onClick={() => handleWishlist(title)}><FaRegHeart /></i>
            <i onClick={()=> handleCart(title)}><FaShoppingCart /></i>

            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
      </Link>
    </>
  );
};

export default Card;