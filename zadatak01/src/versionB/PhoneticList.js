/********************************************************************************
  
  Element that contains list of words followed by phonetic list.

********************************************************************************/

import { Phonetics } from "./Phonetics";
import "./PhoneticList.css";

// Element properties:
// p.aData -> Should contains data for one word from server
function PhoneticList(p) {
    let element = (
        <div className="PhoneticList">
            {p.aData.map((x) => (
                <p className="PhoneticItem">
                    <b className="PhoneticItem-b">{x.word}</b>
                    <Phonetics aPhonetics={x.phonetics} />
                </p>
            ))}
        </div>
    );
    return element;
}

export { PhoneticList };
