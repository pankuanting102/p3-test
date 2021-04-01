/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../../assets/Login@2x.png";
import "./index.css";

function Nav({ logout }) {

  return (
    <nav className="topnav">

      <div>
        <Link to="/" className="nav-left" style={{ color: "#0B4245" }}>
          WASTE OF TIME
        </Link>

        <Link to="/login" >
          <img src={Login} alt="login" className="login" />
        </Link>
{/* 
        <Link to="/" >                                                                                                                                                                                                                                                                                                                                                                                                                                 

          <button onClick={() => { logout() }} >Logout</button>

        </Link> */}

      </div>
    </nav>
  );
}

export default Nav;
