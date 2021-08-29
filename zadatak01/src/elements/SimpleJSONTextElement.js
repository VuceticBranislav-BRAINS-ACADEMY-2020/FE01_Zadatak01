/********************************************************************************
  
  Represent simple JSON element displayed as text.
  
********************************************************************************/

import "../elements/SimpleJSONTextElement.css";

// Element properties:
// p.aJSON -> Should contain stringified JSON
function SimpleJSONTextElement(p) {
    let element = <div className="SimpleJSONTextElement">{p.aJSON}</div>;
    return element;
}

export { SimpleJSONTextElement };
