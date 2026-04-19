'use client'

import { Suspense, lazy, useState, useEffect } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  fallback?: React.ReactNode
}

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    )
  } catch {
    return false
  }
}

function SplineWithErrorBoundary({ scene, className }: Omit<SplineSceneProps, 'fallback'>) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="font-mono text-xs text-muted-foreground tracking-widest">
          3D SCENE UNAVAILABLE
        </p>
      </div>
    )
  }

  return (
    <Spline
      scene={scene}
      className={className}
      onError={() => setHasError(true)}
    />
  )
}

export function SplineScene({ scene, className, fallback }: SplineSceneProps) {
  // null = not yet checked, true/false = result
  const [webglOk, setWebglOk] = useState<boolean | null>(null)

  useEffect(() => {
    setWebglOk(detectWebGL())
  }, [])

  // Still detecting
  if (webglOk === null) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="font-mono text-xs text-[#D97757] animate-pulse tracking-widest">
          LOADING 3D
        </span>
      </div>
    )
  }

  // WebGL unavailable — show provided fallback or generic message
  if (!webglOk) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className="w-full h-full flex items-center justify-center">
        <p className="font-mono text-xs text-muted-foreground tracking-widest">
          3D UNAVAILABLE
        </p>
      </div>
    )
  }

  // WebGL available — load Spline
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-mono text-xs text-[#D97757] animate-pulse tracking-widest">
            LOADING 3D
          </span>
        </div>
      }
    >
      <SplineWithErrorBoundary scene={scene} className={className} />
    </Suspense>
  )
}
