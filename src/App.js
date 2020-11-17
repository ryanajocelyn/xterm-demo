import './App.css';
import XTerminal from './xterm/xterm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="terminal"></div>
        <XTerminal />
      </header>
    </div>
  );
}

export default App;
