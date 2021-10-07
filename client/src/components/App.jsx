import React from 'react';
import groceriesData from '../data/groceriesData.js';
import GroceryList from './GroceryList.jsx';

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      groceryList: groceriesData
    };

  }

  render() {

    return (
      <div>
          <img src="grocery-bags.png" />
          <h1>Grocery List</h1>
          <form>
            <label> Item
              <input name="item" value="" />
            </label>
            <label> Quantity
              <input name="quantity" value="" />
            </label>
            <button>Add Grocery</button>
            <GroceryList list={this.state.groceryList}/>
          </form>
      </div>
      );
  }

}

export default App;