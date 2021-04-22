import React, { Component } from 'react';
import './App.css';

import { Clock } from "./component/Clock";


class App extends Component {
  clocks: JSX.Element[] = [];

  constructor(props: any) {
    super(props);
    this.clocks.push(<Clock />);
    this.clocks.push(<Clock />);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <span>Teste:</span>
        {this.clocks.map(c => c)}
      </div>
    );
  }
}

export default App;
