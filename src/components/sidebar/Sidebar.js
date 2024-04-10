import React from 'react'
import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <img src={'/side.jpeg'} id={styles.sideimg} alt='sideimg' />
      <button className={styles.sidebutton}>Our weekly Offer</button>
    </div>
  )
}
