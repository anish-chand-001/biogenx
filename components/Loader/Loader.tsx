

'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface LoaderProps {
  onLoadingComplete: () => void
  loading: boolean
}

export default function Loader({
  onLoadingComplete,
}: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const tl = gsap.timeline({
  onComplete: () => {
    onLoadingComplete()
  },
})

tl.to(logoRef.current, {
  clipPath: 'inset(0 0% 0 0)',
  duration: 1.2,
  ease: 'expo.inOut',
})

tl.to({}, { duration: 0.3 })

tl.to(loaderRef.current, {
  xPercent: 100,
  duration: 1,
  ease: 'expo.inOut',
})

    return () => {
      tl.kill()
    }
  }, [onLoadingComplete])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-[#FAF7F2] z-[9999] will-change-transform"
    >
      <div
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          clipPath: 'inset(0 100% 0 0)',
        }}
      >
        <img
          src="/logo/biogenx.png"
          alt="BioGenX"
          className="h-auto w-[80vw] max-w-[1200px] min-w-[250px] object-contain"
          draggable={false}
        />
      </div>
    </div>
  )
}