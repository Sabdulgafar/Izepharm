import React from "react";
import '../App.css';
import Navbar from "../components/Navbar";
// import avatar from "../components/imgs/avatar.png";
import profileImage from "../components/imgs/profile-image.jpg";

export const About = ()=>{
    return(
        <div>
        <Navbar />
        <div className="container-about about">
            <img src={profileImage} width="300px" height="300px" alt="Developer profile" />
            <div className="right-side">
                <h1>Salawu <br/>AbdulGafar</h1>
                <h3>JavaScript Expert</h3>
                <p>I am an upcoming JavaScript expert, specializing on web app development and possibly web games development using JavaScript and corresponding frameworks</p>
                <a href="/">Hire Me</a>
            </div>
            <div className="clear-fix"></div>
        </div>
        </div>
    );
}