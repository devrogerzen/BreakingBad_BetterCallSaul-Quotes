import React from "react";

const Quote = ({ quote }) => {
  return (
    <div>
      <p>
        {quote.text} <br />
        <span>- {quote.author} </span>
        <br />
        <h4>{quote.series}</h4>
      </p>
    </div>
  );
};

export default Quote;
