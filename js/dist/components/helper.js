var Currency = function Currency(value) {
  return (+value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
};

export { Currency };