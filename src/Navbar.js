import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Navbar() {
  const [show, handleShow] = useState([]);
  //const [user, setUser] = useStateValue([]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  /*const login = () => {
    if (user) {
      auth.signOut();
    }
  };*/

  return (
    <div className="nav">
      {show === true ? (
        <div className="nav_black">
          <img
            className="nav_logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
          />
          <div className="login">
            <h2>Sign In</h2>
          </div>
        </div>
      ) : (
        <div className="nav_high">
          <img
            // src="https://www.freeiconspng.com/uploads/netflix-icon-23.ico"
            alt="My Icon"
            className="icon"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          />
          <div className="login">
            <h2>Sign In</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
