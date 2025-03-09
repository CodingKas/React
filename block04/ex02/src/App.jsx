import React, { useState, useEffect } from "react";
import axios from "axios";
import EuroInput from "./EuroInput";
import ConvertedValue from "./ConvertedValue";
import "./index.css";

const App = () => {
  const [euroAmount, setEuroAmount] = useState("");
  const [rateEURtoUSD, setRate] = useState(1.17);

  useEffect(() => {
    const apiKey = "your_api_key";
    const url = `https://api.apilayer.com/currency_data/live?apikey=${apiKey}`;

    axios
      .get(url)
      .then((res) => {
        setRate(res.data.quotes.USDEUR);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <EuroInput setEuroAmount={setEuroAmount} />
      <ConvertedValue euroAmount={euroAmount} rate={rateEURtoUSD} />
    </div>
  );
};

export default App;
