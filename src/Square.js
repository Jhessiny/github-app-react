"use strict";

import React from "react";

const Square = ({ color }) => {
  color = "turquoise";
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100px",
        width: "100px",
        display: "inline-block",
        margin: "10px",
      }}
      onClick={(e) => {
        console.log("clicou", color);
      }}
    />
  );
};

Square.defaultProps = {
  color: "purple",
};

export default Square;
