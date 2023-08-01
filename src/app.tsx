import './app.scss';

function App() {
  return (
    <div className="converter-app">
      <div className="converter-app__input">
        <div className="converter-app__input-buttons">
          <button className="converter-app__currency-btn">rus</button>
          <button className="converter-app__currency-btn">usd</button>
          <button className="converter-app__currency-btn">eur</button>
          <button className="converter-app__currency-btn">gbp</button>
          <select name="" id="" className="converter-app__currency-btn">
            <option></option>
          </select>
        </div>
        <div className="converter-app__input-field">0</div>
      </div>
      <div className="converter-app__output">
        <div className="converter-app__output-buttons">
          <button className="converter-app__currency-btn">rus</button>
          <button className="converter-app__currency-btn">usd</button>
          <button className="converter-app__currency-btn">eur</button>
          <button className="converter-app__currency-btn">gbp</button>
          <select name="" id="" className="converter-app__currency-btn">
            <option></option>
          </select>
        </div>
        <div className="converter-app__output-field">0</div>
      </div>
    </div>
  );
}

export { App };
