import React, { Component } from "react";

import "./BuildControls.css";

import BuildControl from "../BuildControls/BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "chesse" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className="BuildControls">
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingrediantsAdded(ctrl.type)}
        Removed={() => props.ingrediantsRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className="OrderButton" disabled={!props.purchaseable}>
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
