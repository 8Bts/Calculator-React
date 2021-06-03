/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
    content: null,
  });

  const handleCLick = (btnName) => {
    setState(calculate(state, btnName));
  };

  return (
    <div className="calculator">
      <Display result={state.content || '0'} />
      <ButtonPanel clickHandler={handleCLick} />
    </div>
  );
};

export default App;
