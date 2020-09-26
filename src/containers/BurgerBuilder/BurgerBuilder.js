import React, { Component } from "react";

import Auxx from "../../hoc/Auxx";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";

const INGREDIANTS_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  chesse: 1.3,
  meat: 0.7,
};

class BurgerBuilder extends Component {
  //constructor(props) {}
  state = {
    ingrediants: {
      salad: 0,
      bacon: 0,
      chesse: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingrediants[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingrediants,
    };
    updatedIngredients[type] = updateCount;
    const priceAddition = INGREDIANTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingrediants: updatedIngredients });

    console.log(this.state.ingrediants);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingrediants[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingrediants,
    };
    updatedIngredients[type] = updateCount;
    const priceAddition = INGREDIANTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingrediants: updatedIngredients });

    console.log(this.state.ingrediants);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingrediants,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Auxx>
        <Burger ingrediants={this.state.ingrediants} />
        <BuildControls
          ingrediantsAdded={this.addIngredientHandler}
          ingrediantsRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Auxx>
    );
  }
}

export default BurgerBuilder;
