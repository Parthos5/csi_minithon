import React from "react"
import './Wishlist.css'
import db_items from "../Category/db/data"

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
        <ul className="mystyle-products">
        {products.map((product) => (
            <li className="product" key={product.img}>
        <a href="#">
            <span className="onsale">Sale!</span>
            <img alt="" className="attachment-shop_catalog " src="https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/v/e/vet%20vang%20(1).u2470.d20160606.t122127.jpg" />
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
    )
}
