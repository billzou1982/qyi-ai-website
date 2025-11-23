'use client'

import { useState, useEffect } from 'react'
import { SplineRobotProfessional } from './spline-robot-scene'
import { cn } from '@/lib/utils'

interface EnhancedRobotProps {
  className?: string
}

export function EnhancedRobot({ className }: EnhancedRobotProps) {
  const [showWelcome, setShowWelcome] = useState(false)
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    // Show welcome animation on every page load
    setIsFirstVisit(true)
    
    // Show welcome message after 3 seconds
    const timer = setTimeout(() => {
      setShowWelcome(true)
      
      // Play simple beep sound if possible
      try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2+LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR0fPPeSMFl')
        audio.volume = 0.3
        audio.play().catch(() => {}) // Ignore autoplay errors
      } catch (e) {
        // Audio failed, that's okay
      }
      
      // Hide welcome message after 4 seconds
      setTimeout(() => {
        setShowWelcome(false)
      }, 4000)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Base Robot */}
      <SplineRobotProfessional />
      
      {/* Welcome Animation Overlay */}
      {showWelcome && (
        <>
          {/* Sound Waves from robot face */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
            <div className="w-6 h-6 border-2 border-blue-400/60 rounded-full animate-ping"></div>
            <div className="absolute -top-2 -left-2 w-10 h-10 border-2 border-blue-300/40 rounded-full animate-ping animation-delay-300"></div>
            <div className="absolute -top-4 -left-4 w-14 h-14 border-2 border-blue-200/20 rounded-full animate-ping animation-delay-600"></div>
          </div>
          
          {/* Welcome Text - Right side, face level */}
          <div className="absolute top-1/3 right-0 transform -translate-y-1/2 translate-x-4 z-20" style={{ transform: 'translateY(calc(-50% - 3px)) translateX(1rem)' }}>
            <span className="text-white text-xl font-bold whitespace-nowrap animate-text-appear drop-shadow-2xl" style={{ color: '#ffffff' }}>
              WELCOME TO NEW WORLD!
            </span>
          </div>
        </>
      )}
    </div>
  )
}