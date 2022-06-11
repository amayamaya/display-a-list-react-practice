import RecipesItem from './RecipesItem';

export default function RecipeList({ recipes }) {
  return (
    <div className='recipes'>
      {recipes.map((recipe, i) => (
        <RecipesItem {...recipe} key={recipe.name + i} />
      ))}
    </div>
  );
}
