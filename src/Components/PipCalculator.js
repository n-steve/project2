import React, { useState } from "react";

function PipCalculator() {
  const [userInput, setUserInput] = useState(0.0);
  const [openPrice, setOpenPrice] = useState(0.0);
  const [closePrice, setClosePrice] = useState(0.0);
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
    <form >
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
