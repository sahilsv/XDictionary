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

    if (findWord) {
      setResult(findWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <>
      <div className="app">
        <header>Dictionary App</header>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a word..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="result-container">
          <p><b>Definition: </b> <br /></p>
          {result !== null && <p>{result}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
