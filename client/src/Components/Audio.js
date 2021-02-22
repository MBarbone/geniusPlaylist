import React from "react";

export const Audio = (props) => {
  return (
    <div>
      {props.suggestedMusic.map((item) => {
        return (
          item.preview_url && (
            <figure>
              <figcaption>Listen to the T-Rex:</figcaption>
              <audio controls src={item.preview_url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
          )
        );
      })}
    </div>
  );
};
