import { useState } from "react";
import "./App.css";

function App() {
  const givenData = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [dictionary, setDictionary] = useState(givenData);
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const searchTermLower = searchTerm.toLowerCase();
    const findWord = dictionary.find(
      (item) => item.word.toLowerCase() === searchTermLower
    );

    setResult(findWord ? findWord.meaning : "Word not found in the dictionary.");
  };

  return (
    <>
      <div className="app">
        <h1>Dictionary App</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a word..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="result-container">
          <p>Definition:</p>
          {result !== null && <p>{result}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
