import { Currency } from "./helper.js";

const RecentHistory = props => {
  const { recentStocks, reviewStock } = props;
  const prevFive = recentStocks.slice(-5, -1);

  return (
    <React.Fragment>
      <h2>Recent</h2>

      {prevFive.length > 0 && (
        <ul>
          {prevFive.map(stock => (
            <li key={stock.symbol} onClick={() => reviewStock(stock)}>
              {stock.symbol}: {Currency(stock.price)}
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export { RecentHistory };
