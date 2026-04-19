'use client'

import { Suspense, lazy, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function SplineWithErrorBoundary({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center space-y-2">
          <p className="font-mono text-xs text-muted-foreground tracking-widest">3D SCENE UNAVAILABLE</p>
          <p className="font-mono text-xs text-muted-foreground/60">Visit on a WebGL-enabled browser</p>
        </div>
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

export function SplineScene({ scene, className }: SplineSceneProps) {
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
