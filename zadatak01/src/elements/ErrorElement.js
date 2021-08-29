/********************************************************************************
  
  Represent simple error element with message.
  
********************************************************************************/

import "../elements/ErrorElement.css";

// Element properties:
// p.aMessage -> Should contain error message string
function ErrorElement(p) {
    let element = <div className="ErrorElement">{p.aMessage}</div>;
    return element;
}

export { ErrorElement };
