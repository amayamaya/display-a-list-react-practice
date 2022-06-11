import React from 'react';
import FlowersItem from './FlowersItem';

export default function FlowersList({ flowers }) {
//   console.log(flowers);
  return (
    <div className='flowers'>
      {flowers.map((flower, i) => (
        <FlowersItem flowers={flower} key={flower + i} />
      ))}
    </div>
  );
}
