"use client"
import styles from "./login.module.css";
import React from 'react';

export default function page() {
  return (
    <div className={styles.loginWrapper}>
      <form className={styles.loginform}>
        <input className={styles.logininput} type='text' placeholder="name"/>
        <input className={styles.logininput} type='text' placeholder="password"/>
        <button className={styles.loginbutton}>login</button>
      </form>
    </div>
  )
}