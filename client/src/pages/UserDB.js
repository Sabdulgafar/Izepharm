import React from "react";
import '../App.css';
import { LeftSideBar } from "../components/left-side-bar";
import { Transact } from "../components/transact";
import { Inventory } from "../components/inventory";
// import Navbar from "../components/Navbar";
// import avatar from "../components/imgs/avatar.png";
import { Tray } from "../components/tray";

export const UserDB = ()=>{
    return(
        <div className="dashboard-frame">
            <LeftSideBar />
            <Inventory />
            <Transact />
            <Tray />
        </div>
    );
}