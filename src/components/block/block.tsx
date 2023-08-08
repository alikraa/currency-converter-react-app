import { BlockProps } from '../../ts/interfaces.ts';
import { defaultCurrencies } from '../../ts/view.ts';
import './block.scss';

function Block({
  id,
  value,
  handleChangeValue,
  currency,
  handleChangeCurrency,
}: BlockProps) {
  const currencies = defaultCurrencies.map((item) => (
    <button
      key={item.id}
      className={`converter-app__currency-btn ${
        currency === item.name ? 'active' : ''
      }`}
      type="button"
      onClick={() => handleChangeCurrency(item.name)}
    >
      {item.name}
    </button>
  ));
  return (
    <div className="converter-app__field" id={id}>
      <div className="converter-app__field-buttons">
        {currencies}
        <button className="converter-app__currency-btn" type="button" disabled>
          <img
            src="../../../arrow-icon.svg"
            alt="Arrow"
            className="btn-image"
          />
        </button>
      </div>
      <input
        type="number"
        value={value}
        onChange={(event) => handleChangeValue(event.currentTarget.value, id)}
        placeholder="0"
        className="converter-app__field-input"
      />
    </div>
  );
}

export { Block };
