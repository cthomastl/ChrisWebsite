import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon';
import Card from './components/Card';
import Intro from './components/Intro';
import Colums from './components/Colums';

function App() {
  return (
    <div>
    <div className="App">
      <header className="App-header">
      <Card />
      <Colums />
     </header>
    </div>
    </div>
  );
}

export default App;
