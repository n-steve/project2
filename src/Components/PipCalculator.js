import React, { useState } from "react";

function PipCalculator() {
  const [userInput, setUserInput] = useState(0.01);
  const [openPrice, setOpenPrice] = useState(0.000001);
  const [closePrice, setClosePrice] = useState(0.000001);
  const [total, setTotal] = useState(0);

  function handleUser(e) {
    setUserInput(e.target.value);
  }

  function handleOpen(e) {
    setOpenPrice(e.target.value);
  }

  function handleClose(e) {
    setClosePrice(e.target.value);
  }

  function handleTotal(e) {
    e.preventDefault();
    let x = closePrice - openPrice;

    let y = x * userInput;

    setTotal(y);
  }

  return (
    <form>
      <h1>Calculate Your Profit or Loss</h1>
      <p>Enter your Lot size, open price and close price of your trade. </p>
      <p>Formula: lotsize * (openPrice - closePrice) = Total * Currency Rate </p>
      <table>
        <tbody>
          <tr>
            <td>Lot Size</td>
            <td>Open Price</td>

            <td>Close Price</td>
            <td>Total</td>
          </tr>

          <tr>
            <td>
              <input type="number" value={userInput} onChange={handleUser} />
            </td>
            <td>
              <input type="number" value={openPrice} onChange={handleOpen} />
            </td>
            <td>
              <input type="number" value={closePrice} onChange={handleClose} />
            </td>

            <td>
              <button type="submit" value={total} onClick={handleTotal}>
                =
              </button>{" "}
              <input value={total} onChange={handleTotal}></input>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>
          {" "}
          Tip: If you buy or sell in the market, Commonly you would want your
          closing price to be above or below depending if you buy or sell.
        </p>
        Click Link to Learn more about Forex Trading
        <p>
          <a href="https://www.babypips.com/learn/forex/tips-for-beginners-forex">
            Forex Market Trading for Beginners
          </a>
        </p>
        <p>
          {" "}
          <a href="https://www.tradingview.com/chart/">Forex Live Markets</a>
        </p>
      </div>
    </form>
  );
}

export default PipCalculator;
/* <div className="pipCalculator">
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
    </div> */

//     const [userInput,setUserInput] = useState()
// const [openPrice,setOpenPrice] = useState()
// const [closePrice,setClosePrice] = useState()
// const [total,setTotal] = useState()

// const calculate = () => {
//   let x;
//   x = userInput + openPrice
//   setTotal(x)
// }

//   return (
//     <div>
//     <form>
//     <table>
//       <tr>
//         <td>CurrencyPair</td>
//         <td>Lot Size</td>
//         <td>Open Price</td>
//         <td>Close Price</td>
//         <td>Total</td>
//       </tr>

//       <td><input type="number" value={userInput} onChange={(e)=>e.target.value}/> </td>
//       <td><input type="number" value={openPrice} onChange={(e)=>e.target.value}/></td>
//       <td><input type="number" value={closePrice} onChange={(e)=>e.target.value}/></td>
//       <button type="submit" >=</button>
//       <td><input type="number" value={total} onChange={calculate}/></td>
//     </table>
//     </form>

//     </div>
//   );
// }
