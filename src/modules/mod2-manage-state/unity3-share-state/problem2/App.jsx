import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }
  const items = query === '' ? foods : filterItems(foods, query)
  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={items} />
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Buscar:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
