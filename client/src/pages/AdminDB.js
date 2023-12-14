import React from "react";
import '../App.css';
import { Inventory } from "../components/inventory";
// import { Sales } from "../components/sales";
import { LeftSideBar } from "../components/left-side-bar";

// import Navbar from "../components/Navbar";
// import avatar from "../components/imgs/avatar.png";

export const AdminDB = ()=>{
    return(
        <div className="dashboard-frame">
            <LeftSideBar />
            {/* <Sales /> */}
            <Inventory />
        </div>
    );
}
