import { CurrencyData } from './interfaces.ts';

export const defaultCurrencies = [
  { id: 1, name: 'RUB' },
  { id: 2, name: 'USD' },
  { id: 3, name: 'EUR' },
  { id: 4, name: 'GBP' },
];

export const defaultValues = {
  from: 'FROM',
  to: 'TO',
};

export const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

export const converter = (
  setPrice: (arg: number) => void,
  fromCurrency: string,
  toCurrency: string,
  data: CurrencyData,
  value: string | number,
  id: string
) => {
  const condition = id === 'FROM';

  if (fromCurrency === toCurrency) {
    setPrice(Number(value));
  } else if (fromCurrency === defaultCurrencies[0].name) {
    const result = Number(value) / Number(data[`${toCurrency}`].Value);
    const result1 = Number(value) * Number(data[`${toCurrency}`].Value);

    return condition
      ? setPrice(Number(result.toFixed(3)))
      : setPrice(Number(result1.toFixed(3)));
  } else if (toCurrency === defaultCurrencies[0].name) {
    const result = Number(value) * Number(data[`${fromCurrency}`].Value);
    const result1 = Number(value) / Number(data[`${fromCurrency}`].Value);

    return condition
      ? setPrice(Number(result.toFixed(3)))
      : setPrice(Number(result1.toFixed(3)));
  } else {
    const price = Number(value) / Number(data[`${toCurrency}`].Value);
    const result = price * Number(data[`${fromCurrency}`].Value);

    const price1 = Number(value) / Number(data[`${fromCurrency}`].Value);
    const result1 = price1 * Number(data[`${toCurrency}`].Value);

    return condition
      ? setPrice(Number(result.toFixed(3)))
      : setPrice(Number(result1.toFixed(3)));
  }

  return null;
};
