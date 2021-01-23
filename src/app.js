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
      isFetching: false,
    };
  }

  handleSearch = (e) => {
    const value = e.target.value;
    const keycode = e.which || e.keyCode;
    const ENTER = 13;

    if (keycode === ENTER) {
      // e.target.disabled = true;
      this.setState({
        isFetching: true,
      });
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
            repos: [],
            starred: [],
          });
          console.log(result.repos_url);
        })
        .always(() => {
          this.setState({
            isFetching: false,
          });
        });
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
      .get(
        `https://api.github.com/users/${this.state.userInfo.userName}/starred`
      )
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
        <Nav
          handleSearch={this.handleSearch}
          isFetching={this.state.isFetching}
        />
        <div className="container">
          {this.state.isFetching && (
            <div class="sk-chase">
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
            </div>
          )}
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
