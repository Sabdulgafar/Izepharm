import React from "react";
import '../App.css';
import addItem from "./additem";

export const Tray=() => {
    return(
        <div className="tray">
            <h2>Make Transaction</h2>
            <form>
                <fieldset>
                    <legend>Add Item</legend>
                    <label for="item">Item</label>
                    <input type="text" name="item" placeholder="Item name..." maxLength={15}/>
                    <br />
                    <label for="quantity">Quantity</label>
                    <input type="number" name="quantity" placeholder="Quantity" maxLength={5}/>
                    <br />
                    <label for="payment">Choose payment:</label>
                    <select id="payment" name="payment">
                        <option value="Cash">Cash</option>
                        <option value="ATM Card">ATM Card</option>
                        <option value="Transfer">Transfer</option>
                    </select>
                    <br />
                    <input type="button" value={"Add item"} onClick={addItem} style={{marginRight:"15px"}}/>
                    <input type="Reset"/> 
                </fieldset>
            </form>
            <div>

            </div>
        </div>
    )
}