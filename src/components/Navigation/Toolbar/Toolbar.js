import React from "react";
import NavigationITems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => (
  <header className="Toolbar">
    <div>Menu</div>
    <Logo />
    <NavigationItems />
  </header>
);

export default Toolbar;
