'use client'

import { useState, useEffect } from 'react'
import { SplineRobotProfessional } from './spline-robot-scene'
import { cn } from '@/lib/utils'

interface RobotWithSpeechProps {
  className?: string
  isSpeaking?: boolean
  onSpeechStart?: () => void
  onSpeechEnd?: () => void
}

export function RobotWithSpeech({ 
  className, 
  isSpeaking = false,
  onSpeechStart,
  onSpeechEnd
}: RobotWithSpeechProps) {
  const [showSpeechEffect, setShowSpeechEffect] = useState(false)

  useEffect(() => {
    if (isSpeaking) {
      setShowSpeechEffect(true)
      onSpeechStart?.()
    } else {
      const timer = setTimeout(() => {
        setShowSpeechEffect(false)
        onSpeechEnd?.()
      }, 300) // Fade out delay
      return () => clearTimeout(timer)
    }
  }, [isSpeaking, onSpeechStart, onSpeechEnd])

  return (
    <div className={cn('relative w-full h-full', className)}>
      {/* Base Robot */}
      <div className="w-full h-full">
        <SplineRobotProfessional />
      </div>

      {/* Speech Visual Effects */}
      {showSpeechEffect && (
        <>
          {/* Pulsing Light Around Head */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-blue-400 opacity-75"></div>
              <div className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-blue-300 opacity-50 animation-delay-150"></div>
              <div className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-blue-200 opacity-25 animation-delay-300"></div>
            </div>
          </div>

          {/* Sound Waves */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute border-2 border-blue-400 rounded-full animate-ping",
                    i === 0 && "w-20 h-20 animation-delay-0",
                    i === 1 && "w-32 h-32 animation-delay-300", 
                    i === 2 && "w-44 h-44 animation-delay-600"
                  )}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    opacity: 0.3 - (i * 0.1)
                  }}
                />
              ))}
            </div>
          </div>

          {/* Glowing Effect Around Robot */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl animate-pulse"
              style={{
                animation: 'gentle-glow 2s ease-in-out infinite alternate'
              }}
            />
          </div>
        </>
      )}

      {/* Speech Text Overlay */}
      {isSpeaking && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
          <div className="bg-black/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-blue-500/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium animate-typing">
                Welcome to New world
              </span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-150"></div>
            </div>
          </div>
          
          {/* Speech Bubble Pointer */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-black/80"></div>
          </div>
        </div>
      )}
    </div>
  )
}

// CSS animations to be added to globals.css
export const speechAnimationCSS = `
@keyframes gentle-glow {
  0% { opacity: 0.05; transform: scale(0.95); }
  100% { opacity: 0.15; transform: scale(1.05); }
}

@keyframes typing {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.animate-typing {
  animation: typing 1.5s ease-in-out infinite;
}

.animation-delay-150 {
  animation-delay: 150ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}
`