import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const Burger = (props) => {
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-up" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="chesse" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
