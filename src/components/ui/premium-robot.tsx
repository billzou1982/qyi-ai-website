'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ClientOnly } from './client-only'

interface PremiumRobotProps {
  className?: string
}

function PremiumRobotInner({ className }: PremiumRobotProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // 更平滑的弹簧设置
  const smoothMouseX = useSpring(mouseX, { stiffness: 150, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 150, damping: 30 })
  
  // 机器人头部跟随鼠标旋转
  const headRotateX = useTransform(smoothMouseY, [-300, 300], [20, -20])
  const headRotateY = useTransform(smoothMouseX, [-300, 300], [-30, 30])
  
  // 眼部跟随
  const eyeX = useTransform(smoothMouseX, [-300, 300], [-6, 6])
  const eyeY = useTransform(smoothMouseY, [-300, 300], [-3, 3])
  
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
        background: 'radial-gradient(circle at center, #1a1a2e 0%, #16213e 30%, #0f0f23 100%)',
        perspective: '1200px'
      }}
    >
      {/* 背景光晕效果 */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 40%, rgba(255, 255, 255, 0.20) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.18) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* 环境粒子 */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: 12 }).map((_, i) => {
          const leftPos = ((i * 31 + 19) % 85) + 7
          const topPos = ((i * 43 + 23) % 85) + 7
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
              animate={{
                opacity: [0.1, 0.6, 0.1],
                scale: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 5 + (i % 2),
                repeat: Infinity,
                delay: (i % 6) * 0.4,
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
            y: [0, -12, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* 机器人头部/头盔 */}
          <motion.div
            className="relative w-40 h-40 mx-auto mb-6"
            style={{
              rotateX: headRotateX,
              rotateY: headRotateY,
              transformStyle: 'preserve-3d',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* 头盔主体 - 黑色金属 */}
            <div className="w-full h-full rounded-3xl relative overflow-hidden" 
                 style={{
                   background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                   boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                   border: '1px solid rgba(255, 255, 255, 0.08)'
                 }}>
              
              {/* 头盔顶部装饰 */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-4 rounded-full"
                   style={{
                     background: 'linear-gradient(90deg, #333, #555, #333)',
                     boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.5)'
                   }} />
              
              {/* 面部面板区域 */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-24 rounded-2xl border border-gray-700"
                   style={{
                     background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
                     boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.8)'
                   }}>
                
                {/* 网格面板效果 */}
                <div className="absolute inset-2 grid grid-cols-8 grid-rows-6 gap-px">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-800 rounded-sm"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.05,
                      }}
                      style={{
                        background: `linear-gradient(45deg, #333, #555)`,
                      }}
                    />
                  ))}
                </div>
                
                {/* 眼部区域 */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-6">
                  {/* 左眼 */}
                  <motion.div 
                    className="w-8 h-8 rounded-full relative overflow-hidden"
                    style={{
                      background: 'radial-gradient(circle, #00ffff 0%, #0080ff 100%)',
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full absolute top-1/2 left-1/2"
                      style={{
                        x: eyeX,
                        y: eyeY,
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle, #ffffff 0%, #cccccc 100%)',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
                      }}
                    />
                  </motion.div>
                  
                  {/* 右眼 */}
                  <motion.div 
                    className="w-8 h-8 rounded-full relative overflow-hidden"
                    style={{
                      background: 'radial-gradient(circle, #00ffff 0%, #0080ff 100%)',
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full absolute top-1/2 left-1/2"
                      style={{
                        x: eyeX,
                        y: eyeY,
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle, #ffffff 0%, #cccccc 100%)',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              
              {/* 下巴/嘴部区域 */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-6 rounded-full"
                   style={{
                     background: 'linear-gradient(145deg, #333, #111)',
                     boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.8)'
                   }}>
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #ff4444, #ff6666, #ff4444)',
                  }}
                  animate={isHovered ? {
                    scaleX: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
          
          {/* 机器人颈部 */}
          <div className="w-16 h-8 mx-auto rounded-xl relative"
               style={{
                 background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                 boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
               }}>
            {/* 颈部装饰环 */}
            <div className="absolute top-1 left-1 right-1 bottom-1 rounded-lg border border-gray-600"></div>
          </div>
          
          {/* 机器人身体 */}
          <motion.div
            className="w-32 h-48 mx-auto rounded-2xl relative mt-2"
            style={{
              background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
            animate={{
              rotateZ: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* 胸部装甲板 */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-32 rounded-xl border border-gray-700"
                 style={{
                   background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
                   boxShadow: 'inset 0 3px 12px rgba(0, 0, 0, 0.8)'
                 }}>
              
              {/* 中央核心 */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full"
                   style={{
                     background: 'radial-gradient(circle, #004d4d, #001a1a)',
                     boxShadow: '0 0 25px rgba(0, 255, 255, 0.6), inset 0 2px 8px rgba(0, 0, 0, 0.8)'
                   }}>
                <motion.div
                  className="absolute inset-2 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #00ffff, #0080ff)',
                  }}
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              {/* 状态指示灯 */}
              <div className="flex justify-center gap-2 mt-20">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: i === 0 ? 'radial-gradient(circle, #ff4444, #aa0000)' : 
                                 i === 1 ? 'radial-gradient(circle, #ffff44, #aaaa00)' : 
                                          'radial-gradient(circle, #44ff44, #00aa00)',
                      boxShadow: `0 0 8px ${i === 0 ? '#ff4444' : i === 1 ? '#ffff44' : '#44ff44'}`
                    }}
                    animate={{
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* 肩部装甲 */}
            <div className="absolute -top-2 -left-6 w-8 h-16 rounded-lg"
                 style={{
                   background: 'linear-gradient(145deg, #333, #111)',
                   boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
                 }} />
            <div className="absolute -top-2 -right-6 w-8 h-16 rounded-lg"
                 style={{
                   background: 'linear-gradient(145deg, #333, #111)',
                   boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
                 }} />
          </motion.div>
          
          {/* 机器人手臂 */}
          <motion.div 
            className="absolute top-40 -left-12 w-8 h-28 rounded-full"
            style={{
              background: 'linear-gradient(145deg, #333, #111)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
            }}
            animate={{
              rotateZ: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 -right-12 w-8 h-28 rounded-full"
            style={{
              background: 'linear-gradient(145deg, #333, #111)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
            }}
            animate={{
              rotateZ: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
      
      {/* 交互光效 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            ([x, y]) => 
              `radial-gradient(circle at ${50 + (x as number) * 0.03}% ${50 + (y as number) * 0.03}%, rgba(0, 255, 255, 0.08) 0%, transparent 70%)`
          ),
        }}
      />
    </div>
  )
}

export function PremiumRobot({ className }: PremiumRobotProps) {
  return (
    <ClientOnly
      fallback={
        <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 flex items-center justify-center ${className}`}>
          <div className="text-6xl opacity-50">🤖</div>
        </div>
      }
    >
      <PremiumRobotInner className={className} />
    </ClientOnly>
  )
}