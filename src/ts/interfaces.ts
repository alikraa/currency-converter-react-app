interface BlockProps {
  value: number;
  handleChangeValue: (event: HTMLInputElement['value']) => void;
  currency: string;
  handleChangeCurrency: (currency: string) => void;
}

interface CurrencyData {
  [index: string]: {
    Value: string;
  };
}

export type { BlockProps, CurrencyData };
