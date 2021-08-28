import React from "react";
import ReactDOM from "react-dom";
import { fetchPatch } from "../common/utils";

const versionA = async () => {
  // Clear OutputA element
  ReactDOM.render(<div></div>, document.getElementById("OutputA"));

  // Preparing target end-point path and variable initialization
  let apiAddress = document.getElementById("inputAddress").value.trim();
  let word = document.getElementById("inputA").value.trim();
  let path = `${apiAddress}${word}`;
  let result = "";

  // Fetch data from server in JSON format ...
  await fetchPatch(path)
    // ... then prepare result for render
    .then((data) => {
      result = JSON.stringify(data);
    })
    // ... or prepare catched error for render
    .catch((e) => {
      result = e.message;
    });

  // Render elements
  ReactDOM.render(<div>{result}</div>, document.getElementById("OutputA"));
};

export { versionA };
