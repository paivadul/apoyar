import './App.css';
import { PersonCard } from './components/PersonCard';

function App() {

  return (
    <div className="App">
      <PersonCard firstName="Maria" lastName="De los Santos" age={25} haircolor="castaño" />
      <PersonCard firstName="Juan" lastName="Pérez" age={30} haircolor="negro" />
      <PersonCard firstName="Ana" lastName="García" age={35} haircolor="rubio" />
    </div>
  );
}

export default App;