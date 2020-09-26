import React, { Component } from "react";

import Auxx from "../../hoc/Auxx";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  //constructor(props) {}
  state = {
    ingrediants: {
      salad: 0,
      bacon: 0,
      chesse: 0,
      meat: 0,
    },
  };
  render() {
    return (
      <Auxx>
        <Burger ingrediants={this.state.ingrediants} />
        <BuildControls />
      </Auxx>
    );
  }
}

export default BurgerBuilder;
