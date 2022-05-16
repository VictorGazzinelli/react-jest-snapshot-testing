import Link from './components/Link'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link id={'myLink'} url={'https://reactjs.org/docs/getting-started.html'} text={'Get Started'} />
      </header>
    </div>
  );
}

export default App;
