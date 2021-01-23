"use strict";

import React, { Component } from "react";
import ajax from "@fdaciuk/ajax";
import Nav from "./components/Nav";
import User from "./components/User";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    };
  }

  handleSearch = (e) => {
    const value = e.target.value;
    const keycode = e.which || e.keyCode;
    const ENTER = 13;

    if (keycode === ENTER) {
      ajax()
        .get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userInfo: {
              userName: result.login,
              login: result.login,
              reposQ: result.public_repos,
              following: result.following,
              followers: result.followers,
              photo: result.avatar_url,
            },
          });
          console.log(result.repos_url);
        });
      // console.log("keyup", e.target.value);
    }
  };

  getRepos = () => {
    ajax()
      .get(`https://api.github.com/users/${this.state.userInfo.userName}/repos`)
      .then((result) => {
        this.setState({
          repos: result,
          starred: [],
        });
      });
  };

  getStarred = () => {
    ajax()
      .get(`https://api.github.com/users/${this.state.userInfo.userName}/repos`)
      .then((result) => {
        this.setState({
          starred: result,
          repos: [],
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Nav handleSearch={this.handleSearch} />
        <div className="container">
          <User
            userInfo={this.state.userInfo}
            repos={this.state.repos}
            starred={this.state.starred}
            getRepos={this.getRepos}
            getStarred={this.getStarred}
          />
        </div>
      </div>
    );
  }
}

export default App;
