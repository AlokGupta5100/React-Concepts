import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(["Apple", "Banana", "Grapes", "BlueBerry", "Orange"]);

  function handleShuffle() {
    const fruitsName = [...data];
    for (let i = fruitsName.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fruitsName[i], fruitsName[j]] = [fruitsName[j], fruitsName[i]];
    }
    setData(fruitsName);
  };

  return (
    <div>
      <h1>List of Fruits</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleShuffle}>Shuffle</button>
    </div>
  );
}

export default App;
