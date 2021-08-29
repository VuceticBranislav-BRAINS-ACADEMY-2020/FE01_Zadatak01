/********************************************************************************

  Meaning item contains definition and example. Example is ommited if do not
  exist in data from server.

********************************************************************************/

import "./Meaning.css";

// Element properties:
// p.aDefinition -> Should contain word definition
// p.aExample -> Contain example for definition
function Meaning(p) {
    // Get parameter from function properties
    let example = p.aExample;
    let definition = p.aDefinition;
    // Return element...
    if (example === undefined) {
        // .. without example when it is not provided, or ...
        return <li className="Meaning">{definition}</li>;
    } else {
        // .. with example.
        return (
            <li className="Meaning">
                {definition}
                <br /> Example: <i className="Meaning-i">{example}</i>
            </li>
        );
    }
}

export { Meaning };
