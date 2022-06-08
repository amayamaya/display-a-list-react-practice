import React from 'react';
import FlowersItem from './FlowersItem';

export default function FlowersList({ flowers }) {
//   console.log(flowers);
  return (
    <div>
      {flowers.map((flower, i) => (
        <FlowersItem flower={flower} key={flower + i} />
      ))}
    </div>
  );
}
