import './App.css';
import FlowersList from './FlowersList';
import FruitList from './FruitList';
import SingersList from './SingersList';
import { flowers } from './flowers.js';
import { fruit } from './fruit.js';

function App() {
  return (
    <>
      <div className="App">Render all your lists here. Pass the arrays as props.</div>
      <FlowersList flowers={flowers} />
      <FruitList fruit={fruit} />
      <SingersList />
    </>
  );
}

export default App;
