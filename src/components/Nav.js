"use strict";

import React from "react";

const Nav = ({ handleSearch, isFetching }) => {
  return (
    <header className="Nav">
      <div className="search">
        <input
          focus
          type="search"
          placeholder="Digite um nome de usuario"
          // onChange={(e) => {
          //   console.log("change", e.target.value);
          // }}
          onKeyUp={handleSearch}
          disabled={isFetching}
        />
      </div>
    </header>
  );
};

export default Nav;
