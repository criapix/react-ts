import React from 'react';

interface CalculatorState {
  var1: number;
  operator: string;
  var2: number;
  result: number;
}

export default class Calculator extends React.Component<any, CalculatorState> {
  state = {
    var1: 0,
    operator: '-',
    var2: 0,
    result: 0,
  };

  handlerVarChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState((state) => ({ ...state, [e.target.name]: +e.target.value }));
  };

  handlerOperatorChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ operator: e.target.value });
  };

  handlerSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const { var1, operator, var2 } = this.state;
    const result = this.calculate(var1, operator, var2);
    this.setState({ result });
  };

  calculate = (var1: number, operator: string, var2: number): number => {
    switch (operator) {
      case '+':
        return var1 + var2;
      case '-':
        return var1 - var2;
      case '*':
        return var1 * var2;
      case '/':
        return var1 / var2;
      default:
        return 0;
    }
  };

  render(): JSX.Element {
    const { var1, operator, var2, result } = this.state;

    return (
      <form onSubmit={this.handlerSubmit}>
        <input
          name="var1"
          onChange={this.handlerVarChange}
          type="number"
          value={var1}
        />
        <label htmlFor="operator">
          <select
            name="operator"
            onChange={this.handlerOperatorChange}
            value={operator}
          >
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
          </select>
        </label>
        <input
          name="var2"
          onChange={this.handlerVarChange}
          type="number"
          value={var2}
        />
        <button type="submit">Calcular</button>

        <div>
          {var1} {operator} {var2} = {result}
        </div>
      </form>
    );
  }
}
