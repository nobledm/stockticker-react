import { Currency } from "./helper.js";
import { StockHistory } from "./stock-history.js";

var PriceDisplay = function PriceDisplay(props) {
  var stockData = props.stockData,
      get5DayHistory = props.get5DayHistory;
  return React.createElement("div", null, stockData.symbol ? React.createElement(React.Fragment, null, React.createElement("h2", null, stockData.symbol), React.createElement("p", {
    className: "details"
  }, "Date: ", stockData.date), React.createElement("p", {
    className: "details"
  }, "Price: ", Currency(stockData.price)), React.createElement("button", {
    className: "btn-history",
    onClick: get5DayHistory
  }, "Previous 5 Days"), stockData.history && React.createElement("div", {
    className: "history"
  }, React.createElement(StockHistory, {
    history: stockData.history
  }))) : React.createElement(React.Fragment, null, React.createElement("p", null, "No Stock data received"), stockData.error && React.createElement("p", null, stockData.error)));
};

export { PriceDisplay };