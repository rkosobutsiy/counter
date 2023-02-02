import React, { useEffect, useRef, useState } from "react";
import { Block } from "./Block";
import "./index.scss";

export const Converter = () => {
  // const [rates, setRates] = useState({});
  const ratesRef = useRef([]);
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [toPrice, setToPrice] = useState(1);
  const [fromPrice, setFromPrice] = useState(0);

  const BASE_URL = "https://api.exchangerate.host/latest";

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        // setRates(data.rates);
        ratesRef.current = data.rates;
        onChangeToPrice(1);
      })
      .catch((err) => console.warn(err));
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / ratesRef.current[fromCurrency];
    const result = price * ratesRef.current[toCurrency];
    setFromPrice(value.toFixed(3));
    setToPrice(result);
  };
  const onChangeToPrice = (value) => {
    const result =
      (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
};
