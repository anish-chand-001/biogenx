'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Eye, Target, Sparkles, Activity, Heart } from 'lucide-react'
import styles from './AboutUs.module.css'
import Image from 'next/image'

export default function AboutUsPage() {
  // Apple-grade calibrated physics config
  const springTransition = { type: 'spring', stiffness: 90, damping: 20 } as const;

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const 
      } 
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  return (
    <div className={styles.pageViewport}>
      {/* SECTION 1: HERO CANVAS */}
      <section className={styles.heroSection}>
        <div className={styles.sectionContainer}>
          <span className={styles.overlineTag}>01 // ESTABLISHED IN SCIENCE</span>
          
          <div className={styles.heroMainGrid}>
            <div className={styles.heroTextFrame}>
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                className={styles.heroTitle}
              >
                Driven by Science. <br />
                <span className={styles.accentTextText}>Defined by Care.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={styles.heroDescription}
              >
                BioGenX Lifesciences is a pharmaceutical company committed to delivering high-quality, 
                science-driven healthcare solutions that improve patient outcomes. We focus on developing 
                and marketing innovative formulations in women's health, pregnancy care, pediatric healthcare, 
                and nutritional supplementation.
              </motion.p>
            </div>

            {/* Premium Immersive Geometry Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
              className={styles.heroVisualCanvas}
            >
              {/* Added z-index to keep the gradient overlay on top of the image */}
              <div className={styles.gradientScrimOverlay} style={{ zIndex: 10 }} />
              
              {/* Inserted the provided image here */}
              <Image
                src="/aboutus/aboutus-img.png" 
                alt="BioGenX Laboratory Research and Development"
                fill
                style={{ objectFit: 'cover' }}
                priority /* Important for hero images to load quickly */
                className="transition-transform duration-700 hover:scale-105" /* Added a subtle zoom-on-hover effect */
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MANIFESTO SPLIT */}
      <section className={styles.manifestoSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.manifestoSplitLayout}>
            <div className={styles.leftLabelColumn}>
              <h2 className={styles.splitSectionHeading}>Our Core Approach</h2>
            </div>
            <div className={styles.rightContentColumn}>
              <p className={styles.manifestoBodyParagraph}>
                With a patient-first approach and a commitment to quality, we strive to support healthcare 
                professionals through reliable therapeutic solutions that meet evolving medical needs.
              </p>
              
              <div className={styles.miniMetricsMatrix}>
                <div className={styles.metricItemBox}>
                  <Activity size={20} className="text-[#e28782]" />
                  <span>Innovative Formulations</span>
                </div>
                <div className={styles.metricItemBox}>
                  <ShieldCheck size={20} className="text-[#e28782]" />
                  <span>Ethical Validation Standards</span>
                </div>
                <div className={styles.metricItemBox}>
                  <Heart size={20} className="text-[#e28782]" />
                  <span>Patient-First Framework</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BENTO VISION & MISSION LAYERS */}
      <section className={styles.bentoSection}>
        <div className={styles.sectionContainer}>
          <span className={styles.overlineTag}>02 // OBJECTIVES &amp; DESTINATION</span>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={styles.bentoDoubleCanvasGrid}
          >
            {/* Box A: Mission Card */}
            <motion.div 
              variants={fadeInUpVariants}
              whileHover={{ y: -6 }}
              transition={springTransition}
              className={styles.bentoWrapperCard}
            >
              <div className={styles.bentoIconBadgeContainer}>
                <Target size={24} strokeWidth={1.5} />
              </div>
              <h3 className={styles.bentoCardHeading}>Our Mission</h3>
              <p className={styles.bentoCardBodyCopy}>
                At BioGenX Lifesciences, our mission is to provide safe, effective, and high-quality 
                healthcare products that improve people's lives. We are committed to supporting healthcare 
                professionals with trusted pharmaceutical solutions. Through innovation, quality, and care, 
                we strive to make a positive difference in every patient's journey.
              </p>
              <div className={styles.cardGeometricWatermark}>MISSION</div>
            </motion.div>

            {/* Box B: Vision Card */}
            <motion.div 
              variants={fadeInUpVariants}
              whileHover={{ y: -6 }}
              transition={springTransition}
              className={styles.bentoWrapperCard}
            >
              <div className={styles.bentoIconBadgeContainer}>
                <Eye size={24} strokeWidth={1.5} />
              </div>
              <h3 className={styles.bentoCardHeading}>Our Vision</h3>
              <p className={styles.bentoCardBodyCopy}>
                Our vision is to become a trusted name in the pharmaceutical industry by delivering healthcare 
                solutions that people can rely on. We aim to improve lives through continuous innovation, 
                quality, and ethical practices. By focusing on women's health, pediatric care, and patient 
                well-being, we aspire to build a healthier future for everyone.
              </p>
              <div className={styles.cardGeometricWatermark}>VISION</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER METRIC NOTE */}
      <footer className={styles.aboutPageFooterNote}>
        <div className={styles.sectionContainer}>
          <p className={styles.footerDisclaimerCopy}>
            BioGenX Lifesciences — System parameters configured for global distribution protocols. All informational structures are verified under clinical verification models © 2026.
          </p>
        </div>
      </footer>
    </div>
  )
}