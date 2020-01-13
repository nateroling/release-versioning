import React from "react";

export function ReleaseBox(props) {
  return (
    <div className="ReleaseBox">
      <div className="ReleaseBox__label">{props.label}</div>
      <div className="ReleaseBox__text">{props.text}</div>
    </div>
  );
}
