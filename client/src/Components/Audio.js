import React from "react";

export const Audio = (props) => {
  return (
    <div>
      {props.suggestedMusic.map((item) => {
        return (
          <figure>
            <figcaption>
              {item.artists[0].name}- {item.name}
            </figcaption>
            <audio controls src={item.preview_url}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
        );
      })}
    </div>
  );
};
