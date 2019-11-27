import { Stock } from "../stock.js";
import { StockSearchForm } from "./stock-search-form.js";
import { PriceDisplay } from "./stock-price-display.js";
import { RecentHistory } from "./recent-history.js";

const App = () => {
  const [symbol, setSymbol] = React.useState("");
  const [recentHistory, updateHistory] = React.useState([]);
  const [stockData, setStockData] = React.useState({});

  React.useEffect(() => {
    if (symbol) {
      let stock = new Stock({ symbol: symbol });

      stock.getStockPrice().then(data => {
        if (data instanceof Object) {
          setStockData({ ...data });
          addToRecentHistory({ ...data });
        } else {
          setStockData({ error: data });
        }
      });
    }
  }, [symbol]);

  const addToRecentHistory = newStock => {
    if (
      newStock.symbol &&
      recentHistory &&
      !recentHistory.some(stock => stock.symbol === newStock.symbol)
    ) {
      updateHistory(recentHistory.concat(newStock));
    }
  };

  const reviewStock = stock => {
    updateHistory(
      recentHistory.filter(keepStock => keepStock.symbol !== stock.symbol)
    );

    setSymbol(stock.symbol);
  };

  const get5DayHistory = () => {
    if (!stockData.history) {
      let stock = new Stock({ symbol: symbol });

      stock.getStockFiveDayHistory().then(data => {
        setStockData({ ...stockData, history: data.history });
      });
    }
  };

  return (
    <React.Fragment>
      <h1>Stock Ticker App</h1>
      <StockSearchForm submitCallback={setSymbol} />
      <PriceDisplay stockData={stockData} get5DayHistory={get5DayHistory} />
      <RecentHistory recentStocks={recentHistory} reviewStock={reviewStock} />
    </React.Fragment>
  );
};

export { App };
