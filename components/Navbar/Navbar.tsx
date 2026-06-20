
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Navbar.module.css'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Solutions', href: '/solutions' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Contact Us', href: '/contactus' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo/logo-biogenx.png"
            alt="BioGenX"
            width={140}
            height={35}
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
  className={`${styles.menuButton} ${
    menuOpen ? styles.open : ''
  }`}
  onClick={() => setMenuOpen(!menuOpen)}
>
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.active : ''
        }`}
      >
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            style={{
              transitionDelay: `${index * 0.1}s`,
            }}
            className={styles.mobileLink}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  )
}