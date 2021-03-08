import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import { Player } from "./Player/Player";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    position: "absolute",
    marginTop: "50px",
    width: "450px",
    height: "226px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    width: "200px",
  },
  cover: {
    width: "inherit",
    minHeight: "226px",
  },
  playerContainer: {
    position: "absolute",
    bottom: "25px",
    width: "230px",
  },
  songTitle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
}));

export default function SuggestedCard({ suggestedMusic }) {
  const classes = useStyles();

  console.log(suggestedMusic);

  return suggestedMusic.map((song) => {
    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography
              component="h5"
              variant="h5"
              className={classes.songTitle}
            >
              {song.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {song.artists[0].name}
            </Typography>
          </CardContent>
          <div className={classes.playerContainer}>
            <Player previewUrl={song.preview_url} />
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={song.album.images[0].url}
          title={`${song.album.name} album cover`}
        />
      </Card>
    );
  });
}
