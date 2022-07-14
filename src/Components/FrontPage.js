import React from "react";

function FrontPage({ displayCurrency,  }) {




  const results = displayCurrency.map((data) => (
    <ul key={`${data.id}`}>
      <p>
        {data.base}/{data.base2}
      </p>
      {data.currency} = {data.currency2}
     
    </ul>
  ));
  return (
    <div>
      <h1>Major Pairs</h1>

      {results}
    </div>
  );
}

export default FrontPage;
