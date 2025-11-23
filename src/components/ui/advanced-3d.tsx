'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ClientOnly } from './client-only'

interface Advanced3DSceneProps {
  className?: string
}

function Advanced3DSceneInner({ className }: Advanced3DSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  
  const rotateX = useTransform(smoothMouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-15, 15])
  
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isHovered, mouseX, mouseY])

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%)',
        perspective: '1000px'
      }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* 3D Scene Container */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Main 3D Object - Floating Cube */}
        <motion.div
          className="relative"
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 360],
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Cube faces */}
          <div 
            className="w-32 h-32 absolute"
            style={{
              background: 'linear-gradient(45deg, rgba(138, 43, 226, 0.8), rgba(30, 144, 255, 0.8))',
              transform: 'translateZ(64px)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />
          <div 
            className="w-32 h-32 absolute"
            style={{
              background: 'linear-gradient(45deg, rgba(30, 144, 255, 0.6), rgba(138, 43, 226, 0.6))',
              transform: 'translateZ(-64px) rotateY(180deg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          />
          <div 
            className="w-32 h-32 absolute"
            style={{
              background: 'linear-gradient(45deg, rgba(255, 20, 147, 0.7), rgba(138, 43, 226, 0.7))',
              transform: 'translateX(-64px) rotateY(-90deg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          />
          <div 
            className="w-32 h-32 absolute"
            style={{
              background: 'linear-gradient(45deg, rgba(138, 43, 226, 0.7), rgba(255, 20, 147, 0.7))',
              transform: 'translateX(64px) rotateY(90deg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          />
          <div 
            className="w-32 h-32 absolute"
            style={{
              background: 'linear-gradient(45deg, rgba(30, 144, 255, 0.8), rgba(255, 20, 147, 0.8))',
              transform: 'translateY(-64px) rotateX(90deg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />
          <div 
            className="w-32 h-32 absolute"
            style={{
              background: 'linear-gradient(45deg, rgba(255, 20, 147, 0.8), rgba(30, 144, 255, 0.8))',
              transform: 'translateY(64px) rotateX(-90deg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />
        </motion.div>
        
        {/* Surrounding floating elements */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 200
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          
          return (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full"
              style={{
                background: `linear-gradient(45deg, rgba(${120 + i * 15}, ${100 + i * 20}, 255, 0.8), rgba(255, ${150 + i * 10}, ${200 + i * 7}, 0.6))`,
                transform: `translate3d(${x}px, 0, ${z}px)`,
                boxShadow: '0 0 20px currentColor',
              }}
              animate={{
                y: [0, -30, 0],
                rotateY: [0, 360],
              }}
              transition={{
                y: { 
                  duration: 3 + i * 0.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.2 
                },
                rotateY: { 
                  duration: 15 + i * 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                },
              }}
            />
          )
        })}
      </motion.div>
      
      {/* Interactive particles - 减少数量和频率 */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {Array.from({ length: 20 }).map((_, i) => {
          const leftPos = ((i * 29 + 13) % 90) + 5
          const topPos = ((i * 41 + 17) % 90) + 5
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + (i % 2),
                repeat: Infinity,
                delay: (i % 8) * 0.3,
                ease: "easeInOut"
              }}
            />
          )
        })}
      </div>
      
      {/* Dynamic lighting effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            ([x, y]) => 
              `radial-gradient(circle at ${50 + (x as number) * 0.1}% ${50 + (y as number) * 0.1}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
          ),
        }}
      />
    </div>
  )
}

export function Advanced3DScene({ className }: Advanced3DSceneProps) {
  return (
    <ClientOnly
      fallback={
        <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center ${className}`}>
          <div className="text-6xl opacity-50">🎯</div>
        </div>
      }
    >
      <Advanced3DSceneInner className={className} />
    </ClientOnly>
  )
}