import React, { Component } from "react";

import Auxx from "../../hoc/Auxx";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
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
    purchaseable: false,
    purchasing: false,
  };

  updatePurchaseState(ingrediants) {
    const sum = Object.keys(ingrediants)
      .map((igKey) => {
        return ingrediants[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

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

    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("CONTINUE !!");
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
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingrediants={this.state.ingrediants}
            price={this.state.totalPrice}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinueHandler={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingrediants={this.state.ingrediants} />
        <BuildControls
          ingrediantsAdded={this.addIngredientHandler}
          ingrediantsRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
          purchaseable={this.state.purchaseable}
        />
      </Auxx>
    );
  }
}

export default BurgerBuilder;
