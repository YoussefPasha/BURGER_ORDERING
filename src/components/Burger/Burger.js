import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingrediants).map((igKey) => {
    return [...Array(props.ingrediants[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + 1} type={igKey} />;
    });
  });
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-up" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
