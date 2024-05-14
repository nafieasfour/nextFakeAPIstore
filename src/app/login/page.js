'use client'
import styles from "./login.module.css";
import React, { useState } from 'react'; // Import useState hook
import { useRouter } from "next/navigation"; // Import useRouter hook

export default function LoginPage() {
  // Declare state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === '4#22cft_B$') {
      router.push('/');
      console.log("Login is done");
      alert("Login successful");
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <form className={styles.loginform} onSubmit={(e) => e.preventDefault()}>
        {/* Input field for email */}
        <input type="text" placeholder="Email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
        {/* Input field for password */}
        <input type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} />
        {/* Button to trigger login */}
        <button className={styles.loginbutton} onClick={handleLogin}>Login</button>
        {/* Button for creating a new account */}
        <button className={styles.loginbutton} type="button">Create New Account</button>
        <button type="button" onClick={() => router.push('/')}>
          Dashboard
        </button>
      </form>
    </div>
  );
}
