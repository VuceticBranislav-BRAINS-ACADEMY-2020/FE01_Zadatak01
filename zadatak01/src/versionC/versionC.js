/********************************************************************************
  
  Contains onClick event handler for button. Event handler call fetchPatch
  that may throw error. If data is retrived from server, display word with
  phonetics and other details.
  
********************************************************************************/

import React from "react";
import ReactDOM from "react-dom";
import { fetchPatch } from "../common/utils";
import { ErrorElement } from "../elements/ErrorElement";
import { ListAll } from "./ListAll";

const versionC = async () => {
    // Clear OutputC element
    ReactDOM.render(<div></div>, document.getElementById("OutputC"));

    // Preparing target end-point path and variable initialization
    let apiAddress = document.getElementById("inputAddress").value.trim();
    let word = document.getElementById("inputC").value.trim();
    let path = `${apiAddress}${word}`;
    let result = null;

    // Fetch data from server in JSON format ...
    await fetchPatch(path)
        // ... then prepare result for render
        .then((data) => {
            result = <ListAll aData={data} />;
        })
        // ... or prepare catched error for render
        .catch((e) => {
            result = <ErrorElement aMessage={e.message} />;
        });

    // Render elements
    ReactDOM.render(result, document.getElementById("OutputC"));
};

export { versionC };
