"use client"; // Ensure it's a client-side component if you're using hooks like useState

import React, { useEffect, useState } from 'react';
import styles from './checkout.module.css';

export default function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  return (
    <div className={styles.checkoutWrapper}>
      <h1>Checkout</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, product) => total + product.price, 0)}</p>
    </div>
  );
}
