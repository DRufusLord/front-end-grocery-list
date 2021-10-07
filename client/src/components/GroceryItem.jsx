import React from 'react';
import GroceryList from './GroceryList.jsx';
var GroceryItem = (props) => (
  <div>
  <li>
    <span>{props.groceryItem.name + ' -'}</span>
    <span>{props.groceryItem.quantity}</span>
    <button onClick={() => {props.click(props.groceryItem.name);}}>delete</button>
  </li>
 </div>
);


export default GroceryItem;