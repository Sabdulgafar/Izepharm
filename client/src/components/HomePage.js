import React from 'react';
import ize from "../components/imgs/ize.png";

const HomePage = ()=>{
    return(
        <div className="home container">
            <img src={ize} width="128px" height="128px" alt='logo'></img>
            <h1>Ize Pharmacy Store</h1>
        </div>
    );
};

export default HomePage;