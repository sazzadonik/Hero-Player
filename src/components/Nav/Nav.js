import React from 'react';
import "./Nav.css";
import logo from "../../Chattogram_Challengers.png";
const Nav = () => {
    return (
        <div className="topnav">
            <div className="navContainer">
            <div className = "logo">
                <img src={logo}  height="50px"/>
                <a href="/">HeroTeam</a>
            </div>
            <div className = "linkButton">
                <a href="/" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#about" class="icon">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            </div>
        </div>
    );
};

export default Nav;