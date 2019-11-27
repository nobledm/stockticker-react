const StockHistory = props => {
  return (
    <React.Fragment>
      {props.history.map(day => (
        <div className="day-details" key={day.date}>
          <div className="date">Date: {day.date}</div>
          <div className="details">
            Open: {day.open}, High: {day.high}, Low: {day.low}, Close:{" "}
            {day.close},
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export { StockHistory };
