import Link from 'next/link'
import React from 'react'
import styles from '../styles/Nav.module.css'
const Nav = () => {
  return (
    <div className={styles.cont}>
        <div className={styles.contH2}>
            <h2 className={styles.text}>Erfan Akhteh</h2>
        </div>
        <nav className={styles.nav}>
            <ul>
            
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav