import React, { useState } from "react";
import * as R from "ramda";
import logo from "./logo.svg";
import { Timeline } from "./components/Timeline";
import { ReleaseBox } from "./components/ReleaseBox";
import "./App.css";
import Container from "@material-ui/core/Container";

const releases = [
  { label: "R", release: "21.000", oldDevelop: "22.0", sp: "21.100" },
  { label: "H", release: "21.001", oldDevelop: "22.0", sp: "21.100" },
  { label: "H", release: "21.002", oldDevelop: "22.0", sp: "21.100" },
  { label: "SP", release: "21.100", oldDevelop: "22.0", sp: "-" },
  {
    day: 0,
    release: "22.000",
    label: "R",
    oldDevelop: "23.0",
    newDevelop: "22.0",
    sp: "22.100"
  },
  {
    day: 2,
    release: "22.001",
    label: "HF",
    oldDevelop: "23.0",
    newDevelop: "22.001",
    sp: "22.100"
  },
  {
    day: 7,
    release: "22.002",
    label: "HF",
    oldDevelop: "23.0",
    newDevelop: "22.002",
    sp: "22.100"
  },
  {
    day: 10,
    release: "22.003",
    label: "HF",
    oldDevelop: "23.0",
    newDevelop: "22.003",
    sp: "22.100"
  },
  {
    day: 45,
    release: "22.100",
    label: "SP",
    oldDevelop: "23.0",
    newDevelop: "22.100",
    sp: "22.100"
  },
  {
    day: 50,
    release: "22.101",
    label: "HF",
    oldDevelop: "23.0",
    newDevelop: "22.101"
  },
  {
    day: 90,
    release: "23.0",
    label: "R",
    oldDevelop: "24.0",
    newDevelop: "23.0",
    sp: "24.100"
  }
];

function App() {
  const [value, setValue] = useState(0);
  const update = (e, v) => setValue(v);
  const release = releases[value];
  const rows = releases.map((release, i) => {
    var className = i == value ? "active" : "";

    return (
      <tr onClick={() => setValue(i)} className={className}>
        <td>{release.oldDevelop}</td>
        <td>{release.release}</td>
      </tr>
    );
  });
  return (
    <div className="App">
      <div className="ReleaseBoxes">
        <ReleaseBox label="Released" text={release.release}></ReleaseBox>
        <ReleaseBox label="Master" text={release.release}></ReleaseBox>
        <ReleaseBox label="Develop" text={release.release}></ReleaseBox>
      </div>
      <div className="Timeline">
        <Timeline value={value} onChange={update} releases={releases} />
      </div>
      <div className="ReleaseBoxes">
        <ReleaseBox label="Released" text={release.release}></ReleaseBox>
        <ReleaseBox label="Master" text={release.release}></ReleaseBox>
        <ReleaseBox label="Develop" text={release.oldDevelop}></ReleaseBox>
        <ReleaseBox label="ServicePack" text={release.sp ?? "-"}></ReleaseBox>
      </div>
      <div className="Right">
        Develop Version
        <table className="VersionTable">
          <tr>
            <th>Old</th>
            <th>New</th>
          </tr>
          {rows}
        </table>
      </div>
    </div>
  );
}

export default App;
