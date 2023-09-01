import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./screens/HomePage/Home"
import Login from "./screens/login/Login"
import Register from "./screens/Register/Register"
import ProductDetails from "./screens/ProductDetails/ProductDetails"
import Category from "./screens/Category/Category";
import Cart from "./screens/Cart/Cart";
import Wishlist from "./screens/Wishlist/Wishlist"

import UserProfile from './screens/UserProfile/UserProfile';
// import Home from "./screens/HomePage/Home"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/ProductDetails/:title" element={<ProductDetails />} />
          <Route exact path="/Category" element={<Category />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/UserProfile" element={<UserProfile />} />
          <Route exact path="/Wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
