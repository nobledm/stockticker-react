function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { Currency } from "./helper.js";
import { PriceDisplay } from "./stock-price-display.js";

var StockTracker = function StockTracker(props) {
  var checkStock = props.checkStock;

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      recentStocks = _React$useState2[0],
      setRecentStocks = _React$useState2[1];

  React.useEffect(function () {
    if (checkStock.symbol && !recentStocks.some(function (stock) {
      return stock.symbol === checkStock.symbol;
    })) {
      // if (recentStocks.length == 5) {
      //   recentStocks.shift();
      // }
      setRecentStocks(recentStocks.concat(checkStock));
    }
  }, [props.checkStock]);

  var handleReview = function handleReview(oldStock) {
    setRecentStocks(recentStocks.filter(function (keepStock) {
      return keepStock.symbol !== oldStock.symbol;
    }));
    return React.createElement(PriceDisplay, {
      stock: oldStock
    });
  };

  return React.createElement(React.Fragment, null, React.createElement("h2", null, "Recent"), recentStocks.length > 0 && React.createElement("ul", null, recentStocks.map(function (stock) {
    return React.createElement("li", {
      key: stock.symbol,
      onClick: function onClick() {
        return handleReview(stock);
      }
    }, stock.symbol, ": ", Currency(stock.price));
  })));
};

export { StockTracker };