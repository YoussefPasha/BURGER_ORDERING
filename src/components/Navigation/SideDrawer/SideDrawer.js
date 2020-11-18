import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxx from "../../../hoc/Auxx";

const sideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Auxx>
      <Backdrop show={props.open} clicked={props.closed} />
      {/* #Youssef  */}
      <div className={`${attachedClasses[0]} ${attachedClasses[1]}`}>
        <Logo height="Side" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxx>
  );
};

export default sideDrawer;
