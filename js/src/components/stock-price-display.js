import { StockHistory } from "./stock-history.js";

const PriceDisplay = props => {
  const { stockData, get5DayHistory } = props;

  return (
    <div>
      {stockData.symbol ? (
        <React.Fragment>
          <h2>{stockData.symbol}</h2>
          <p className="details">Date: {stockData.date}</p>
          <p className="details">Price: {stockData.price}</p>
          <button className="btn-history" onClick={get5DayHistory}>
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
