interface BlockProps {
  value: number;
  handleChangeValue: (event: HTMLInputElement['value']) => void;
  currency: string;
  handleChangeCurrency: (currency: string) => void;
}

export type { BlockProps };
