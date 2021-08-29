/********************************************************************************
  
  Contains onClick event handler for button. Event handler call fetchPatch
  that may throw error. If data is retrived from server, display word with
  phonetics.
  
********************************************************************************/

import React from "react";
import ReactDOM from "react-dom";
import { fetchPatch } from "../common/utils";
import { ErrorElement } from "../elements/ErrorElement";
import { PhoneticList } from "./PhoneticList";

const versionB = async () => {
    // Clear OutputB element
    ReactDOM.render(<div></div>, document.getElementById("OutputB"));

    // Preparing target end-point path and variable initialization
    let apiAddress = document.getElementById("inputAddress").value.trim();
    let word = document.getElementById("inputB").value.trim();
    let path = `${apiAddress}${word}`;
    let result = null;

    // Fetch data from server in JSON format ...
    await fetchPatch(path)
        // ... then prepare list of phonetics
        .then((data) => {
            result = <PhoneticList aData={data} />;
        })
        // ... or prepare catched error for render
        .catch((e) => {
            result = <ErrorElement aMessage={e.message} />;
        });

    // Render elements
    ReactDOM.render(result, document.getElementById("OutputB"));
};

export { versionB };
