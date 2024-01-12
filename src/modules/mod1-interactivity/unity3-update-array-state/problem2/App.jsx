import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Queso',
  count: 5,
}, {
  id: 2,
  name: 'Espaguetis',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId) {
    const productIdx = products.findIndex(product => product.id === productId)
    if(products[productIdx].count - 1 < 1) {
      return setProducts(products.filter(product => product.id !== productId))
    }
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    }))
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id)
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
