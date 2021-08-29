/********************************************************************************
  
  Contains onClick event handler for button. Event handler call fetchPatch
  that may throw error. If data is retrived from server, display it as simple
  stringified JSON.
  
********************************************************************************/

import React from "react";
import ReactDOM from "react-dom";
import { fetchPatch } from "../common/utils";
import { ErrorElement } from "../elements/ErrorElement";
import { SimpleJSONTextElement } from "../elements/SimpleJSONTextElement";

const versionA = async () => {
    // Prepare result variable for render
    let result = <div></div>;

    // Clear OutputA element
    ReactDOM.render(result, document.getElementById("OutputA"));

    // Preparing target end-point path
    let apiAddress = document.getElementById("inputAddress").value.trim();
    let word = document.getElementById("inputA").value.trim();
    let path = `${apiAddress}${word}`;

    // Fetch data from server in JSON format ...
    await fetchPatch(path)
        // ... then prepare result for render
        .then((data) => {
            // Data from server is in JSON format and it just need to be stringified
            result = <SimpleJSONTextElement aJSON={JSON.stringify(data)} />;
        })
        // ... or prepare catched error for render
        .catch((e) => {
            result = <ErrorElement aMessage={e.message} />;
        });

    // Render elements
    ReactDOM.render(result, document.getElementById("OutputA"));
};

export { versionA };
