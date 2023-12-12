import React from "react";
import '../App.css';
// import Navbar from "../components/Navbar";
import banna from "../components/imgs/banna.jpg";

export const Home = ()=>{
    return(
        <div >
            <div className="container" style={{backgroundImage:`url(${banna})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                            width: "300px",
                                            height: "300px",
                                            borderTopRightRadius: "30px",
                                            borderBottomRightRadius: "30px",
                                            borderBottomLeftRadius: "30px",
                                            marginTop: "1.75rem",
                                            filter: "blur(2px)",
                                            WebkitBackdropFilter: "blur(2px)",
            }}></div>
            <div className="bg-text">
                <h1>Hello world</h1>
            </div>
        </div>
    );
}