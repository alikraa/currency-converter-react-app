interface BlockProps {
  id: string;
  value: number;
  handleChangeValue: (event: HTMLInputElement['value'], id: string) => void;
  currency: string;
  handleChangeCurrency: (currency: string) => void;
}

interface CurrencyData {
  [index: string]: {
    Value: string;
  };
}

export type { BlockProps, CurrencyData };
