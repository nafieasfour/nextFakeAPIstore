"use client"
import React from 'react'
import styles from "./Main.module.css"
import Image from 'next/image'


// components/ProductList.js

import { useEffect, useState } from 'react';

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className={styles.products}>
        <ul className={styles.productList}>
          {products.map(product => (
            <li key={product.id} className={styles.productCart}>
              <strong>{product.title}</strong>
              <Image src={product.image} className={styles.productImage} width={500}
                height={500} />
              ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default function Main() {
  return (
    <div className={styles.mainWrapper}>
      <p>Welcome To Our Store</p>
      <div className={styles.products}>
        <ProductList />
      </div>
    </div>
  )
}
