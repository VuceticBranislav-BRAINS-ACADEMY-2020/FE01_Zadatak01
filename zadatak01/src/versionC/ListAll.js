/********************************************************************************

  Return list that contains all elements enumerated in one list ready for render.

********************************************************************************/

import "./ListAll.css";
import { ListItem } from "./ListItem";

// Element properties:
// p.aData -> All word meanings
function ListAll(p) {
    // Get parameter from function properties
    let data = p.aData;

    // Return all meanings in one list
    return (
        <div className="ListAll">
            <ol className="ListAll-ol">
                {data.map((x) => (
                    <ListItem aData={x} />
                ))}
            </ol>
        </div>
    );
}

export { ListAll };
