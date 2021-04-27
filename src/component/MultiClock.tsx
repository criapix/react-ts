import React, { SyntheticEvent } from 'react';

import Clock from './Clock';

interface MultiClockState {
  clocks: number[];
}

export default class MultiClock extends React.Component<any, MultiClockState> {
  state = {
    clocks: [1, 2],
  };

  adicionarClick = (e: SyntheticEvent): void => {
    e.preventDefault();

    this.setState((state) => ({
      clocks: [...state.clocks, state.clocks.length + 1],
    }));
  };

  render(): JSX.Element {
    const { clocks } = this.state;

    return (
      <div className="App">
        {clocks.map((c) => (
          <Clock key={c.toString()} />
        ))}
        <button onClick={this.adicionarClick} type="button">
          +
        </button>
      </div>
    );
  }
}
