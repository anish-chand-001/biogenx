'use client'

import React, { Suspense, useState, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, Download, FileText } from 'lucide-react'
import styles from './DetailedMonograph.module.css'
import { MONOGRAPH_RECORDS, MonographType } from './constants'

function MonographContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Get the target ID from the URL query parameter (?id=X)
  const targetId = parseInt(searchParams.get('id') || '1', 10)
  
  // Store refs for each card so we can smoothly scroll to the selected item
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  useEffect(() => {
    // Small timeout ensures the DOM nodes are fully rendered before scrolling
    const timer = setTimeout(() => {
      if (cardRefs.current[targetId]) {
        cardRefs.current[targetId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [targetId])

  // Group all records by category explicitly so nothing is hidden
  const womenProducts = MONOGRAPH_RECORDS.filter(m => m.category === 'women')
  const childrenProducts = MONOGRAPH_RECORDS.filter(m => m.category === 'children')
  const generalProducts = MONOGRAPH_RECORDS.filter(m => m.category === 'general')

  const renderCard = (product: MonographType) => {
    const isTarget = product.id === targetId
    
    return (
      <article 
        key={product.id} 
        ref={(el) => { cardRefs.current[product.id] = el }}
        className={`${styles.monographCard} ${isTarget ? styles.targetHighlight : ''}`}
      >
        {isTarget && <div className={styles.activeIndicatorBadge}>Selected Reference</div>}

        {/* Card Image Area Wrapper */}
        <div className={styles.imageFrame}>
          <Image 
            src={product.img} 
            alt={product.title} 
            fill
            priority={isTarget}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-6"
          />
        </div>

        {/* Scientific Content Block Panel */}
        <div className={styles.dataPanel}>
          <div className={styles.cardHeader}>
            <h2 className={styles.brandTitle}>{product.title}</h2>
            <h3 className={styles.genericSubtitle}>{product.genericName}</h3>
            {product.tagline && <p className={styles.brandTagline}>{product.tagline}</p>}
          </div>

          <div className={styles.scrollContent}>
            {/* Indications Group Section */}
            <div className={styles.dataSection}>
              <h4 className={styles.sectionLabel}>Clinical Intent & Indications</h4>
              <ul className={styles.bulletList}>
                {product.indications.map((ind, idx) => (
                  <li key={idx}>{ind}</li>
                ))}
              </ul>
            </div>

            {/* Mechanism Area Render Node */}
            {product.mechanismOfAction && (
              <div className={styles.dataSection}>
                <h4 className={styles.sectionLabel}>Mechanism of Action</h4>
                <p className={styles.bodyParagraph}>{product.mechanismOfAction}</p>
              </div>
            )}

            {/* Key Benefits Area Render Node */}
            {product.keyBenefits && (
              <div className={styles.dataSection}>
                <h4 className={styles.sectionLabel}>Therapeutic Advantages</h4>
                <ul className={styles.bulletList}>
                  {product.keyBenefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Scientific Data Matrix Highlights Node */}
            {product.researchData && (
              <div className={styles.dataSection}>
                <h4 className={styles.sectionLabel}>Empirical Bio-Metrics</h4>
                <div className={styles.metricsStack}>
                  {product.researchData.map((data, idx) => (
                    <div key={idx} className={styles.metricRow}>
                      <span className={styles.metricValue}>{data.value}</span>
                      <span className={styles.metricLabel}>{data.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Active Ingredient Molecular Composition Grid Table */}
            {product.compositionTable && (
              <div className={styles.dataSection}>
                <h4 className={styles.sectionLabel}>Composition Profile</h4>
                <div className={styles.tableBox}>
                  <div className={styles.tableHeader}>
                    <span>Active Constituent</span>
                    <span>Mass/Strength</span>
                  </div>
                  {product.compositionTable.map((row, idx) => (
                    <div key={idx} className={styles.tableRow}>
                      <span className={styles.cellIngredient}>{row.ingredient}</span>
                      <span className={styles.cellStrength}>{row.strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Card Interactive Footer Control Station */}
          <footer className={styles.cardActionArea}>
            <a 
              href={product.pdfUrl || `/oursolutions/Biogenx.pdf`} 
              download 
              className={styles.actionBtnPrimary}
            >
              <Download size={16} />
              <span>Download Core PDF Asset</span>
            </a>
            {/* <button className={styles.actionBtnSecondary}>
              <FileText size={16} />
              <span>Request Assays</span>
            </button> */}
          </footer>
        </div>
      </article>
    )
  }

  return (
    <div className={styles.mainContainer}>

      {/* Primary Section Canvas Area */}
      <main className={styles.layoutSection}>
        <div className={styles.titleBlock}>
          {/* <span className={styles.taglineText}>01 // CLINICAL MONOGRAPHS</span> */}
          <h1 className={styles.titleText}>Detailed Efficacy & Metrics</h1>
          <p className={styles.subtitleText}>
            Peer-reviewed bio-chemical parameters, drug-interaction schemas, and quantitative dissolution matrices for healthcare practitioners.
          </p>
        </div>

        {/* Women's Health Segment */}
        {womenProducts.length > 0 && (
          <section className={styles.categorySegment}>
            <h2 className={styles.categoryHeading}>Maternal & Women's Health Solutions</h2>
            <div className={styles.monographGrid}>
              {womenProducts.map(renderCard)}
            </div>
          </section>
        )}

        {/* Children's Health Segment */}
        {childrenProducts.length > 0 && (
          <section className={styles.categorySegment}>
            <h2 className={styles.categoryHeading}>Pediatric & Children's Care Solutions</h2>
            <div className={styles.monographGrid}>
              {childrenProducts.map(renderCard)}
            </div>
          </section>
        )}

        {/* General Segment (Fallback/Future Proofing) */}
        {generalProducts.length > 0 && (
          <section className={styles.categorySegment}>
            <h2 className={styles.categoryHeading}>General Healthcare Solutions</h2>
            <div className={styles.monographGrid}>
              {generalProducts.map(renderCard)}
            </div>
          </section>
        )}
      </main>

      {/* Core Compliancy Legal Footer Banner */}
      <footer className={styles.legalFooter}>
        * All clinical parameters are extracted directly from peer-reviewed clinical monographs and verified assays. For professional medical validation channels only. BioGenX Lifesciences © 2026.
      </footer>
    </div>
  )
}

export default function DetailedMonographPage() {
  return (
    <Suspense fallback={
      <div className="w-full h-screen bg-[#f2efe7] flex items-center justify-center text-[#10243C]">
        Loading Clinical Infrastructure...
      </div>
    }>
      <MonographContent />
    </Suspense>
  )
}