import React from "react";
import BurgerControls from "./BurgerControls";
import Burger from "./Burger";
//import { db } from "../firebase";

export default class Main extends React.Component {
  state = {
    ingredients: [],
    price: {
      total: 40,
      meat: 17.5,
      chesse: 8.5,
      salad: 4,
      bacon: 19
    },
    count: {
      meat: 0,
      chesse: 0,
      salad: 0,
      bacon: 0
    }
  } 

  handleAddToCart() {
    console.log(window.localStorage);
    window.localStorage.setItem('burgers',{});
  }

  addItem(value) {
    if (this.state.count[value] < 5) {
      this.setState({
        ...this.state,
        count: {
          ...this.state.count,
          [value]: this.state.count[value] + 1,
        },
        price: {
          ...this.state.price,
          total: this.state.price.total + this.state.price[value]
        },
        ingredients: [...this.state.ingredients, value]
      });
    }
  }

  removeItem(value) {
    if (this.state.count[value] > 0) {
      const index = this.state.ingredients.indexOf(value);
      this.state.ingredients.splice(index, 1)
      this.setState({
        ...this.state,
        count: {
          ...this.state.count,
          [value]: this.state.count[value] - 1
        },
        price: {
          ...this.state.price,
          total: this.state.price.total - this.state.price[value]
        }
      })
    }
  }

  render() {
    const props = {
      ...this.state,
      addItem: this.addItem.bind(this),
      removeItem: this.removeItem.bind(this),
      handleAddToCart: this.handleAddToCart.bind(this)
    }

    return (
      <div>
        <Burger {...props} />
        <div>-----------------------------------------------------------------------------------------</div>
        <p><b>Price:</b> Rs {this.state.price.total}</p>
        <BurgerControls {...props} />
      </div>
    );
  }
}