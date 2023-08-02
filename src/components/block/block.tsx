import './block.scss';

function Block() {
  return (
    <div className="converter-app__field">
      <div className="converter-app__field-buttons">
        <button className="converter-app__currency-btn active" type="button">
          RUS
        </button>
        <button className="converter-app__currency-btn" type="button">
          USD
        </button>
        <button className="converter-app__currency-btn" type="button">
          EUR
        </button>
        <button className="converter-app__currency-btn" type="button">
          GBP
        </button>
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
        placeholder="0"
        className="converter-app__field-input"
      />
    </div>
  );
}

export { Block };
