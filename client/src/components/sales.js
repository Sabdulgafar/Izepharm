import React from 'react';
import '../App.css';

export const Sales = ()=>{
    return(
        <div className='sales-section'>
            <div>
                <h1 className='dashboard-title'>Sales Record</h1>
            </div>
            <table>
                <tr>
                    <th>Serial Number</th>
                    <th>Product Name</th>
                    <th>Quanity</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Product 5</td>
                    <td>6</td>
                    <td>$3000</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Product 4</td>
                    <td>7</td>
                    <td>$2100</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Product 13</td>
                    <td>1</td>
                    <td>$1500</td>
                </tr>
            </table>
        </div>
    );
};