import React, { useState, useEffect } from "react";
import queryString from "query-string";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const [user, setUser] = useState("");

  let parsed = queryString.parse(window.location.search);
  let accessToken = parsed.access_token;

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => setUser(data.images[0].url))
      .catch((error) => console.log(error));
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    // create logout call to backend
    window.location.href = "http://localhost:8888/login";
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {user ? (
          <div className={classes.root}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // return home onclick
              color="inherit"
            >
              <Avatar alt="User Avatar" src={`${user}`} />
            </IconButton>

            <Button color="inherit" onClick={(e) => handleLogout(e)}>
              Logout
            </Button>
          </div>
        ) : (
          <Button
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:8888/login";
            }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
