import React from "react";
import ReactDOM from "react-dom";
import { fetchPatch } from "../common/utils";

const versionB_PhoneticsList = (phonetics) => {
  // Prepare empty list of pronunciation and links
  let result = [];

  for (let i = 0; i < phonetics.length; i++) {
    // Separator is after word and it is not printed if there is no pronunciations
    let separator1 = phonetics.length > 0 ? " ‒ " : "";
    // Separator that divide multiple pronunciations for same word
    let separator2 = i === phonetics.length - 1 ? "." : ", ";

    // Return audio as hiperlink if exists
    let audio = "";
    if (phonetics[i].hasOwnProperty("audio")) {
      audio = (
        <span>
          {" "}
          <a href={phonetics[i].audio}>audio</a>
        </span>
      );
    }

    // Return IPA if exists
    let text = "";
    if (phonetics[i].hasOwnProperty("text")) {
      text = <span>/{phonetics[i].text}/</span>;
    }

    // If IPA do not exist skip all to the end and print only word
    if (text === "") {
      audio = "";
      separator1 = "";
      separator2 = "";
    }

    // Return JSX containing anything after word
    result.push(
      <span>
        {separator1}
        {text}
        {audio}
        {separator2}
      </span>
    );
  }
  return result;
};

const versionB_ItemsList = (data) => {
  // Generate one line per word meaning.
  // Each meaning is one item in list. Word is printed first followed by
  // pronunciation and link to audio if available.
  return data.map((x) => (
    <p>
      <b>{x.word}</b>
      {versionB_PhoneticsList(x.phonetics)}
    </p>
  ));
};

const versionB = async () => {
  // Clear OutputB element
  ReactDOM.render(<div></div>, document.getElementById("OutputB"));

  // Preparing target end-point path and variable initialization
  let apiAddress = document.getElementById("inputAddress").value.trim();
  let word = document.getElementById("inputB").value.trim();
  let path = `${apiAddress}${word}`;
  let result = "";

  // Fetch data from server in JSON format ...
  await fetchPatch(path)
    // ... then prepare list of phonetics
    .then((data) => {
      result = versionB_ItemsList(data);
    })
    // ... or prepare catched error for render
    .catch((e) => {
      result = e.message;
    });

  // Render elements
  ReactDOM.render(<div>{result}</div>, document.getElementById("OutputB"));
};

export { versionB, versionB_PhoneticsList };
