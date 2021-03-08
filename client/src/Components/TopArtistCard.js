import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import clsx from "clsx";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: "0 25px 45px 25px",
    "&:hover": {
      transition: "all 0.2s ease-out",
      boxShadow: "0px 6px 10px rgba(50, 50, 50, 0.8)",
      top: "-4px",
      cursor: "pointer",
    },
  },
  media: {
    height: 0,
    paddingTop: "70%",
  },
  isToggled: {
    top: "-4px",
    border: "4px solid green",
    cursor: "pointer",
  },
}));

const useToggle = (initialState) => {
  const [isToggled, setIsToggled] = useState(initialState);

  // put [setIsToggled] into the useCallback's dependencies array
  // this value never changes so the callback is not going to be ever re-created
  const toggle = useCallback(() => setIsToggled((state) => !state), [
    setIsToggled,
  ]);

  return [isToggled, toggle];
};
export default function TopArtistCard(props) {
  const classes = useStyles();
  const [isToggled, toggle] = useToggle(false);
  const cardStyles = clsx({
    [classes.root]: true,
    [classes.isToggled]: isToggled,
  });

  return (
    <Card className={cardStyles} onClick={toggle} id={props.id}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.name}
      />
      <CardContent>
        <Typography variant="h5" color="textSecondary" component="h5">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
