import React from 'react';

import './App.scss';
import Box from './component/Box';
import Calculator from './component/Calculator';
import MultiClock from './component/MultiClock';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Box title="Relógios">
        <MultiClock />
      </Box>
      <Box title="Calculadora">
      <Calculator />
      </Box>
    </div>
  );
}
