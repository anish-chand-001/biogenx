'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import styles from './ContactUs.module.css'

export default function ContactUsPage() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <div className={styles.pageViewport}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.sectionContainer}>
          <span className={styles.overlineTag}>03 // GET IN TOUCH</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heroTitle}
          >
            <span>Connect with </span>
            <span className={styles.accentTextText}>US</span>
          </motion.h1>
        </div>
      </section>

      {/* CONTACT INFO GRID */}
      <section className={styles.contactInterfaceSection}>
        <div className={styles.sectionContainer}>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={styles.contactGrid}
          >
            
            {/* Location Card */}
            <motion.div variants={fadeInUpVariants} className={styles.vectorCard}>
              <div className={styles.iconContainer}>
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className={styles.vectorLabel}>Corporate Office</h3>
                <p className={styles.vectorData}>
                  B-12, Shrijibapa Complex<br />
                  Near Vasna bus-stop Vasna,<br />
                  Ahmedabad-380007 Gujarat, India
                </p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div variants={fadeInUpVariants} className={styles.vectorCard}>
              <div className={styles.iconContainer}>
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className={styles.vectorLabel}>Direct Line</h3>
                <p className={styles.vectorData}>+91 98250 16788</p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div variants={fadeInUpVariants} className={styles.vectorCard}>
              <div className={styles.iconContainer}>
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className={styles.vectorLabel}>Digital Inquiries</h3>
                <p className={styles.vectorData}>Biogenxlifesciences@gmail.com</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className={styles.ctaFooterSection}>
        <div className={styles.sectionContainer}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className={styles.ctaBannerContent}
          >
            <h2 className={styles.ctaTitle}>Let's Build Better Healthcare Together</h2>
            <p className={styles.ctaDescription}>
              At BioGenX Lifesciences, we believe in creating meaningful partnerships that improve patient care through quality, innovation, and trust.
            </p>
            <motion.a 
              href="#top"
              whileHover={{ x: 5 }}
              className={styles.ctaTextLink}
            >
              {/* <span>Partner with us</span> */}
              {/* <ArrowRight size={18} /> */}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}