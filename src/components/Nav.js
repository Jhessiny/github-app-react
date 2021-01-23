"use strict";

import React from "react";

const Nav = ({ handleSearch }) => {
  return (
    <header className="Nav">
      <div className="search">
        <input
          type="search"
          placeholder="Digite um nome de usuario"
          // onChange={(e) => {
          //   console.log("change", e.target.value);
          // }}
          onKeyUp={handleSearch}
        />
      </div>
    </header>
  );
};

export default Nav;
