import React, { Fragment } from "react";
import Button from "./Button";
import Repos from "./Repos";

const User = ({ userInfo, repos, starred, getRepos, getStarred }) => {
  let userData = (
    <p style={{ textAlign: "center" }}>Digite o nome de um usuario github</p>
  );
  if (userInfo) {
    userData = (
      <div className="user-info">
        <div className="user-header">
          <img src={userInfo.photo} alt="" />
          <div className="profile-info">
            <h1>
              <a href={`https://github.com/${userInfo.login}`}>
                {userInfo.userName}
              </a>
            </h1>
            <div className="repo-info">
              <ul>
                <li>Repositorios: {userInfo.reposQ}</li>
                <li>Seguidores: {userInfo.followers}</li>
                <li>Seguindo: {userInfo.following}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="actions">
          <Button clickHandler={getRepos}>Ver Repositorios</Button>
          <Button clickHandler={getStarred}>Ver favoritos</Button>
        </div>

        <div className="user-main-content">
          {!!repos.length && <Repos repos={repos} title="Repositórios" />}
          {!!starred.length && <Repos title="Favoritos" repos={starred} />}
        </div>
      </div>
    );
  }

  return <Fragment>{userData}</Fragment>;
};

// User.propTypes = {
//   userInfo: React.PropTypes.object,
//   repos: React.PropTypes.array,
//   starred: React.PropTypes.array,
// };

export default User;
