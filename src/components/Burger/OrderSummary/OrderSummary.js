import React from "react";

import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout? </p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinueHandler}>
        CONTINUE
      </Button>
    </Auxx>
  );
};

export default OrderSummary;
