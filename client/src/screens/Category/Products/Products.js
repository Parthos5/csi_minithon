import "./Product.css";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";
const Products = ({ result }) => {
  return (
    <>
        <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
