import Menu from './Paginas/Menu';
import Submenu from './Paginas/Submenu';
import './App.css';
import VerClientes1 from './Paginas/Jsx/Cliente/VerClientes1';
import VerEjemplos from './Paginas/Jsx/Ejemplos/VerEjemplos';

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
        <p>
          <VerClientes1 />
        </p>
        <p>
          <VerEjemplos />
        </p>
        <h3>@Shely_Hzo</h3>
      </main>
    </div>
  );
}

export default App;
