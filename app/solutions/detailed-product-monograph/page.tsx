'use client'

import React, { Suspense, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Download } from 'lucide-react'
import styles from './DetailedMonograph.module.css'
import { MONOGRAPH_RECORDS, MonographType } from './constants'

function MonographContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const targetId = parseInt(searchParams.get('id') || '1', 10)
  
  const cardRefs = useRef<{ [key: number]: HTMLElement | null }>({})

  useEffect(() => {
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

        <div className={styles.dataPanel}>
          <div className={styles.cardHeader}>
            <h2 className={styles.brandTitle}>{product.title}</h2>
            <h3 className={styles.genericSubtitle}>{product.genericName}</h3>
            {product.tagline && <p className={styles.brandTagline}>{product.tagline}</p>}
          </div>

          <div className={styles.scrollContent}>
            <div className={styles.dataSection}>
              <h4 className={styles.sectionLabel}>Clinical Intent & Indications</h4>
              <ul className={styles.bulletList}>
                {product.indications.map((ind, idx) => (
                  <li key={idx}>{ind}</li>
                ))}
              </ul>
            </div>

            {product.mechanismOfAction && (
              <div className={styles.dataSection}>
                <h4 className={styles.sectionLabel}>Mechanism of Action</h4>
                <p className={styles.bodyParagraph}>{product.mechanismOfAction}</p>
              </div>
            )}

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
        </div>
      </article>
    )
  }

  return (
    <div className={styles.mainContainer}>
      <main className={styles.layoutSection}>
        <div className={styles.titleBlock}>
          <h1 className={styles.titleText}>Detailed Efficacy & Metrics</h1>
          <p className={styles.subtitleText}>
            Peer-reviewed bio-chemical parameters, drug-interaction schemas, and quantitative dissolution matrices for healthcare practitioners.
          </p>
        </div>

        {womenProducts.length > 0 && (
          <section className={styles.categorySegment}>
            <h2 className={styles.categoryHeading}>Maternal & Women's Health Solutions</h2>
            <div className={styles.monographGrid}>
              {womenProducts.map(renderCard)}
            </div>
          </section>
        )}

        {childrenProducts.length > 0 && (
          <section className={styles.categorySegment}>
            <h2 className={styles.categoryHeading}>Pediatric & Children's Care Solutions</h2>
            <div className={styles.monographGrid}>
              {childrenProducts.map(renderCard)}
            </div>
          </section>
        )}

        {generalProducts.length > 0 && (
          <section className={styles.categorySegment}>
            <h2 className={styles.categoryHeading}>General Healthcare Solutions</h2>
            <div className={styles.monographGrid}>
              {generalProducts.map(renderCard)}
            </div>
          </section>
        )}
      </main>

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