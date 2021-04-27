import './App.scss';
import Calculator from './component/Calculator';
import MultiClock from './component/MultiClock';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <MultiClock />
      <Calculator />
    </div>
  );
}
