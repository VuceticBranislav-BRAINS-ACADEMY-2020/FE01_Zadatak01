import "./App.css";
import { versionA } from "./versionA/versionA";
import { versionB } from "./versionB/versionB";
import { versionC } from "./versionC/versionC";

function App() {
    return (
        <div className="App">
            {/* Api endpoint address */}
            <h1>Dictionary</h1>
            <div className="frame">
                <label for="inputAddress" className="frame2">
                    Free Dictionary API end-point address
                </label>{" "}
                <br />
                <input
                    id="inputAddress"
                    defaultValue="https://api.dictionaryapi.dev/api/v2/entries/en/"
                ></input>
            </div>
            <hr />

            {/* Version A */}
            <div>
                <div className="frame">
                    <label for="inputA">Verzija A:</label>
                    <input id="inputA" defaultValue="book"></input>
                    <button onClick={versionA}>nađi</button> <br />
                </div>
                <div id="OutputA"></div>
            </div>
            <hr />

            {/* Version B */}
            <div>
                <div className="frame">
                    <label for="inputB">Verzija B:</label>
                    <input id="inputB" defaultValue="spoon"></input>
                    <button onClick={versionB}>nađi</button> <br />
                </div>
                <div id="OutputB"></div>
            </div>
            <hr />

            {/* Version C */}
            <div>
                <div className="frame">
                    <label for="inputC">Verzija C:</label>
                    <input id="inputC" defaultValue="set"></input>
                    <button onClick={versionC}>nađi</button> <br />
                </div>
                <div id="OutputC"></div>
            </div>
            <hr />
        </div>
    );
}

export default App;
