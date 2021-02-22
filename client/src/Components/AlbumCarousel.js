import React from "react";
import Coverflow from "react-coverflow";
import { CardButtons } from "./CardButtons";

// import { makeStyles, useTheme } from "@material-ui/core/styles";

// import IconButton from "@material-ui/core/IconButton";
// import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import SkipNextIcon from "@material-ui/icons/SkipNext";

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

export const AlbumCarousel = (props) => {
  // const classes = useStyles();
  // const theme = useTheme();
  return (
    <div>
      {/* <Coverflow
        width={1060}
        height={580}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
      > */}
      {props.suggestedMusic.map((item) => {
        return (
          item.preview_url && (
            <img
              src={item.album.images[0].url}
              alt="Album one"
              data-action="https://facebook.github.io/react/"
            />
          )
        );
      })}
      {/* </Coverflow> */}
      <CardButtons />
    </div>
  );
};
