/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import Block from './components/Block';

function App() {
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('EUR');
  const [amountFrom, setAmountFrom] = useState(0);
  const [amountTo, setAmountTo] = useState(0);
  const ratesRef = useRef({});

  useEffect(() => {
    fetch('https://api.exchangerate.host/latest?base=USD')
      .then(res => res.json())
      .then(data => (ratesRef.current = data.rates))
      .catch(err => console.error(err));
  }, []);

  const onChangeAmountFrom = value => {
    const rawValue = value / ratesRef.current[currencyFrom];
    const result = rawValue * ratesRef.current[currencyTo];
    setAmountFrom(value);
    setAmountTo(result.toFixed(2));
  };
  const onChangeAmountTo = value => {
    const result =
      (ratesRef.current[currencyFrom] / ratesRef.current[currencyTo]) * value;
    setAmountFrom(result.toFixed(2));
    setAmountTo(value);
  };

  useEffect(() => {
    onChangeAmountFrom(amountFrom);
  }, [currencyFrom]);

  useEffect(() => {
    onChangeAmountTo(amountTo);
  }, [currencyTo]);

  return (
    <div className="App">
      <Block
        value={amountFrom}
        currency={currencyFrom}
        onChangeCurrency={setCurrencyFrom}
        onChangeAmount={onChangeAmountFrom}
      />
      <Block
        value={amountTo}
        currency={currencyTo}
        onChangeCurrency={setCurrencyTo}
        onChangeAmount={onChangeAmountTo}
      />
    </div>
  );
}

export default App;
