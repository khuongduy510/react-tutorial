export default function List(prop) {
  const itemList = prop.item
  return (
    <ul>
      {itemList.map((items) => (
        <li key={items.id}>{items.name}</li>
      ))}
    </ul>
  );
}
