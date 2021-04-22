import React from 'react';

import './App.scss';
import Clock from './component/Clock';

export default class App extends React.Component {
  state = {
    clocks: [<Clock />, <Clock />]
  }

  render(): JSX.Element {
    const { clocks } = this.state;

    return <div className="App">
      {clocks.map((c) => c)}
    </div>;
  }
}
