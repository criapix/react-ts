import React, { SyntheticEvent } from 'react';

import './App.scss';
import Clock from './component/Clock';

interface AppState {
  clocks: JSX.Element[]
}

export default class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);

    this.adicionarClick = this.adicionarClick.bind(this);
  }

  state = {
    clocks: [<Clock />, <Clock />]
  };

  adicionarClick(e: SyntheticEvent): void {
    e.preventDefault();

    this.setState((state) => ({
      clocks: [...state.clocks, <Clock />]
    }));
  }

  render(): JSX.Element {
    const { clocks } = this.state;

    return <div className="App">
      {clocks.map((c) => c)}
      <button onClick={this.adicionarClick} type="button">+</button>
    </div>;
  }
}
