import "./App.css";
import { useState } from "react";

function App() {
  const [deeplink, setDeeplink] = useState("");
  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          value={deeplink}
          onChange={(e) => setDeeplink(e.target.value)}
        />
        <a href={deeplink}>Chamar deeplink</a>
      </div>
    </div>
  );
}

export default App;
