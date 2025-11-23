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
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg border-2 border-dashed border-blue-200">
        <div className="text-center p-6">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive 3D Experience</h3>
          <p className="text-gray-500 text-sm">This space will showcase interactive 3D content</p>
          <div className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            Coming Soon
          </div>
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
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">Loading 3D Scene...</p>
          </div>
        </div>
      }
    >
      <SplineWithErrorBoundary scene={scene} className={className} />
    </Suspense>
  )
}