import React from 'react';
import '../App.css';
import Logo from '../components/imgs/ize.png';

export const LeftSideBar = ()=>{
    return(
        <div>
            <div className="leftSideBar">
                <img src={Logo} alt='logo' width="36px" height="36px"/>
                <h2>Ize Pharm</h2>
                <hr />
                <a href='/' className='db'>Dashboard</a>
                <a href='/'>Online Users</a>
                <a href='/'>Inventory</a>
                <a href='/'>Transactions</a>
                <a href='/' className='logout'>Logout</a>
            </div>
        </div>
    );
};