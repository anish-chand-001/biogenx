  'use client'

  import React, { useEffect, useState } from 'react'
  import HorizontalSmoothTrack from '@/components/Solutions/HorizontalSmoothTrack'
  import { WOMEN_PRODUCTS, CHILDREN_PRODUCTS, GENERAL_PRODUCTS } from './constants'
  import styles from './OurSolutions.module.css'

  export default function OurSolutionsPage() {
    const [activeSection, setActiveSection] = useState('women')

    useEffect(() => {
      const sections = ['women', 'children', 'general']
      
      // Set up the intersection observer to track which viewport section is active
      const observerOptions = {
        root: null, // viewport
        rootMargin: '-20% 0px -40% 0px', // Triggers when the section dominates the center view
        threshold: 0.2,
      }

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      }

      const observer = new IntersectionObserver(observerCallback, observerOptions)

      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) observer.observe(element)
      })

      return () => observer.disconnect()
    }, [])

    return (
      <div className={`${styles.mainScrollShell} ${styles.noScrollbar}`}>
        
        {/* Floating Category Navigation Dots with Active States */}
        <div className={styles.floatingNav}>
          <a 
            href="#women" 
            className={`${styles.navDot} ${activeSection === 'women' ? styles.navDotActive : ''}`} 
            title="Maternal Solutions"
          ></a>
          <a 
            href="#children" 
            className={`${styles.navDot} ${activeSection === 'children' ? styles.navDotActive : ''}`} 
            title="Pediatric Formulations"
          ></a>
          <a 
            href="#general" 
            className={`${styles.navDot} ${activeSection === 'general' ? styles.navDotActive : ''}`} 
            title="Clinical Essentials"
          ></a>
        </div>

        {/* Section 1: Women */}
        <section id="women" className={styles.viewportSection}>
          <HorizontalSmoothTrack 
            title="For Women" 
            tagline="01 // Maternal Solutions" 
            products={WOMEN_PRODUCTS} 
          />
        </section>

        {/* Section 2: Children */}
        <section id="children" className={styles.viewportSection}>
          <HorizontalSmoothTrack 
            title="For Children" 
            tagline="02 // Pediatric Formulations" 
            products={CHILDREN_PRODUCTS} 
          />
        </section>

        {/* Section 3: General Care */}
        <section id="general" className={styles.viewportSection}>
          <HorizontalSmoothTrack 
            title="General Care" 
            tagline="03 // Clinical Essentials" 
            products={GENERAL_PRODUCTS} 
          />
        </section>

      </div>
    )
  }