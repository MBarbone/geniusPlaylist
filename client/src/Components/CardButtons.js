import React from "react";
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

export const CardButtons = ({ suggestedMusic, setSuggestedMusic }) => {
  const classes = useStyles();
  let likedSongs = [];
  let dislikedSongs = [];

  const likedSong = () => {
    const newMusic = [...suggestedMusic];
    const song = newMusic.pop();
    newMusic.slice(0, newMusic.length - 1);

    likedSongs.push(song);

    setSuggestedMusic(newMusic);
  };

  const dislikedSong = () => {
    const newMusic = [...suggestedMusic];
    const song = newMusic.pop();
    newMusic.slice(0, newMusic.length - 1);

    dislikedSongs.push(song);

    setSuggestedMusic(newMusic);
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
