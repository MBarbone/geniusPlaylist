import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: "0 20px 20px 20px",
  },
  media: {
    height: 0,
    paddingTop: "70%",
  },
}));

export default function TopArtistCard(props) {
  const classes = useStyles();
  const [selected, isSelected] = useState(false);

  return (
    <Card className={classes.root}>
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
