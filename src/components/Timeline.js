import React from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

var startDate = new Date(2019, 11, 30);

function addDays(from, days) {
  var date = new Date(from);
  date.setDate(date.getDate() + days);
  return date.toDateString();
}

function label(day) {
  var d = addDays(startDate, day)
  return d;
}

export function Timeline(props) {

  const marks = props.releases.map((x, i) => ({ value: i, label: x.label }));

  return (
    <div>
      <Slider
        max={props.releases.length-1}
        value={props.value}
        onChange={props.onChange}
        marks={marks}
        step={null}
      />
    </div>
  );
}
