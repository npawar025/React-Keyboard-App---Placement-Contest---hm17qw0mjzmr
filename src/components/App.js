import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {
  const [text, setText] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
      });
  }, []);

  const handleClick = (e) => {
    let s = new String(text);
    s += e.target.name;
    setText(s);
  };

  return (
    <div className="keyboard">
      {text != "forty two" && <div className="preview">{text}</div>}
      {text == "forty two" && <div className="quote">{quote}</div>}

      <div>
        {keys.map((key) => (
          <button
            name={key}
            onClick={handleClick}
            key={key}
            id={key === " " ? `key-space` : `key-${key}`}
          >
            {key === " " ? "Space" : key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
