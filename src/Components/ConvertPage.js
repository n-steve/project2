import React from "react";

function ConvertPage({
  getCurrency,
  selectedCurrency,
  handleChange,
  calculate,
  handleRateChange,
}) {
  return (
    <div>
      <div>
        <input
          type="number"
          className="input"
          value={calculate}
          onChange={handleRateChange}
        />
        <select value={selectedCurrency} onChange={handleChange}>
          {getCurrency}
        </select>
      </div>
    </div>
  );
}
export default ConvertPage;
