import React from "react";
import "./Header.css"
import logo from '../assets/logo.jpg'
// import { FaSearch } from "react-icons/fa";


function Header(){
    return(
       
    <div className="header">
       <img src={logo} className="logo" alt="logo"></img>
       <h1 className="appName">Quickly notes</h1>
    </div>
    )
}

export {Header}