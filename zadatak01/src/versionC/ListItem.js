/********************************************************************************

  Meaning in enumerated list of definitions and examples.

********************************************************************************/

import { Phonetics } from "../versionB/Phonetics";
import { MeaningAll } from "./MeaningAll";
import "./ListItem.css";

// Element properties:
// p.aData -> All word meanings
function ListItem(p) {
    // Get parameter from function properties
    let data = p.aData;

    // Return meaning for one word
    return (
        <li className="ListItem">
            <b className="ListItem-b">{data.word}</b>
            <Phonetics aPhonetics={data.phonetics} />
            <br />
            <u className="ListItem-u">Origin:</u> {data.origin}
            <MeaningAll aMeanings={data.meanings} aWord={data.word} />
        </li>
    );
}

export { ListItem };
