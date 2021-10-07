import React from 'react';
import GroceryItem from './GroceryItem.jsx';

var GroceryList = (props) => {
  return (
    <ul className="groceries">
    {props.list.map((item) => {
      var index = props.list.indexOf(item);
    return <GroceryItem groceryItem={item} key={index} click={props.click}/>;
  })}
  </ul>
  )
};


export default GroceryList;