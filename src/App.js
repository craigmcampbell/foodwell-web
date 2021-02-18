import './App.css';
import Upc from './components/Upc';

function App() {
  return (
    <div className="d-flex justify-content-center">
      <header className="App-header">
        {/* <h1 className="mb-3">Foodwell</h1> */}
        <img src="logo.jpg" alt="Foodwell Logo" />
        <br />
        <br />

        <Upc />
      </header>
    </div>
  );
}

export default App;
