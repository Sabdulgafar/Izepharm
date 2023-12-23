import React from 'react';
import '../App.css';
import popTransactionTray from './popTrans';

export const Transact = ()=>{
    return(
        <div>
            <div className="Transaction-section">
                <div className='transaction-1'>
                    <h3>Transaction</h3>
                    <p>Active Transactions</p>
                    <p>Active User</p>
                    <button onClick={popTransactionTray}>Make Transaction</button>
                </div>
                <div className='minirecord-1'>
                    <h3>Mini Record</h3>
                    <table style={{width:"100%",}}>
                        <th>
                            <td>Name</td>
                            <td>Quantity</td>
                            <td>Price</td>
                        </th>
                    </table>
                </div>
            </div>
        </div>
    );
};