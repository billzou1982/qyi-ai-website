'use client'

import { useState, useEffect } from 'react'
import { SplineRobotProfessional } from './spline-robot-scene'

interface EnhancedRobotProps {
  className?: string
}

export function EnhancedRobot({ className }: EnhancedRobotProps) {
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true)
      setTimeout(() => setShowWelcome(false), 4000)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`relative w-full h-full ${className}`}>
      <SplineRobotProfessional />

      {showWelcome && (
        <div className="absolute top-1/3 right-0 z-20 pointer-events-none"
          style={{ transform: 'translateY(-50%)' }}>
          <span className="font-mono text-xs text-[#D97757] tracking-widest whitespace-nowrap animate-text-appear">
            WELCOME TO NEW WORLD
          </span>
        </div>
      )}
    </div>
  )
}
