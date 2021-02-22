import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Favorite from "@material-ui/icons/Favorite";
import Clear from "@material-ui/icons/Clear";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

export const CardButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton color="primary" aria-label="dislike" component="span">
        <Clear fontSize="large" />
      </IconButton>
      <IconButton color="primary" aria-label="favortie" component="span">
        <Favorite fontSize="large" />
      </IconButton>
    </div>
  );
};
