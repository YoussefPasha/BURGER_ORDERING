import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingrediants)
    .map((igKey) => {
      return [...Array(props.ingrediants[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + 1} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Start Adding ? 🧀 + 🥩 + 🥗 </p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-up" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
