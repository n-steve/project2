import React, { useState, useEffect } from "react";
import ConvertPage from "./ConvertPage";

function Conversion() {
  const [getCurrency, setGetCurrency] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [currentRate, setCurrentRate] = useState();
  const [firstSelectAmount, setFirstSelectAmount] = useState(1);
  const [secondSelectAmount, setSecondSelectAmount] = useState(true);
  // const [firstRate, setFirstRate] = useState();
  // const [secondRate, setSecondRate] = useState();
  useEffect(() => {
    fetch(`https://api.exchangerate.host/latest`)
      .then((r) => r.json())
      .then((data) => {
        const displayFirstCurrency = Object.keys(data.rates)[149];

        setGetCurrency([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(displayFirstCurrency);
        setCurrentRate(data.rates[displayFirstCurrency]);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`
    )
      .then((r) => r.json())
      .then((data) => setCurrentRate(data.rates[toCurrency]));
  }, [fromCurrency, toCurrency]);

  let firstRate;
  let secondRate;

  if (secondSelectAmount) {
    firstRate = firstSelectAmount;
    secondRate = firstSelectAmount * currentRate;
  } else {
    secondRate = firstSelectAmount;
    firstRate = firstSelectAmount / currentRate;
  }

  function handleFirstOnChange(event) {
    setFirstSelectAmount(event.target.value);
    setSecondSelectAmount(true);
  }

  function handleSecondOnChange(event) {
    setFirstSelectAmount(event.target.value);
    setSecondSelectAmount(false);
  }
  const displayPair = getCurrency.map((data, i) => (
    <option key={`${data}-${i}`} value={data}>
      {data}
    </option>
  ));

  return (
    <div class="ui compact menu">
      <div class="ui simple dropdown item">
        <div>
          <ConvertPage
            getCurrency={displayPair}
            selectedCurrency={fromCurrency}
            handleChange={(event) => setFromCurrency(event.target.value)}
            calculate={firstRate}
            handleRateChange={handleFirstOnChange}
          />
        </div>
        =
        <div>
          <ConvertPage
            getCurrency={displayPair}
            selectedCurrency={toCurrency}
            handleChange={(event) => setToCurrency(event.target.value)}
            calculate={secondRate}
            handleRateChange={handleSecondOnChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Conversion;
