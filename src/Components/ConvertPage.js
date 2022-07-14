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

// /*{
//   getCurrency,
//   selectedCurrency,
//   handleChange,
//   calculate,
//   handleRateChange,
// }) {
//   return (
//     <div className="ui compact menu">
//       <div className="ui simple dropdown item">
//         <input
//           type="number"
//           value={calculate.toString()}
//           onChange={handleRateChange}
//         />
//         <select value={selectedCurrency} onChange={handleChange}>
//           {getCurrency}
//         </select>
//       </div>
//     </div>
//   );
// }*/
