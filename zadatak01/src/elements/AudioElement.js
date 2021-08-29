/********************************************************************************

  Audio element contains link to audio file. Always show 'audio' text. It has
  space in front of link.

********************************************************************************/

import "./AudioElement.css";

const onClick = (e) => {
    let audio = new Audio(e);
    audio.play();
};

// Element properties:
// p.aAudio -> Should contain JSON with link to audio file
function AudioElement(p) {
    // Get properties
    let audio = p.aAudio;

    //Initialize variables
    let element = "";

    // Return null if audio is not present
    if (audio === undefined || audio === null) return element;

    // Construct element from provided JSON
    if (audio.hasOwnProperty("audio")) {
        // Element contains space in front of link
        element = (
            <span className="AudioElement">
                {" "}
                <a href={audio.audio} className="AudioElement-a">
                    audio
                </a>
                {/* <button onClick={(x) => onClick(audio.audio)}>audio</button> */}
            </span>
        );
    }

    return element;
}

export { AudioElement };
