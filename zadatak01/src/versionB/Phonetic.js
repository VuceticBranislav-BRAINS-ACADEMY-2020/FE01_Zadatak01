/********************************************************************************

  Element that contains list of phonetic elements for one word.

********************************************************************************/

import { AudioElement } from "../elements/AudioElement";
import { IPAElement } from "../elements/IPAElement";
import "./Phonetic.css";

// Element properties:
// p.text -> Element that contains IPA
// p.audio -> Element that contains audio
function PhoneticItem(p) {
    let element = (
        <span className="Phonetic">
            {p.text}
            {p.audio}
        </span>
    );
    return element;
}

// Element properties:
// p.aPhonetic -> Should contain one phonetic object
function Phonetic(p) {
    // Get parameter from function properties
    let phonetic = p.aPhonetic;

    // Return IPA if exists
    let text = <IPAElement aIPA={phonetic} />;

    // Return audio as hiperlink if exists
    let audio = <AudioElement aAudio={phonetic} />;

    // Return JSX
    return <PhoneticItem text={text} audio={audio} />;
}

export { Phonetic };
