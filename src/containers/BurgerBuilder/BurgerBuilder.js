import React, { Component } from "react";

import Auxx from "../../hoc/Auxx";

import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  //constructor(props) {}
  state = {
    ingrediants: {
      salad: 1,
      bacon: 1,
      chesse: 2,
      meat: 2,
    },
  };
  render() {
    return (
      <Auxx>
        <Burger ingrediants={this.state.ingrediants} />
        <div>Build Controls</div>
      </Auxx>
    );
  }
}

export default BurgerBuilder;
