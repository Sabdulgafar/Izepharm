import React from 'react';
import ize from "../components/imgs/ize.png";
import '../App.css';

const Navbar = ()=>{
    return(
        <div className="home container">
            <div class="topnav">
                <img src={ize} width="40px" height="40px" alt="Logo"/>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Navbar