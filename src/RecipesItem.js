import React from 'react';
import { recipes } from './recipes';

export default function RecipesItem({ name, veggies }) {
  return (
    <div className="recipes">
      <p>I love making {name}!</p>
      {veggies.map((veggie, i) => (
        <p key={veggie + i}>{veggie}</p>
      ))}
    </div>
  );
}
