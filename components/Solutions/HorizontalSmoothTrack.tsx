'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation' // 1. Import the router hook
import { ProductType } from '@/app/solutions/constants'
import styles from './HorizontalSmoothTrack.module.css'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

interface TrackProps {
  title: string
  tagline: string
  products: ProductType[]
}

export default function HorizontalSmoothTrack({
  title,
  tagline,
  products,
}: TrackProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const router = useRouter() 
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const handleArrowScroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return
    const scrollAmount = direction === 'left' ? -340 : 340
    trackRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }

  const checkScrollBounds = () => {
    const track = trackRef.current
    if (!track) return
    const { scrollLeft, scrollWidth, clientWidth } = track
    setShowLeftArrow(scrollLeft > 10)
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 15)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    checkScrollBounds()

    let isDown = false
    let startX = 0
    let startY = 0
    let scrollLeft = 0
    let velocity = 0
    let lastX = 0
    let isScrollingVertical = false
    let isFirstMove = false
    let animationFrameId: number

    const updateMomentum = () => {
      if (!isDown && Math.abs(velocity) > 0.1) {
        track.scrollLeft += velocity
        velocity *= 0.93
        checkScrollBounds()
        animationFrameId = requestAnimationFrame(updateMomentum)
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true
      track.classList.add(styles.trackGrabbing)
      startX = e.pageX - track.offsetLeft
      scrollLeft = track.scrollLeft
      lastX = e.pageX
      velocity = 0
      cancelAnimationFrame(animationFrameId)
    }

    const handleMouseLeaveOrUp = () => {
      isDown = false
      track.classList.remove(styles.trackGrabbing)
      updateMomentum()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - track.offsetLeft
      const walk = (x - startX) * 1.5
      track.scrollLeft = scrollLeft - walk
      checkScrollBounds()

      velocity = lastX - e.pageX
      lastX = e.pageX
    }

    const handleTouchStart = (e: TouchEvent) => {
      isDown = true
      isFirstMove = true
      isScrollingVertical = false
      startX = e.touches[0].pageX - track.offsetLeft
      startY = e.touches[0].pageY - track.offsetTop
      scrollLeft = track.scrollLeft
      lastX = e.touches[0].pageX
      velocity = 0
      cancelAnimationFrame(animationFrameId)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDown) return

      const currentX = e.touches[0].pageX - track.offsetLeft
      const currentY = e.touches[0].pageY - track.offsetTop

      if (isFirstMove) {
        isFirstMove = false
        const diffX = Math.abs(currentX - startX)
        const diffY = Math.abs(currentY - startY)
        if (diffY > diffX) {
          isScrollingVertical = true
          isDown = false
          return
        }
      }

      if (isScrollingVertical) return
      if (e.cancelable) e.preventDefault()

      const walk = (currentX - startX) * 1.5
      track.scrollLeft = scrollLeft - walk
      checkScrollBounds()

      velocity = lastX - e.touches[0].pageX
      lastX = e.touches[0].pageX
    }

    const handleTouchEnd = () => {
      isDown = false
      updateMomentum()
    }

    track.addEventListener('mousedown', handleMouseDown)
    track.addEventListener('mouseleave', handleMouseLeaveOrUp)
    track.addEventListener('mouseup', handleMouseLeaveOrUp)
    track.addEventListener('mousemove', handleMouseMove)

    track.addEventListener('touchstart', handleTouchStart, { passive: true })
    track.addEventListener('touchmove', handleTouchMove, { passive: false })
    track.addEventListener('touchend', handleTouchEnd, { passive: true })
    track.addEventListener('scroll', checkScrollBounds, { passive: true })

    return () => {
      track.removeEventListener('mousedown', handleMouseDown)
      track.removeEventListener('mouseleave', handleMouseLeaveOrUp)
      track.removeEventListener('mouseup', handleMouseLeaveOrUp)
      track.removeEventListener('mousemove', handleMouseMove)

      track.removeEventListener('touchstart', handleTouchStart)
      track.removeEventListener('touchmove', handleTouchMove)
      track.removeEventListener('touchend', handleTouchEnd)
      track.removeEventListener('scroll', checkScrollBounds)
      cancelAnimationFrame(animationFrameId)
    }
  }, [products])

  return (
    <div className={styles.trackContainer}>
      <div className={styles.headerBlock}>
        <div className={styles.titleArea}>
          <span className={styles.taglineText}>{tagline}</span>
          <h2 className={styles.titleText}>{title}</h2>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.arrowBtn} ${styles.leftArrow} ${showLeftArrow ? styles.arrowVisible : ''}`}
          onClick={() => handleArrowScroll('left')}
          aria-label="Scroll left"
        >
          ←
        </button>

        <button
          className={`${styles.arrowBtn} ${styles.rightArrow} ${showRightArrow ? styles.arrowVisible : ''}`}
          onClick={() => handleArrowScroll('right')}
          aria-label="Scroll right"
        >
          →
        </button>

        <div
          ref={trackRef}
          className={`${styles.swipingTrack} ${styles.noScrollbar}`}
        >
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 280px, 310px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className={styles.contentBlock}>
                <div>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                  <p className={styles.cardDesc}>{product.desc}</p>
                </div>

                {/* 3. Updated Button with dynamic query parameter route navigation */}
                <button 
                  className={styles.cardFooterButton}
                  onClick={() => router.push(`/solutions/detailed-product-monograph?id=${product.id}`)}
                >
                  <span>Clinical specifications</span>

                  <div className={styles.iconWrapper}>
                    <ArrowRight className={styles.arrowRight} />
                    <ArrowUpRight className={styles.arrowUpRight} />
                  </div>
                </button>
              </div>
            </div>
          ))}

          <div className={styles.edgeSpacePlaceholder}></div>
        </div>
      </div>
    </div>
  )
}