import React, { useState, useEffect } from "react";
import "./App.css"; // assuming you have an App.css file for css

function App() {
  const [numbers, setNumbers] = useState(generateNumbers());

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 2000);
    return () => clearTimeout(timer);
  }, [numbers]);

  function generateNumbers() {
    let number1, number2;
    do {
      number1 = Math.floor(Math.random() * 12) + 1;
      number2 = Math.floor(Math.random() * 12) + 1;
    } while (number1 % number2 !== 0); // Ensure whole number division

    return { number1, number2 };
  }

  function handleUpdate() {
    setNumbers(generateNumbers());
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
            {numbers.number1 / numbers.number2}
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
