import React from "react";
import ReactDOM from "react-dom";
import { fetchPatch } from "../common/utils";
import { versionB_PhoneticsList } from "../versionB/main";

const versionC_addDefinitions = (definitions) => {
  // Meaning in enumerated list of definitions and examples
  return (
    <li>
      {definitions.definition}
      <br /> Example: <i>{definitions.example}</i>
    </li>
  );
};

const versionC_addMeaning = (meaning, word) => {
  // Return list item that contains word followed by partOfSpeech and definitions
  return (
    <li>
      {" "}
      <b>{word}</b>, {meaning.partOfSpeech.charAt(0)}.
      <ol type="a">
        {meaning.definitions.map((x) => versionC_addDefinitions(x))}
      </ol>
    </li>
  );
};

const versionC_addMeanings = (meanings, word) => {
  // Meanings in enumerated list of definitions and examples
  return <ol type="I">{meanings.map((x) => versionC_addMeaning(x, word))}</ol>;
};

const versionC_addListItem = (data) => {
  // Meaning in enumerated list of definitions and examples
  return (
    <li>
      <b>{data.word}</b>
      {versionB_PhoneticsList(data.phonetics)}
      <br />
      <u>Origin:</u> {data.origin}
      {versionC_addMeanings(data.meanings, data.word)}
    </li>
  );
};

const versionC_addList = (data) => {
  // Return list that contains all elements enumerated in one list
  return <ol>{data.map((x) => versionC_addListItem(x))}</ol>;
};

const versionC = async () => {
  // Clear OutputC element
  ReactDOM.render(<div></div>, document.getElementById("OutputC"));

  // Preparing target end-point path and variable initialization
  let apiAddress = document.getElementById("inputAddress").value.trim();
  let word = document.getElementById("inputC").value.trim();
  let path = `${apiAddress}${word}`;
  let result = "";

  // Fetch data from server in JSON format ...
  await fetchPatch(path)
    // ... then prepare result for render
    .then((data) => {
      result = versionC_addList(data);
    })
    // ... or prepare catched error for render
    .catch((e) => {
      result = e.message;
    });

  // Render elements
  ReactDOM.render(<div>{result}</div>, document.getElementById("OutputC"));
};

export { versionC };
