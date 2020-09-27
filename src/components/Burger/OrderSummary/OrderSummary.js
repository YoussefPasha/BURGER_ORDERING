import { object } from "prop-types";
import React from "react";

import Auxx from "../../../hoc/Auxx";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingrediants).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingrediants[igKey]}
      </li>
    );
  });
  return (
    <Auxx>
      <h3>Your Orders</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout? </p>
    </Auxx>
  );
};

export default OrderSummary;
