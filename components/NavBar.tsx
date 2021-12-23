import Link from 'next/link';
import React from 'react';
import styles from './NavBar.module.css';

export const NavBar: React.VFC = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.item}>Home</a>
      </Link>
      <Link href="/catalog">
        <a className={styles.item}>Catalog</a>
      </Link>
      <Link href="/contacts">
        <a className={styles.item}>Contact Us</a>
      </Link>
    </div>
  )
}
