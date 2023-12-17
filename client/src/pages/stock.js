import React from 'react';
import '../App.css';
import { LeftSideBar } from '../components/left-side-bar';

export const Stock = ()=>{
    return(
        <div className='dashboard-frame'>
            <LeftSideBar />
            <h1 className='dashboard-title' style={{paddingLeft: "17rem"}}>Stock Record</h1>
            <div className='stocks'>
            <ol>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="9" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="3" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="9" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="9" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="9" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="9" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="0" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="9" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="0" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
            </li>
            <li>
                <label for="disk_c">Product 1</label>
                <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
            </li> 
            </ol>
            </div>
        </div>
    );
};