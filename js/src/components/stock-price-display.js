import { StockHistory } from "./stock-history.js";

const PriceDisplay = props => {
  const { stock, liftStock } = props;
  const [stockData, setStockData] = React.useState({});

  React.useEffect(() => {
    if (stock.symbol) {
      stock.getStockPrice().then(data => {
        if (data instanceof Object) {
          setStockData({ ...data });
        } else {
          setStockData({ error: data });
        }
      });
    }
  }, [props.stock]);

  React.useEffect(() => {
    if (stockData.symbol) {
      liftStock(stockData);
    }
  }, [props.stock.symbol]);

  const currency = value =>
    (+value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

  const handleHistory = e => {
    if (!stockData.history) {
      stock
        .getStockFiveDayHistory()
        .then(data => setStockData({ ...stock.stockData }));
    }
  };

  return (
    <div>
      {stockData.symbol ? (
        <React.Fragment>
          <h2>{stockData.symbol}</h2>
          <p className="details">Date: {stockData.date}</p>
          <p className="details">Price: {currency(stockData.price)}</p>
          <button className="btn-history" onClick={handleHistory}>
            Previous 5 Days
          </button>
          {stockData.history && (
            <div className="history">
              <StockHistory history={stockData.history} />
            </div>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>No Stock data received</p>
          {stockData.error && <p>{stockData.error}</p>}
        </React.Fragment>
      )}
    </div>
  );
};

export { PriceDisplay };
