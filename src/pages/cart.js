import React, { useContext } from 'react';
import Fixed from '../components/fixed';
import { CartContext } from '../components/cartContext.js';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart ,clearCart} = useContext(CartContext);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };
  const handleClearCart=()=>{
    clearCart();
  };

  return (
    <Fixed>
      <div className="cart-container">
        <div className="add-icon-container">
          <button className="clear-cart-button" onClick={handleClearCart}>
            <i className="fas fa-trash"></i>
            Clear Cart
          </button>
        </div>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Author: {item.author}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Fixed>
  );
};

export default Cart;
