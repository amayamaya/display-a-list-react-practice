import React from 'react';
import SingersItem from './SingersItem';

export default function SingersList({ singers }) {
  return (
    <div>
      {singers.map((singer, i) => <SingersItem {...singer} key={i} />)}
    </div>
  );
}
