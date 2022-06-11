import React from 'react';
import SingersItem from './SingersItem';

export default function SingersList({ singers }) {
  return (
    <div className='singers'>
      {singers.map((singer, i) => <SingersItem {...singer} key={i} />)}
    </div>
  );
}
