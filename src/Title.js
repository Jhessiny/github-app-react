"use strict";

import React from "react";

const Title = (props) => (
  <h1>
    Hey {props.name} {props.lastname.last}
    {props.age} years old
  </h1>
);

// Title.defaultProps = {
//   name: "Desconhecido2",
// };

export default Title;
