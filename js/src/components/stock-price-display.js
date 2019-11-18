const PriceDisplay = (props) => {

    const {stock} = props;
    const [stockData, setStockData] = React.useState({});

    React.useEffect(() => {
        if (stock.symbol) {
            stock.getStockPrice()
            .then(data => {
                if (data instanceof Object) {
                    setStockData({...data});
                } else {
                    setStockData({error: data});
                }
            });
        }
    }, [props.stock]);

    const currency = (value => (+value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    }))

    return ( 
        <div>
        {stockData.symbol ?
            (
                <React.Fragment>
                    <h2>{stockData.symbol}</h2>
                    <p className="details">Date: {stockData.date}</p>
                    <p className="details">Price: {currency(stockData.price)}</p>
                    <button className="btn-history">Previous 5 Days</button>
                    <div className="history"></div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <p>No Stock data received</p>
                    {stockData.error && <p>{stockData.error}</p>}
                </React.Fragment>
            )
        }
        </div>
     );
}
 
export {PriceDisplay};