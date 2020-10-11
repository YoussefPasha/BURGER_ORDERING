import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Auxx from "../../hoc/Auxx";
import "./Layout.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const Layout = (props) => (
  <Auxx>
    <div>
      <Toolbar />
      <SideDrawer />
    </div>
    <main className="Content">{props.children}</main>
  </Auxx>
);

export default Layout;
