const StockTracker = props => {
  const { checkStock } = props;
  const [recentStocks, addNewStock] = React.useState([]);

  React.useEffect(() => {
    if (
      checkStock.symbol &&
      !recentStocks.some(stock => stock.symbol === checkStock.symbol)
    ) {
      if (recentStocks.length > 5) {
        recentStocks.shift();
      }

      addNewStock(recentStocks.concat(checkStock));
    }
  }, [props.checkStock]);

  return (
    <React.Fragment>
      <h2>Recent</h2>

      {recentStocks.length > 0 && (
        <ul>
          {recentStocks.map(stock => (
            <li key={stock.symbol}>
              {stock.symbol}: {stock.price}
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export { StockTracker };
