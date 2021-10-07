import React from 'react';
import GroceryList from './GroceryList.jsx';
var GroceryItem = (props) => (
  <div>
  <li>
    <span>{props.groceryItem.name + ' -'}</span>
    <span>{props.groceryItem.quantity}</span>
  </li>
 </div>
);


export default GroceryItem;