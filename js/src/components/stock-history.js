import { Currency } from "./helper.js";

const StockHistory = props => {
  return (
    <React.Fragment>
      {props.history.map(day => (
        <div className="day-details" key={day.date}>
          <div className="date">Date: {day.date}</div>
          <div className="details">
            Open: {Currency(day.open)}, High: {Currency(day.high)}, Low:{" "}
            {Currency(day.low)}, Close: {Currency(day.close)},
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export { StockHistory };
