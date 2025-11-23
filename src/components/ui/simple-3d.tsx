'use client'

import { motion } from 'framer-motion'
import { ClientOnly } from './client-only'

function Simple3DBackgroundInner() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="relative w-full h-full">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-8 h-20 bg-gradient-to-t from-indigo-400 to-blue-500 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/4 w-14 h-14"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg transform rotate-45" />
        </motion.div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 w-full h-full gap-4 p-8">
            {Array.from({ length: 96 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-blue-500 rounded-sm"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.02,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Simple3DBackground() {
  return (
    <ClientOnly fallback={<div className="absolute inset-0 overflow-hidden opacity-10" />}>
      <Simple3DBackgroundInner />
    </ClientOnly>
  )
}

function Interactive3DCardInner() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl overflow-hidden">
      {/* Background geometric animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => {
          // Generate consistent positions based on index
          const leftPosition = ((i * 17 + 23) % 100);
          const topPosition = ((i * 31 + 47) % 100);
          const duration = 4 + (i % 3);
          const delay = (i % 4) * 0.5;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${leftPosition}%`,
                top: `${topPosition}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            />
          );
        })}
      </div>
      
      {/* 3D-like wireframe */}
      <div className="absolute inset-4 border border-blue-400/30 rounded-lg">
        <div className="absolute inset-2 border border-purple-400/20 rounded-lg">
          <div className="absolute inset-2 border border-cyan-400/10 rounded-lg" />
        </div>
      </div>
      
      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-6xl"
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🧠
        </motion.div>
      </div>
    </div>
  )
}

export function Interactive3DCard() {
  return (
    <ClientOnly
      fallback={
        <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl overflow-hidden flex items-center justify-center">
          <div className="text-6xl">🧠</div>
        </div>
      }
    >
      <Interactive3DCardInner />
    </ClientOnly>
  )
}