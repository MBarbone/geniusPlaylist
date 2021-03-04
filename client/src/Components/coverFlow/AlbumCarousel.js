import React from "react";
import Coverflow from "react-coverflow";
import { CardButtons } from "./CardButtons";
import { Audio } from "./Audio";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Album } from "./Album";

import IconButton from "@material-ui/core/IconButton";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   details: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   content: {
//     flex: "1 0 auto",
//   },
//   cover: {
//     width: 151,
//   },
//   controls: {
//     display: "flex",
//     alignItems: "center",
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//   },
//   playIcon: {
//     height: 38,
//     width: 38,
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    bottom: "75px",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export const AlbumCarousel = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Coverflow
        width={1060}
        height={580}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
        infiniteScroll={true}
        active={0}
      >
        {props.suggestedMusic.map((item) => {
          return (
            <img
              src={item.album.images[0].url}
              alt="Album one"
              data-action="https://facebook.github.io/react/"
            />
          );
        })}
      </Coverflow>
      <div className={classes.controls}>
        <IconButton aria-label="previous">
          {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        <IconButton aria-label="play/pause">
          <PlayArrowIcon className={classes.playIcon} />
        </IconButton>
        <IconButton aria-label="next">
          {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
      </div>
      <CardButtons />
      <Audio suggestedMusic={props.suggestedMusic} />
    </div>
  );
};
