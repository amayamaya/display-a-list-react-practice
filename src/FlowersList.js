import React from 'react';
import FlowersItem from './FlowersItem';

export default function FlowersList({ flowers }) {
  console.log(flowers);
  return (
    <div>
      <FlowersItem />
    </div>
  );
}
