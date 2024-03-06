import './App.css';
import { PersonCard } from './components/PersonCard';

function App() {

  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} haircolor="negro" />
      <PersonCard firstName="John" lastName="Smith" age={88} haircolor="marrón" />
    </div>
  );
}

export default App;