'use client'

import { useEffect, useState } from 'react'
import Loader from '@/components/Loader/Loader'

export default function LoaderProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [showLoader, setShowLoader] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem(
      'biogenx-loader-shown'
    )

    if (!hasVisited) {
      setShowLoader(true)
    }

    setMounted(true)
  }, [])

  const handleComplete = () => {
    sessionStorage.setItem(
      'biogenx-loader-shown',
      'true'
    )

    setShowLoader(false)
  }

  if (!mounted) return null

  return (
    <>
      {showLoader && (
        <Loader onLoadingComplete={handleComplete} />
      )}

      {children}
    </>
  )
}