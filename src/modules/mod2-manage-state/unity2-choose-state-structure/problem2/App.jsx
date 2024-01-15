import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Calcetines cálidos', packed: true },
  { id: 1, title: 'Diario de viaje', packed: false },
  { id: 2, title: 'Acuarelas', packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  const total = items.length
  const packed = items.reduce((acc, current) => {
    if(current.packed) {
      return acc + 1
    } return acc
  }, 0)

  function handleAddItem(title) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ]);
  }

  function handleChangeItem(nextItem) {
    setItems(items.map(item => {
      if (item.id === nextItem.id) {
        return nextItem;
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(itemId) {
    setItems(
      items.filter(item => item.id !== itemId)
    );
  }

  return (
    <>
      <AddItem
        onAddItem={handleAddItem}
      />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>¡{packed} de {total} empacados!</b>
    </>
  );
}
