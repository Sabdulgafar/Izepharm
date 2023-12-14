import React from 'react';
import '../App.css';

export const Inventory = ()=>{
    return(
        <div className='inventory-section'>
            <div>
                <h1 className='dashboard-title'>Inventory Management</h1>
                <div className='inventory-overview'>
                    <div>
                        <a href='!'>Total Products: <span id="">10</span></a>   
                    </div>
                    <div>
                        <a href='!' style={{color:'orange'}}>Low Stock: <span id="">12</span></a>   
                    </div>
                    <div>
                        <a href='!' style={{color:'red'}}>Out of Stuck: <span id="">3</span></a>   
                    </div>
                    <div>
                        <a href='!'>Supplies: <span id="">7</span></a>   
                    </div>
                </div>
            </div>
        </div>
    );
};