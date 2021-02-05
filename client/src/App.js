import "./App.css";
import React, { Component } from "react";
import queryString from "query-string";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
      },
    };
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken) return;
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          user: {
            name: data.display_name,
          },
        })
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.user && (
          <div>
            <h1 style={{ "font-size": "54px" }}>
              {this.state.user.name}'s Playlists
            </h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
