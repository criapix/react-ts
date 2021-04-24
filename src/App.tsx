import React, { SyntheticEvent } from 'react';

import './App.scss';
import Clock from './component/Clock';

interface AppState {
  clocks: number[];
}

export default class App extends React.Component<any, AppState> {
  // constructor(props: any) {
  //   super(props);

  //   this.adicionarClick = this.adicionarClick.bind(this);
  // }

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
