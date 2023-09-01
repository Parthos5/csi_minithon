import "./Product.css";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
