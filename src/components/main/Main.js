"use client";
import React, { useEffect, useState } from 'react';
import styles from "./Main.module.css";
import Image from 'next/image';
import Search from '../search/Search';
import { useRouter } from "next/navigation";

// Fetching the API
export const ProductList = ({ searchQuery, addToCart }) => {
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
              <Image src={product.image} className={styles.productImage} width={500} height={500} alt='' />
              ${product.price}
              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main Function
export default function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const router = useRouter();  // Move useRouter to the top level of the component

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    alert('Added to cart');
    router.push('/checkout');  // Use router after updating cart

    // Save the cart data to cart.json via API
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart: updatedCart }),
    })
      .then(async response => {
        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error || 'Failed to save cart');
        }
        return response.json();
      })
      .then(data => {
        console.log('Cart saved to cart.json:', data);
      })
      .catch(error => {
        console.error('Error saving cart to cart.json:', error);
      });
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.products}>
        <ProductList searchQuery={searchQuery} addToCart={addToCart} />
      </div>
      <Search onChange={handleSearchInputChange} />
    </div>
  );
}
