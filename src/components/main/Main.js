"use client"
import React from 'react'
import styles from "./Main.module.css"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Search from '../search/Search';

// Fetching the API
export const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Initially set filtered products to all products
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    // Filter products based on search query
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const toggleTitle = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, showFullTitle: !product.showFullTitle } : product
      )
    );
  };

  return (
    <div>
      <h1>Products</h1>
      <div className={styles.products}>
        <ul className={styles.productList}>
          {filteredProducts.map(product => (
            <li key={product.id} className={styles.productCart}>
              <strong>{product.showFullTitle ? product.title : product.title.split(' ').slice(0, 3).join(' ')}</strong>
              {!product.showFullTitle && <button onClick={() => toggleTitle(product.id)}>See More</button>}
              <Image src={product.image} className={styles.productImage} width={500} height={500} alt=''/>
              ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main  Function
export default function Main() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.products}>
        <ProductList searchQuery={searchQuery} />
      </div>
      <Search onChange={handleSearchInputChange} />
    </div>
  )
}
