"use strict";

import React from "react";

const Nav = (props) => {
  return <button onClick={props.clickHandler}>{props.children}</button>;
};

export default Nav;
