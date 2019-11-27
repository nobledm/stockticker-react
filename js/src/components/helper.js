const Currency = value =>
  (+value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

export { Currency };
