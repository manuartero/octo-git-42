import "./App.css";
import MonkeyCounter from "./components/monkey-counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MonkeyCounter init={40} />
      </header>
    </div>
  );
}

export default App;
