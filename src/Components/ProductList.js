// ProductList.js
import React from 'react';
import { useCart } from './Task5';

const ProductList = () => {
  const { state, dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product, productId: product.id },
    });
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {state.products.map((product) => (
          <li key={product.id}>
            {product.name} - Inventory: {product.inventory}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;