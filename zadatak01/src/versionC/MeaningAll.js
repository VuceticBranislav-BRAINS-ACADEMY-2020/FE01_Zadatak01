/********************************************************************************

  Meanings in enumerated list of definitions and examples.

********************************************************************************/

import { MeaningList } from "./MeaningList";
import "./MeaningAll.css";

// Element properties:
// p.aMeanings -> All word meanings
// p.aWord -> Relevant word
function MeaningAll(p) {
    // Get parameter from function properties
    let meanings = p.aMeanings;
    let word = p.aWord;

    // Return all meanings in one list
    return (
        <ol type="I" className="MeaningAll">
            {meanings.map((x) => (
                <MeaningList aDefinitions={x} aWord={word} />
            ))}
        </ol>
    );
}

export { MeaningAll };
