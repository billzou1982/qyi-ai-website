'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ClientOnly } from './client-only'

interface Robot3DProps {
  className?: string
}

function Robot3DInner({ className }: Robot3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // 更平滑的弹簧设置，减少闪烁
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 25 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 25 })
  
  // 机器人头部跟随鼠标旋转
  const headRotateX = useTransform(smoothMouseY, [-200, 200], [15, -15])
  const headRotateY = useTransform(smoothMouseX, [-200, 200], [-25, 25])
  
  // 眼部跟随
  const eyeX = useTransform(smoothMouseX, [-200, 200], [-8, 8])
  const eyeY = useTransform(smoothMouseY, [-200, 200], [-4, 4])
  
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
        background: 'linear-gradient(135deg, #0a0a1f 0%, #1a1a3a 50%, #2a2a5a 100%)',
        perspective: '1000px'
      }}
    >
      {/* 背景粒子效果 - 减少数量避免闪烁 */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 15 }).map((_, i) => {
          const leftPos = ((i * 29 + 13) % 90) + 5
          const topPos = ((i * 41 + 17) % 90) + 5
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400"
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
      
      {/* 机器人主体 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* 机器人头部 */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-4"
            style={{
              rotateX: headRotateX,
              rotateY: headRotateY,
              transformStyle: 'preserve-3d',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* 头部主体 */}
            <div className="w-full h-full rounded-2xl relative" 
                 style={{
                   background: 'linear-gradient(145deg, #4f46e5, #3730a3)',
                   boxShadow: '0 10px 30px rgba(79, 70, 229, 0.3)',
                   border: '2px solid rgba(255, 255, 255, 0.1)'
                 }}>
              
              {/* 眼部区域 */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                {/* 左眼 */}
                <motion.div 
                  className="w-6 h-6 rounded-full bg-cyan-400 relative overflow-hidden"
                  style={{
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.6)',
                  }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full bg-white absolute top-1/2 left-1/2"
                    style={{
                      x: eyeX,
                      y: eyeY,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </motion.div>
                
                {/* 右眼 */}
                <motion.div 
                  className="w-6 h-6 rounded-full bg-cyan-400 relative overflow-hidden"
                  style={{
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.6)',
                  }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full bg-white absolute top-1/2 left-1/2"
                    style={{
                      x: eyeX,
                      y: eyeY,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </motion.div>
              </div>
              
              {/* 嘴部 */}
              <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-2 rounded-full bg-purple-400"
                animate={isHovered ? {
                  scaleX: [1, 1.2, 1],
                  scaleY: [1, 0.8, 1],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* 额头LED */}
              <motion.div 
                className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-green-400"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
                }}
              />
            </div>
          </motion.div>
          
          {/* 机器人身体 */}
          <motion.div
            className="w-24 h-40 mx-auto rounded-xl relative"
            style={{
              background: 'linear-gradient(145deg, #374151, #1f2937)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            animate={{
              rotateZ: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* 胸部面板 */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-20 rounded-lg bg-gray-800 border border-gray-600">
              {/* 状态指示灯 */}
              <div className="flex justify-center gap-1 mt-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: i === 0 ? '#ef4444' : i === 1 ? '#eab308' : '#22c55e'
                    }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
              
              {/* 屏幕显示 */}
              <div className="mt-2 mx-2 h-8 bg-black rounded border border-gray-700 flex items-center justify-center">
                <motion.div
                  className="text-green-400 text-xs font-mono"
                  animate={{
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    times: [0, 0.1, 0.9, 1]
                  }}
                >
                  AI_ON
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* 机器人手臂 */}
          <div className="absolute top-32 -left-8 w-6 h-20 rounded-full bg-gradient-to-b from-gray-600 to-gray-800" />
          <div className="absolute top-32 -right-8 w-6 h-20 rounded-full bg-gradient-to-b from-gray-600 to-gray-800" />
        </motion.div>
      </div>
      
      {/* 交互光效 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            ([x, y]) => 
              `radial-gradient(circle at ${50 + (x as number) * 0.05}% ${50 + (y as number) * 0.05}%, rgba(79, 70, 229, 0.15) 0%, transparent 60%)`
          ),
        }}
      />
    </div>
  )
}

export function Robot3D({ className }: Robot3DProps) {
  return (
    <ClientOnly
      fallback={
        <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center ${className}`}>
          <div className="text-6xl opacity-50">🤖</div>
        </div>
      }
    >
      <Robot3DInner className={className} />
    </ClientOnly>
  )
}