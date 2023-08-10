import { useEffect, useState } from 'react';
import { Block } from './components/block/block.tsx';
import { converter, defaultCurrencies, url, defaultValues } from './ts/view.ts';
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

  const onChangeFromPrice = (
    value: HTMLInputElement['value'] | number,
    id: string
  ) => {
    converter(setToPrice, fromCurrency, toCurrency, rates, value, id);

    setFromPrice(Number(value));
  };

  const onChangeToPrice = (
    value: HTMLInputElement['value'] | number,
    id: string
  ) => {
    converter(setFromPrice, fromCurrency, toCurrency, rates, value, id);

    setToPrice(Number(value));
  };

  useEffect(() => {
    if (Object.keys(rates).length !== 0) {
      onChangeFromPrice(fromPrice, defaultValues.from);
    }
  }, [fromCurrency]);

  useEffect(() => {
    if (Object.keys(rates).length !== 0) {
      onChangeToPrice(toPrice, defaultValues.to);
    }
  }, [toCurrency]);

  return (
    <>
      <h1 className="header">Последнее обновление базы данных: {date} </h1>
      <div className="converter-app">
        <Block
          id={defaultValues.from}
          value={fromPrice}
          handleChangeValue={onChangeFromPrice}
          currency={fromCurrency}
          handleChangeCurrency={setFromCurrency}
        />
        <Block
          id={defaultValues.to}
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
