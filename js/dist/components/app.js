function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { StockSearchForm } from './stock-search-form.js';
import { PriceDisplay } from './stock-price-display.js';
import { Stock } from '../stock.js';

var App = function App() {
  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      symbol = _React$useState2[0],
      setSymbol = _React$useState2[1];

  return React.createElement(React.Fragment, null, React.createElement("h1", null, "Stock Ticker App"), React.createElement(StockSearchForm, {
    submitCallback: setSymbol
  }), React.createElement(PriceDisplay, {
    stock: new Stock({
      symbol: symbol
    })
  }));
};

export { App };