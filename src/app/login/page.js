"use client"
import styles from "./login.module.css";
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { authenticateUser } from "@/api/auth";


export default function page() {
  return (
    <div className={styles.loginWrapper}>
      <form className={styles.loginform}>
        <input className={styles.logininput} type='text' placeholder="name"/>
        <input className={styles.logininput} type='text' placeholder="password"/>
        <button className={styles.loginbutton}>Login</button>
        <button className={styles.loginbutton}>Create New Account</button>
      </form>
    </div>
  )
}