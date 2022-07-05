import React, { useState } from "react";

function PipCalculator() {
  let userInput;
  let openPrice;
  let closePrice;

  let total = (closePrice - openPrice) * userInput;

  return (
    <div className="pipCalculator">
      <div>
        <h2>Profit and Loss Calculator</h2>
        <div>Currency Pair</div>
        <div>
          Lot Size & User's Currency
          <div>
            <input
              type="number"
              value={userInput}
              placeholder="lot size"
              onChange={(e) => e.target.value}
            />
          </div>
        </div>
        <div>
          Buy/Sell
          <div>
            <select>
              <option>Buy</option>
              <option>Sell</option>
            </select>
          </div>
        </div>
        <div>
          Open Price
          <div>
            <input
              type="number"
              value={openPrice}
              placeholder="0.00000"
              onChange={(e) => e.target.value}
            />
          </div>
        </div>
        <div>
          Close Price
          <div>
            <input
              type="number"
              value={closePrice}
              placeholder="0.00000"
              onChange={(e) => e.target.value}
            />
          </div>
        </div>
        <div>
          Total Amount
          <div>
            <input
              type="textbox"
              value={total}
              onChange={(e) => e.target.value}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PipCalculator;
