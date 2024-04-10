"use client"
import styles from "./signup.module.css";
import React from 'react';

export default function page() {
  return (
    <div className={styles.signupWrapper}>
      <form className={styles.signupform}>
        <input className={styles.signupinput} type='text' placeholder="name"/>
        <input className={styles.signupinput} type='text' placeholder="password"/>
        <button className={styles.signupbutton}>Create an account</button>
      </form>
    </div>
  )
}
