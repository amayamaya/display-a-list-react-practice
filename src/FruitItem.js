import React from 'react';

export default function FruitItem({ name, flavor, color, origin }) {
  return (
    <div className="fruit">
      <p>This is a {name}!</p>
      <p>It has a {flavor} flavor profile.</p>
      <p>It is usually {color}.</p>
      <p>And it is thought to be from {origin}.</p>
    </div>
  );
}
