/********************************************************************************

  Element that contains list of phonetic elements for one word.

********************************************************************************/

import { Phonetic } from "./Phonetic";
import "./Phonetics.css";

// Element properties:
// p.aPhonetics -> 'phonetics' JSON object from backend. Contains word followed by list of phonetics.
function Phonetics(p) {
    // Get parameter from function properties
    let phonetics = p.aPhonetics;

    // Prepare empty list for result
    let result = [];

    for (let i = 0; i < phonetics.length; i++) {
        // Separator1 is located after word and it is not printed if there is no pronunciations
        let separator1 = "";
        if (phonetics.length > 0 && i === 0) separator1 = " ‒ ";

        // Separator2 divide multiple pronunciations for same word if exissts
        let separator2 = i === phonetics.length - 1 ? "." : ", ";

        // If there is no element brake loop
        if (Object.keys(phonetics[i]).length === 0) continue;

        // Return JSX containing anything after word
        result.push(
            <span className="Phonetics">
                {separator1}
                <Phonetic aPhonetic={phonetics[i]} />
                {separator2}
            </span>
        );
    }

    return result;
}

export { Phonetics };
