var StockHistory = function StockHistory(props) {
  return React.createElement(React.Fragment, null, props.history.map(function (day) {
    return React.createElement("div", {
      className: "day-details",
      key: day.date
    }, React.createElement("div", {
      className: "date"
    }, "Date: ", day.date), React.createElement("div", {
      className: "details"
    }, "Open: ", day.open, ", High: ", day.high, ", Low: ", day.low, ", Close: ", day.close, ","));
  }));
};

export { StockHistory };