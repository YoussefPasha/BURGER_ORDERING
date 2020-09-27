import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Auxx from "../../hoc/Auxx";
import "./Layout.css";
const Layout = (props) => (
  <Auxx>
    <div>
      <Toolbar />
    </div>
    <main className="Content">{props.children}</main>
  </Auxx>
);

export default Layout;
