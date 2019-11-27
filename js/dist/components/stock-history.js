import { Currency } from "./helper.js";

var StockHistory = function StockHistory(props) {
  return React.createElement(React.Fragment, null, props.history.map(function (day) {
    return React.createElement("div", {
      className: "day-details",
      key: day.date
    }, React.createElement("div", {
      className: "date"
    }, "Date: ", day.date), React.createElement("div", {
      className: "details"
    }, "Open: ", Currency(day.open), ", High: ", Currency(day.high), ", Low:", " ", Currency(day.low), ", Close: ", Currency(day.close), ","));
  }));
};

export { StockHistory };