import React from "react";
import HomePage from "../components/HomePage";
import avatar from "../components/imgs/avatar.png";

function DashBoard = ()=>{
    return(
        <div>
            <img src={avatar} alt="avatar" width="128px" height="128px"></img>
            <HomePage />
            
        </div>
    );
}