import React from "react";
import '../App.css';
// import Navbar from "../components/Navbar";
import banna from "../components/imgs/banna.jpg";

export const Home = ()=>{
    return(
        <div className="container-banna">
            <div className="imagine" style={{backgroundImage:`url(${banna})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                            width: "320px",
                                            height: "320px",
                                            borderTopRightRadius: "30px",
                                            borderBottomRightRadius: "30px",
                                            borderBottomLeftRadius: "30px",
                                            marginTop: "1.75rem",
                                            filter: "blur(2px)",
                                            WebkitBackdropFilter: "blur(2px)",
            }}></div>
            <div className="bg-text">
                <h1>Ize Pharmacy Store Management App</h1>
                <p style={{fontWeight: "lighter"}}>Where all transactions are recorded</p>
                <a href="/login">Login</a>
            </div>
            <div className="clear-fix"></div>
        </div>
    );
}