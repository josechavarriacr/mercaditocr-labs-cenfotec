import logo from './logo.svg';
import './App.css';
import { Clock } from './components/clock/clock'

const contentStyles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}
function App() {
  return (
    <div style={contentStyles}>
    <Clock/>
    <h1>Mercaditocr PoC</h1>
    <p>An open source platform to connect entrepreneurs with local clients</p>
  </div>
  );
}

export default App;
