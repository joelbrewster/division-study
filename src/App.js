import React, { useState, useEffect } from "react";
import "./App.css"; // assuming you have an App.css file for css

function App() {
  const [numbers, setNumbers] = useState({
    number1: Math.floor(Math.random() * 12),
    number2: Math.floor(Math.random() * 12) + 1, // Ensure number2 is not 0
  });

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 2000);
    return () => clearTimeout(timer);
  }, [numbers]);

  function sumTing(a, b) {
    // Perform division instead of multiplication
    return Math.floor(a / b);
  }

  function handleUpdate() {
    setNumbers({
      number1: Math.floor(Math.random() * 12),
      number2: Math.floor(Math.random() * 12) + 1, // Ensure number2 is not 0
    });
  }

  return (
    <div className="App">
      <div className="pattern"></div>
      <div className="content">
        <div className="row">
          <h2 id="question">
            {numbers.number1} ÷ {numbers.number2} ?
          </h2>
        </div>
        <div id="answer" className={`row ${fade ? "" : "fade"}`}>
          <h3 className="answer">
            {sumTing(numbers.number1, numbers.number2)}
          </h3>
        </div>
        <br />
        <span className="new" onClick={handleUpdate}>
          Next!
        </span>
      </div>
    </div>
  );
}

export default App;
