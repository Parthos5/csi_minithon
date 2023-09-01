import React, { useState } from "react";
import { Link } from "react-router-dom";
import ForgotPasswordPopup from "./ForgotPasswordPopup";
import "./Login.css";
import { TfiEmail, TfiLock } from "react-icons/tfi";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordPopup(true);
  };

  const handleClosePopup = () => {
    setShowForgotPasswordPopup(false);
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const getData = (e) => {
    const { value, name } = e.target;

    setUser(() => {
      return {
        ...user,
        [name]: value
      }
    })
  }

  return (
    <>
      <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
          <div className="ImageContianer">
            <img src="https://i.imgur.com/MYZd7of.png" className="GroupImage" />
          </div>

          <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
              <header className="Loginheader">Log in</header>
              <header className="subHeader">
                Welcome to <b>BarterX!</b> Please Enter your Details
              </header>
              <div>
                <div className="inputContainer">
                  <label className="label" htmlFor="emailAddress">
                    <i>
                      <TfiEmail />
                    </i>
                    <span>Email Address*</span>
                  </label>
                  <input
                    type="email"
                    className="input"
                    id="emailAddress"
                    name="email"
                    placeholder="Enter your Email Address"
                    required
                    onChange={getData}
                  />
                </div>
                <div className="inputContainer">
                  <label className="label" htmlFor="emailAddress">
                    <i>
                      <TfiLock />
                    </i>
                    <span>Password*</span>
                  </label>
                  <input
                    type="password"
                    className="input"
                    id="emailAddress"
                    name="password"
                    placeholder="Enter your Password"
                    required
                    onChange={getData}
                  />
                </div>
                <div className="OptionsContainer">
                  <div className="checkboxContainer">
                    <input
                      type="checkbox"
                      id="RememberMe"
                      className="checkbox"
                    />
                    <label htmlFor="RememberMe">Remember me</label>
                  </div>
                  <a
                    href="#"
                    className="ForgotPasswordLink"
                    onClick={handleForgotPasswordClick}
                  >
                    Forgot Password?
                  </a>
                </div>
                <button className="LoginButton" onClick={handleSubmit}> <a href="./Category" style={{color:"#fff"}}>Login</a></button>
                <div className="HaveAnAcc">
                  <span>
                    {" "}
                    Don't have an account?{" "}
                    <Link to="/register" style={{ color: "#001451" }}>
                      Sign Up
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForgotPasswordPopup && (
        <ForgotPasswordPopup onClose={handleClosePopup} />
      )}
    </>
  );
};

export default Login;
