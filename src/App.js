import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";
import BetterCallSaul from "./images/better-call-saul.png"
import BreakingBad from "./images/breaking-bad.png"

const initialQuote = {
  text: "Quote",
  author: "Author",
};

function App() {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(false);

  //useefect para arrancar su primera renderizada automatica
  //use efect no acepta async acincronismo en sus argumentos
  // se declara en la funcion es asinc y antes del fetch se llama await

  const updateQuote = async () => {
    setLoading(true);
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuote] = await res.json();
    const { quote: text, author, series } = newQuote;
    setQuote({
      text,
      author,
      series,
    });
    setLoading(false);
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="app">
      <div className="images">
      <img
        src={BreakingBad}
        alt="logo breaking bad"
      />
      <img
        src={BetterCallSaul}
        alt="logo Better Call Saul"
      />
      </div>
      <button onClick={() => updateQuote()}>Get Another</button>

      {loading ? <Spinner /> : <Quote quote={quote} />}
    </div>
  );
}

export default App;
