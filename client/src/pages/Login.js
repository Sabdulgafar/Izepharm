import React from "react";
import avatar from "../components/imgs/avatar.png";
import Navbar from "../components/Navbar";
import '../App.css';

export const Login = ()=>{
    return(
        <div>
        <Navbar/>
        <div className="container login">
            <div className="avatar-section">
                <img src={avatar} alt="avatar" width="128px" height="128px"></img>
            </div>
            <label for="username"></label>
            <input type="text" placeholder="Username..." maxLength="15" id="Username"></input>
            <br />
            <label for="Password"></label>
            <input type="password" placeholder="********" maxLength="10" id="Password"></input>
            <br />
            <button id="submit">Login</button><a href="!" className="forgot-password">Forgot Password?</a>
        </div>
        </div>
    );
};