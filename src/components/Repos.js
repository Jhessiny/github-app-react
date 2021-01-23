"use strict";

import React from "react";

const Repos = ({ title, repos }) => {
  return (
    <div className="repos">
      <h2>{title}</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.html_url}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Repos.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   repos: React.PropTypes.array,
// };

export default Repos;
