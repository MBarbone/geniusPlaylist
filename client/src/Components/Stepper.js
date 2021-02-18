import React, { useState, useEffect } from "react";
import queryString from "query-string";

import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import LibraryMusic from "@material-ui/icons/LibraryMusic";
import Add from "@material-ui/icons/Add";
import SaveAlt from "@material-ui/icons/SaveAlt";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import TopArtistCard from "./Card";
import Player from "./Player";

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <LibraryMusic />,
    2: <Add />,
    3: <SaveAlt />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0 0 30px 0",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
    padding: "0 30px",
  },
}));

function getSteps() {
  return ["Select artists", "Discover new music", "Save your playlist"];
}

export default function CustomStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  let parsed = queryString.parse(window.location.search);
  let accessToken = parsed.access_token;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const GetTopArtists = () => {
    const [topArtists, setTopArtists] = useState([]);
    useEffect(() => {
      fetch("https://api.spotify.com/v1/me/top/artists", {
        headers: { Authorization: "Bearer " + accessToken },
      })
        .then((response) => response.json())
        .then((data) => setTopArtists(data.items))
        .catch((error) => console.log(error));
    }, []);

    return (
      <div className={classes.container}>
        {topArtists.map((artist) => {
          return (
            <Container maxWidth="xs" key={artist.id}>
              <TopArtistCard
                key={artist.id}
                image={artist.images[0].url}
                name={artist.name}
                id={artist.id}
              />
            </Container>
          );
        })}
      </div>
    );
  };

  const GetSuggestedMusic = () => {
    const [suggestedMusic, setSuggestedMusic] = useState([]);
    console.log("made it here");
    useEffect(() => {
      fetch(
        "https://api.spotify.com/v1/recommendations?limit=2&seed_genres=rock",
        {
          headers: { Authorization: "Bearer " + accessToken },
        }
      )
        .then((response) => response.json())
        // .then((data) => console.log(data.tracks))
        .then((data) => setSuggestedMusic(data.tracks))
        .catch((error) => console.log(error));
    }, []);

    return (
      <div className={classes.container}>
        {suggestedMusic.map((track) => {
          return (
            <div className={classes.container}>
              <Container maxWidth="xs">
                <Player
                  albumCover={track.album.images[0].url}
                  albumName={track.album.name}
                  artist={track.artists[0].name}
                  song={track.name}
                />
              </Container>
            </div>
          );
        })}
      </div>
    );
  };

  //   const stepperFunctions = (activeStep) => {
  //     switch (activeStep) {
  //       case 0:
  //         GetTopArtists();
  //         break;
  //       case 1:
  //         GetSuggestedMusic();
  //         break;
  //     }
  //   };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* {stepperFunctions()} */}

      {/* {activeStep === 0 && GetTopArtists()} */}
      {activeStep === 1 && GetSuggestedMusic()}

      {activeStep === steps.length ? (
        <div>
          <Typography className={classes.instructions}></Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </div>
      ) : (
        <div>
          <Typography className={classes.instructions}></Typography>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              {activeStep === steps.length - 1 ? "Save" : "Next"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
