function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { Stock } from "../stock.js";
import { StockSearchForm } from "./stock-search-form.js";
import { PriceDisplay } from "./stock-price-display.js";
import { RecentHistory } from "./recent-history.js";

var App = function App() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      symbol = _React$useState2[0],
      setSymbol = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      recentHistory = _React$useState4[0],
      updateHistory = _React$useState4[1];

  var _React$useState5 = React.useState({}),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      stockData = _React$useState6[0],
      setStockData = _React$useState6[1];

  React.useEffect(function () {
    if (symbol) {
      var stock = new Stock({
        symbol: symbol
      });
      stock.getStockPrice().then(function (data) {
        if (data instanceof Object) {
          setStockData(_objectSpread({}, data));
          addToRecentHistory(_objectSpread({}, data));
        } else {
          setStockData({
            error: data
          });
        }
      });
    }
  }, [symbol]);

  var addToRecentHistory = function addToRecentHistory(newStock) {
    if (newStock.symbol && recentHistory && !recentHistory.some(function (stock) {
      return stock.symbol === newStock.symbol;
    })) {
      updateHistory(recentHistory.concat(newStock));
    }
  };

  var reviewStock = function reviewStock(stock) {
    updateHistory(recentHistory.filter(function (keepStock) {
      return keepStock.symbol !== stock.symbol;
    }));
    setSymbol(stock.symbol);
  };

  var get5DayHistory = function get5DayHistory() {
    if (!stockData.history) {
      var stock = new Stock({
        symbol: symbol
      });
      stock.getStockFiveDayHistory().then(function (data) {
        setStockData(_objectSpread({}, stockData, {
          history: data.history
        }));
      });
    }
  };

  return React.createElement(React.Fragment, null, React.createElement("h1", null, "Stock Ticker App"), React.createElement(StockSearchForm, {
    submitCallback: setSymbol
  }), React.createElement(PriceDisplay, {
    stockData: stockData,
    get5DayHistory: get5DayHistory
  }), React.createElement(RecentHistory, {
    recentStocks: recentHistory,
    reviewStock: reviewStock
  }));
};

export { App };