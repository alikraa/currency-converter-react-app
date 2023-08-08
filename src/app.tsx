import { useEffect, useState } from 'react';
import { Block } from './components/block/block.tsx';
import { defaultCurrencies, url } from './ts/view.ts';
import { serverRequest } from './ts/request.ts';
import { CurrencyData } from './ts/interfaces.ts';
import './app.scss';

function App() {
  const [fromCurrency, setFromCurrency] = useState(defaultCurrencies[0].name);
  const [toCurrency, setToCurrency] = useState(defaultCurrencies[1].name);

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const [rates, setRates] = useState<CurrencyData>({});
  const [date, setDate] = useState('');

  useEffect(() => {
    serverRequest(url).then((response) => setRates(response.Valute));

    serverRequest(url).then((response) =>
      setDate(new Date(response.Date).toLocaleDateString())
    );
  }, []);

  const onChangeFromPrice = (value: HTMLInputElement['value']) => {
    if (fromCurrency === toCurrency) {
      setToPrice(Number(value));
    } else if (fromCurrency === defaultCurrencies[0].name) {
      const result = Number(value) / Number(rates[`${toCurrency}`].Value);
      setToPrice(Number(result.toFixed(3)));
    } else if (toCurrency === defaultCurrencies[0].name) {
      const result1 = Number(value) * Number(rates[`${fromCurrency}`].Value);
      setToPrice(Number(result1.toFixed(3)));
    } else {
      const price = Number(value) / Number(rates[`${toCurrency}`].Value);
      const result2 = price * Number(rates[`${fromCurrency}`].Value);
      setToPrice(Number(result2.toFixed(3)));
    }

    setFromPrice(Number(value));
  };

  const onChangeToPrice = (value: HTMLInputElement['value']) => {
    if (fromCurrency === toCurrency) {
      setFromPrice(Number(value));
    } else if (fromCurrency === defaultCurrencies[0].name) {
      const result = Number(value) * Number(rates[`${toCurrency}`].Value);
      setFromPrice(Number(result.toFixed(3)));
    } else if (toCurrency === defaultCurrencies[0].name) {
      const result1 = Number(value) / Number(rates[`${fromCurrency}`].Value);
      setFromPrice(Number(result1.toFixed(3)));
    } else {
      const price = Number(value) / Number(rates[`${fromCurrency}`].Value);
      const result2 = price * Number(rates[`${toCurrency}`].Value);
      setFromPrice(Number(result2.toFixed(3)));
    }

    setToPrice(Number(value));
  };

  return (
    <>
      <h1 className="header">Последнее обновление базы данных: {date} </h1>
      <div className="converter-app">
        <Block
          value={fromPrice}
          handleChangeValue={onChangeFromPrice}
          currency={fromCurrency}
          handleChangeCurrency={setFromCurrency}
        />
        <Block
          value={toPrice}
          handleChangeValue={onChangeToPrice}
          currency={toCurrency}
          handleChangeCurrency={setToCurrency}
        />
      </div>
    </>
  );
}

export { App };
