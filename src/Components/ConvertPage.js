import React from "react";

function ConvertPage({
  displayCurrencies,
  currency,
  handleChange,
  exchange,
  rateChanges,
}) {
  return (
    <div>
      <select onChange={handleChange} value={currency}>
        {displayCurrencies}
      </select>

      <input type="number" value={exchange || 0} onChange={rateChanges}></input>
    </div>
  );
}
export default ConvertPage;

