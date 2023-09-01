import React from "react"
import './Wishlist.css'
import db_items from "../Category/db/data"
import Navbar from "../../components/Navbar/Navbar";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
export default function Wishlist() {
    // let [products,setProducts] = useState([]);
    let products = [];
    if(localStorage.getItem("wishlist")){
        let products_ls = JSON.parse(localStorage.getItem("wishlist"));
        // console.log(products_ls)
        products_ls.forEach((itemName) =>{
            const itemInDatabase = db_items.find((item) => item.title === itemName);
            if (itemInDatabase) {
              products.push(itemInDatabase);
            }
          });
          console.log(products)
    }

    // products.map((product)=> {
        
    // })
    return (
        <>
        <Navbar/>
        <div className="wishdiv">

        <div className="headingWish">
        <FaRegHeart/> <h1>WISHLIST</h1>
        </div>
                <ul className="mystyle-products">
                {products.map((product) => (
                    <li className="product" key={product.img}>
                        <a href="#">
                            <span className="onsale">Sale!</span>
                            <img alt="" className="attachment-shop_catalog " src={product.img} style={{minWidth:"150px"}} />
                            <h3>{product.title}</h3>
                            <span className="price">
                                <del> <span className="amount">{product.prevPrice} ₫</span> </del>
                                <ins> <span className="amount">{product.newPrice} ₫</span> </ins>
                                <span className="sale-tag sale-tag-square">-33%</span>
                            </span>
                        </a>
                        <a className="button add_to_cart_button product_type_simple" rel="nofollow" href="#">
                            Add to cart
                        </a>
                        <a href="#" className="btn btn-dark btn-circle btn-review" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion ion-ios-move"></i></a>
                    </li>
                ))}
        </ul>
        </div>
</>
    )
}
