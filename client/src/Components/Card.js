import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: "0 20px 20px 20px",
    "&:hover": {
      border: "5px solid red",
    },
  },
  media: {
    height: 0,
    paddingTop: "70%",
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

  const onClick = (e) => {
    toggle();
    console.log(e.currentTarget.id, isToggled);
  };

  return (
    <Card className={classes.root} onClick={toggle} id={props.id}>
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
