"use client"
import styles from "./login.module.css";
import React, { useState } from 'react'; // Import useState hook
import { useRouter } from "next/navigation"; // Import useRouter hook

export default function LoginPage() {
  // Declare state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize useRouter

  // Function to handle login button click
  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'password1') {
      router.push('/'); // Redirect to specified URL
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <form className={styles.loginform}>
        {/* Input field for email */}
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        {/* Input field for password */}
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        {/* Button to trigger login */}
        <button className={styles.loginbutton} onClick={handleLogin}>Login</button>
        {/* Button for creating a new account */}
        <button className={styles.loginbutton}>Create New Account</button>
      </form>
    </div>
  );
}
