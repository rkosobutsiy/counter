import React, { useEffect, useState } from "react";
import { Block } from "./Block";
import "./index.scss";
import { json } from "react-router-dom";
import axios from "axios";

export const Converter = () => {
  const [rates, setRates] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [toPrice, setToPrice] = useState(0);
  const [fromPrice, setFromPrice] = useState(0);

  // useEffect(() => {
  //   fetch("https://belarusbank.by/api/kursExchange")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setRates(json.rates);
  //       console.log(json);
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //       alert("не удалось получить инфу");
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://belarusbank.by/api/kursExchange")
      .then((res) => {
        setRates(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.warn(err);
        alert("не удалось получить инфу");
      });
  }, []);

  const onChangeOnPrice = (value) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setFromPrice(value);
    setToPrice(result);
  };
  const onChangeToPrice = (value) => {
    setToPrice(value);
  };

  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeOnPrice}
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
