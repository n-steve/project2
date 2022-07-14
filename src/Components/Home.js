import React, { useEffect, useState } from "react";

import FrontPage from "./FrontPage";

function Home() {
  const [displayCurrency, setdisplayCurrency] = useState([]);
  const [getRates, setGetRates] = useState([]);
  const [showRates, setShowRates] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/forex`)
      .then((r) => r.json())
      .then((data) => setdisplayCurrency(data));
  }, []);

  useEffect(() => {
    fetch(`https://api.exchangerate.host/latest`)
      .then((r) => r.json())
      .then((data) => {
        setGetRates(Object.keys(data.rates));
        setShowRates(data.rates);
      });
  }, []);

  // useEffect(() => {
  //   if (newData.length === 0) {
  //     // Loop through my set of data
  //     for (const elements of displayCurrency) {
  //       let newRate;

  //       // Compare individual currency to its respective rate
  //       for (const newElement of getRates) {
  //         if (elements.base === newElement) {
  //           newRate = showRates[elements.base];
  //         }
  //       }

  //       // Construct new object with its base and rate so we can do Object.assign
  //       const newObj = {
  //         base: elements.base,
  //         rate: newRate,
  //       };

  //       // Object.assign
  //       const newResult = Object.assign(elements, newObj);
  //       setNewData((newData) => [...newData, newResult]);
  //     }
  //   }
  // }, [displayCurrency]);

  return (
    <div>
      <FrontPage displayCurrency={displayCurrency} getRates={getRates} />
    </div>
  );
}

export default Home;
