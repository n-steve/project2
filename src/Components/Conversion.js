import React, { useEffect, useState } from "react";
import ConvertPage from "./ConvertPage";

function Conversion() {

  const [gatherCurrency, setGatherCurrency] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [currencyRate, setCurrencyRate] = useState();
  const [firstRate, setFirstRate] = useState(1);
  const [secondRate, setSecondRate] = useState(true);
  useEffect(() => {
    fetch(`https://api.exchangerate.host/latest`)
      .then((r) => r.json())
      .then((data) => {
        const displayFirstCurrency = Object.keys(data.rates)[149];

        setGatherCurrency(Object.entries(data.rates));
        setFromCurrency(data.base);
        setToCurrency(Object.keys(data.rates));
        setCurrencyRate(data.rates[displayFirstCurrency]);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`
    )
      .then((r) => r.json())
      .then((data) => setCurrencyRate(data.rates[toCurrency]));
  }, [fromCurrency, toCurrency]);

  const displayCurrencies = gatherCurrency.map((data, i) => (
    <option key={`${data}-${i}`}>{data[0]}</option>
  ));

  let firstCurrency;
  let secondCurrency;
  if (secondRate) {
    firstCurrency = firstRate;
    secondCurrency = firstCurrency * currencyRate;
  } else {
    secondCurrency = firstRate;
    firstCurrency = secondCurrency / currencyRate;
  }

  function handleFirstChange(e) {
    setFirstRate(e.target.value);
    setSecondRate(true);
  }
  function handleSecondChange(e) {
    setFirstRate(e.target.value);
    setSecondRate(false);
  }

  function handlePost(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/forex`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        currency: firstCurrency,
        base: fromCurrency,
        currency2:secondCurrency,
        base2: toCurrency,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(`Success`, JSON.stringify(data)))

      .catch((err) => console.log("wrong", err));
  }

  return (
    <div>
     
        Select Currency: $$ Input Amount!
        <div id="first">
          <ConvertPage
            displayCurrencies={displayCurrencies}
            currency={fromCurrency}
            handleChange={(e) => setFromCurrency(e.target.value)}
            exchange={firstCurrency}
            rateChanges={handleFirstChange}
          />
        </div>
        Conversion: Currency Rate Exchanged
        <div id="second">
          <ConvertPage
            displayCurrencies={displayCurrencies}
            currency={toCurrency}
            handleChange={(e) => setToCurrency(e.target.value)}
            exchange={secondCurrency}
            rateChanges={handleSecondChange}
          />
        </div>
        <form>
          <h3> Save to Main Page:</h3>
        <button type="submit" onClick={handlePost}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Conversion;
