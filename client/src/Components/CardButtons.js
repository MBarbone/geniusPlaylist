import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Favorite from "@material-ui/icons/Favorite";
import Clear from "@material-ui/icons/Clear";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    position: "relative",
    top: "285px",
    width: "400px",
    height: "50PX",
  },
}));

export const CardButtons = ({ suggestedMusic }) => {
  const classes = useStyles();
  console.log(suggestedMusic, "start");
  let likedSongs = [];
  let dislikedSongs = [];

  const likedSong = () => {
    const song = suggestedMusic.pop();
    suggestedMusic.slice(0, suggestedMusic.length - 1);

    likedSongs.push(song);
    console.log(likedSongs);
    console.log(suggestedMusic);
  };

  const dislikedSong = () => {
    const song = suggestedMusic[0];

    dislikedSongs.push(song);
    console.log(dislikedSongs);
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="primary"
        aria-label="dislike"
        component="span"
        onClick={() => {
          dislikedSong();
        }}
      >
        <Clear fontSize="large" />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="favorite"
        component="span"
        onClick={() => {
          likedSong();
        }}
      >
        <Favorite fontSize="large" />
      </IconButton>
    </div>
  );
};
