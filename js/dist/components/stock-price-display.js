function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { Currency } from "./helper.js";
import { StockHistory } from "./stock-history.js";

var PriceDisplay = function PriceDisplay(props) {
  var stock = props.stock,
      liftStock = props.liftStock;

  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stockData = _React$useState2[0],
      setStockData = _React$useState2[1];

  React.useEffect(function () {
    if (stock.symbol) {
      stock.getStockPrice().then(function (data) {
        if (data instanceof Object) {
          setStockData(_objectSpread({}, data));
        } else {
          setStockData({
            error: data
          });
        }
      });
    }
  }, [props.stock]);
  React.useEffect(function () {
    if (stockData.symbol) {
      liftStock(stockData);
    }
  }, [props.stock.symbol]);

  var handleHistory = function handleHistory(e) {
    if (!stockData.history) {
      stock.getStockFiveDayHistory().then(function (data) {
        return setStockData(_objectSpread({}, stock.stockData));
      });
    }
  };

  return React.createElement("div", null, stockData.symbol ? React.createElement(React.Fragment, null, React.createElement("h2", null, stockData.symbol), React.createElement("p", {
    className: "details"
  }, "Date: ", stockData.date), React.createElement("p", {
    className: "details"
  }, "Price: ", Currency(stockData.price)), React.createElement("button", {
    className: "btn-history",
    onClick: handleHistory
  }, "Previous 5 Days"), stockData.history && React.createElement("div", {
    className: "history"
  }, React.createElement(StockHistory, {
    history: stockData.history
  }))) : React.createElement(React.Fragment, null, React.createElement("p", null, "No Stock data received"), stockData.error && React.createElement("p", null, stockData.error)));
};

export { PriceDisplay };