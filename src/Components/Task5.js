
import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = {
  products: [
    { id: 1, name: 'Iphone 13', inventory: 10 },
    { id: 2, name: 'Iphone 14', inventory: 15 },
    { id: 3, name: 'Iphone 15', inventory: 5 },
  ],
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.productId
            ? { ...product, inventory: product.inventory - 1 }
            : product
        ),
        cart: [...state.cart, action.payload.product],
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };