import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import landingPg from "./screens/landingPg"
import ProductDetails from "./screens/ProductDetails/ProductDetails"
import Category from "./screens/Category/Category";
import Cart from "./screens/Cart/Cart";
import Wishlist from "./screens/Wishlist/Wishlist"
import Home from './screens/HomePage/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<landingPg />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/ProductDetails" element={<ProductDetails />} />
          <Route exact path="/Category" element={<Category />} />
          {/* <Route exact path="/ProductDetails" element={<ProductDetails />} /> */}
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/Wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
