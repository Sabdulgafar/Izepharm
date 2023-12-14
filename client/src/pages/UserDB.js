import React from "react";
import '../App.css';
import { LeftSideBar } from "../components/left-side-bar";
import { Transact } from "../components/transact";
// import Navbar from "../components/Navbar";
// import avatar from "../components/imgs/avatar.png";

export const UserDB = ()=>{
    return(
        <div className="dashboard-frame">
            <LeftSideBar />
            <Transact />
        </div>
    );
}