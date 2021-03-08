import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css";

export const Player = ({ previewUrl }) => {
  return (
    <AudioPlayer
      src={previewUrl}
      showJumpControls={false}
      customAdditionalControls={[]}
    />
  );
};
