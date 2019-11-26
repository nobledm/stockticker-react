import { StockSearchForm } from "./stock-search-form.js";
import { PriceDisplay } from "./stock-price-display.js";
import { Stock } from "../stock.js";
import { StockTracker } from "./stock-tracker.js";

const App = () => {
  const [symbol, setSymbol] = React.useState("");
  const [newStock, setNewStock] = React.useState({});

  return (
    <React.Fragment>
      <h1>Stock Ticker App</h1>
      <StockSearchForm submitCallback={setSymbol} />
      <PriceDisplay
        stock={new Stock({ symbol: symbol })}
        liftStock={setNewStock}
      />
      <StockTracker checkStock={newStock} />
    </React.Fragment>
  );
};

export { App };
