import React from 'react'
import styles from "./Search.module.css"

export default function Search({onChange}) {
  return (
    <div className={styles.searchWrapper}>
    <input
        type="text"
        placeholder="Search..."
        onChange={onChange}
        className={styles.search}
      />
      </div>
  )
}