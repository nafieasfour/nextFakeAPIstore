import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img id={styles.imglogo} src={"/logo2.jpeg"} alt='logo' />
            </div>
            <ul className={styles.list}>
                <li>Home</li>
                <li>Products</li>
                <li>My profile</li>
            </ul>
        </div>
    )
}
