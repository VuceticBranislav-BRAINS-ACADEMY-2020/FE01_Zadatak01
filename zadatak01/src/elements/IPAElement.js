/********************************************************************************

  IPA element contains pronunciation of word if it exist in dictionary.

********************************************************************************/

import "./IPAElement.css";

// Element properties:
// p.aIPA -> Should contain JSON with link to audio file
function IPAElement(p) {
    // Get properties
    let ipa = p.aIPA;

    //Initialize variables
    let element = "";

    // Return null if audio is not present
    if (ipa === undefined || ipa === null) return element;

    // Construct element from provided JSON
    if (ipa.hasOwnProperty("text")) {
        // Element contains / around IPA
        element = <span className="IPAElement">/{ipa.text}/</span>;
    }

    return element;
}

export { IPAElement };
