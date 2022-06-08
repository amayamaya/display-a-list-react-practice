import FruitItem from './FruitItem';

export default function FruitList({ fruit }) {
  return (
    <div>
      {fruit.map((fruit, i) => (
        <FruitItem {...fruit} key={fruit.name + i} />
      ))}
    </div>
  );
}
