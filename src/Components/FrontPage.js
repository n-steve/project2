import React from "react";

function FrontPage({ displayCurrency }) {
  console.log(displayCurrency);
  const results = displayCurrency.map((data, i) => (
    <div class="ui list">
      <ul key={`${data.name}-${i}`}>
        <img class="ui avatar image" src={data.flag} />
        {data.name}
        <p></p>
        {data.base} : {data.rate}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Major Currencies</h1>
      {results}
    </div>
  );
}

export default FrontPage;
