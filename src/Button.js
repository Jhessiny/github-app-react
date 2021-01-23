"use strict";

import React from "react";

const Button = (props) => (
  <button onClick={props.changeColor}>{props.cor}</button>
);

export default Button;
