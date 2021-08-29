/********************************************************************************

  Return list item that contains all definitions for given word.

********************************************************************************/

import { Meaning } from "./Meaning";
import "./MeaningList.css";

// Element properties:
// p.aDefinitions -> Should contain word and all definitions
// p.aWord -> Relevant word
function MeaningList(p) {
    // Get parameter from function properties
    let definitions = p.aDefinitions;
    let word = p.aWord;

    // Find abravation of word type
    let letter = definitions.partOfSpeech.charAt(0);
    if (letter === "a") {
        letter = definitions.partOfSpeech.slice(0, 3);
    }

    // Return List item that contains word and word tipe. It also contains list of definitions and examples
    return (
        <li className="MeaningList">
            {" "}
            <b className="MeaningList-b">{word}</b>, {letter}.
            <ol type="a" className="MeaningList-ol">
                {definitions.definitions.map((x) => (
                    <Meaning aDefinition={x.definition} aExample={x.example} />
                ))}
            </ol>
        </li>
    );
}

export { MeaningList };
