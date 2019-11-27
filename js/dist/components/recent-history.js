import { Currency } from "./helper.js";

var RecentHistory = function RecentHistory(props) {
  var recentStocks = props.recentStocks,
      reviewStock = props.reviewStock;
  var prevFive = recentStocks.slice(-5, -1);
  return React.createElement(React.Fragment, null, React.createElement("h2", null, "Recent"), prevFive.length > 0 && React.createElement("ul", null, prevFive.map(function (stock) {
    return React.createElement("li", {
      key: stock.symbol,
      onClick: function onClick() {
        return reviewStock(stock);
      }
    }, stock.symbol, ": ", Currency(stock.price));
  })));
};

export { RecentHistory };