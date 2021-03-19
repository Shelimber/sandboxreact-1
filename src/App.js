import Menu from './Paginas/Menu';
import Submenu from './Paginas/Submenu';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <p>
          <Menu />
        </p>
      </header>
      <main className="App">
      <p>
          <Submenu />
        </p>
        <h3>@Shely_Hzo</h3>
      </main>
    </div>
  );
}

export default App;
