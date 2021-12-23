import { NavBar } from './NavBar';
import React from 'react';
import styles from './Layout.module.css'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={styles.centeredPage}>
        {children}
      </main>

      <footer className={styles.footer}>
        Create by Fabio Biondi & Adriano Grimaldi
      </footer>
    </>
  )
}
