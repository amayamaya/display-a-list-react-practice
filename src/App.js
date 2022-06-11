import './App.css';
import FlowersList from './FlowersList';
import FruitList from './FruitList';
import SingersList from './SingersList';
import RecipeList from './RecipesList';
import { flowers } from './flowers.js';
import { fruit } from './fruit.js';
import { singers } from './singers.js';
import { recipes } from './recipes.js';

function App() {
  return (
    <>
      <div className="App">Render all your lists here. Pass the arrays as props.</div>
      <FlowersList flowers={flowers} />
      <FruitList fruit={fruit} />
      <SingersList singers={singers} />
      <RecipeList recipes={recipes} />
    </>
  );
}

export default App;
