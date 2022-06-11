import FruitItem from './FruitItem';

export default function FruitList({ fruit }) {
  return (
    <div className='fruit'>
      {fruit.map((fruit, i) => (
        <FruitItem {...fruit} key={fruit.name + i} />
      ))}
    </div>
  );
}
