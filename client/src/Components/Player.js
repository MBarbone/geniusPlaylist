import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

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
  controls: {
    display: "flex",
    alignSelf: "center",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Player({ suggestedMusic }) {
  const classes = useStyles();

  console.log("suggested", suggestedMusic);

  return suggestedMusic.map((song) => {
    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {song.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {song.artists[0].name}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
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
