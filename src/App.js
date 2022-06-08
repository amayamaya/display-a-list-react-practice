import './App.css';
import FlowersList from './FlowersList';
import { flowers } from './flowers.js';

function App() {
  return (
    <>
      <div className="App">Render all your lists here. Pass the arrays as props.</div>
      <FlowersList flowers={flowers} />
    </>
  );
}

export default App;
