import React, { useEffect, useState } from "react";

import FrontPage from "./FrontPage";

function Home() {
  const [displayCurrency, setdisplayCurrency] = useState([]);
  const [getRates, setGetRates] = useState([]);

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
      });
  }, []);

  function handleDelete(deleteAll) {
    fetch(`http://localhost:3001/forex?delete=${deleteAll}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => {
        return data;
      });
  }
  return (
    <div>
      <FrontPage displayCurrency={displayCurrency} getRates={getRates} />
    </div>
  );
}

export default Home;
