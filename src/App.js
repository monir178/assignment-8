import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Workouts from './components/Workouts/Workouts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Workouts></Workouts>

    </div>
  );
}

export default App;
