import React from 'react';
import groceriesData from '../data/groceriesData.js';
import GroceryList from './GroceryList.jsx';

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      groceryList: groceriesData,
      Item: '',
      quantity:''
    };

    this.deleteButton = this.deleteButton.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  deleteButton(groceryItemname) {
    var newList = this.state.groceryList.filter(item => item.name!== groceryItemname)
    this.setState({
      groceryList: newList
    })
  }

  inputChange(event) {
    //console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {

    event.preventDefault();
    if(!this.state.Item) {
      alert('Please type in Item name!');
      return;
    }
    if(!this.state.quantity) {
      alert('Please type in quantity!');
      return;
    }
    this.state.groceryList.push({
      name: this.state.Item,
      quantity: this.state.quantity
    })
    //console.log(this.state.groceryList);

    var newList = this.state.groceryList;

    this.setState({
      groceryList: newList,
      Item: '',
      quantity:''
    })

  }



  render() {

    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Item
            <input name="Item" value={this.state.Item} onChange={this.inputChange}/>
          </label>
          <label> Quantity
            <input name="quantity" value={this.state.quantity} onChange={this.inputChange}/>
          </label>
          <button>Add Grocery</button>
        </form>
        <GroceryList list={this.state.groceryList} click={this.deleteButton}/>
      </div>
      );
  }

}

export default App;