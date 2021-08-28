import "./App.css";
import { versionA } from "./versionA/main";
import { versionB } from "./versionB/main";
import { versionC } from "./versionC/main";

function App() {
  return (
    <div className="App">
      {/* Api endpoint address */}
      <div>
        <label for="inputAddress">Free Dictionary API end-point address</label>{" "}
        <br />
        <input
          id="inputAddress"
          value="https://api.dictionaryapi.dev/api/v2/entries/en/"
        ></input>
      </div>
      <hr />

      {/* Version A */}
      <div>
        <label for="inputA">Verzija A:</label>
        <input id="inputA" defaultValue="book"></input>
        <button onClick={versionA}>nađi</button> <br />
        <div id="OutputA"></div>
      </div>
      <hr />

      {/* Version B */}
      <div>
        <label for="inputB">Verzija B:</label>
        <input id="inputB" defaultValue="spoon"></input>
        <button onClick={versionB}>nađi</button> <br />
        <div id="OutputB"></div>
      </div>
      <hr />

      {/* Version C */}
      <div>
        <label for="inputC">Verzija C:</label>
        <input id="inputC" defaultValue="set"></input>
        <button onClick={versionC}>nađi</button> <br />
        <div id="OutputC"></div>
      </div>
      <hr />
    </div>
  );
}

export default App;
