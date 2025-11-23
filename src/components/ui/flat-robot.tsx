'use client'

import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { ClientOnly } from './client-only'

// 创建网格纹理
function createGridTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')!
  
  // 清除画布为透明
  ctx.clearRect(0, 0, 256, 256)
  
  // 设置网格样式
  ctx.strokeStyle = '#444444'
  ctx.lineWidth = 2
  
  // 绘制网格 - 8x6的格子
  const cols = 8
  const rows = 6
  const cellWidth = 256 / cols
  const cellHeight = 256 / rows
  
  // 绘制垂直线
  for (let i = 0; i <= cols; i++) {
    ctx.beginPath()
    ctx.moveTo(i * cellWidth, 0)
    ctx.lineTo(i * cellWidth, 256)
    ctx.stroke()
  }
  
  // 绘制水平线
  for (let i = 0; i <= rows; i++) {
    ctx.beginPath()
    ctx.moveTo(0, i * cellHeight)
    ctx.lineTo(256, i * cellHeight)
    ctx.stroke()
  }
  
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

// 扁平机器人组件
function FlatBot() {
  const headRef = useRef<THREE.Group>(null)
  const { mouse } = useThree()
  
  // 创建网格纹理
  const gridTexture = useMemo(() => createGridTexture(), [])

  useFrame(() => {
    if (headRef.current) {
      // Head tracking with limited range
      headRef.current.rotation.y = THREE.MathUtils.clamp(mouse.x * 0.6, -0.3, 0.3)
      headRef.current.rotation.x = THREE.MathUtils.clamp(-mouse.y * 0.4, -0.2, 0.2)
    }
  })

  return (
    <group position={[0, -0.2, 0]}>
      {/* 机器人头部 */}
      <group ref={headRef} position={[0, 1.0, 0]}>
        {/* 方形头部主体 - 更宽更扁平 */}
        <mesh>
          <boxGeometry args={[3.0, 2.2, 0.4]} />
          <meshPhysicalMaterial
            color="#3a3a3a"
            roughness={0.7}
            metalness={0.02}
            clearcoat={0.1}
          />
        </mesh>
        
        {/* 面部面板 - 深色背景 */}
        <mesh position={[0, 0, 0.21]}>
          <planeGeometry args={[2.8, 1.8]} />
          <meshBasicMaterial
            color="#1a1a1a"
          />
        </mesh>
        
        {/* 网格面板 */}
        <mesh position={[0, 0, 0.22]}>
          <planeGeometry args={[2.6, 1.6]} />
          <meshBasicMaterial
            map={gridTexture}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* 左眼 - 精确定位 */}
        <mesh position={[-0.5, 0.3, 0.23]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial
            color="#00FFFF"
            emissive="#00FFFF"
            emissiveIntensity={2.0}
            roughness={0.1}
            metalness={0.0}
          />
        </mesh>
        
        {/* 右眼 - 精确定位 */}
        <mesh position={[0.5, 0.3, 0.23]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial
            color="#00FFFF"
            emissive="#00FFFF"
            emissiveIntensity={2.0}
            roughness={0.1}
            metalness={0.0}
          />
        </mesh>
        
        {/* 嘴巴 - 简单红色横条 */}
        <mesh position={[0, -0.4, 0.23]}>
          <boxGeometry args={[1.0, 0.08, 0.02]} />
          <meshStandardMaterial
            color="#FF4444"
            emissive="#FF2222"
            emissiveIntensity={1.0}
          />
        </mesh>
      </group>
      
      {/* 颈部连接 - 更短更宽 */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[0.6, 0.2, 0.3]} />
        <meshPhysicalMaterial
          color="#3a3a3a"
          roughness={0.7}
          metalness={0.02}
        />
      </mesh>
      
      {/* 机器人身体 - 更宽更矮 */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[2.8, 1.8, 0.5]} />
        <meshPhysicalMaterial
          color="#3a3a3a"
          roughness={0.7}
          metalness={0.02}
          clearcoat={0.1}
        />
      </mesh>
      
      {/* 胸部控制面板 - 深色背景 */}
      <mesh position={[0, -0.1, 0.26]}>
        <planeGeometry args={[2.4, 1.4]} />
        <meshBasicMaterial
          color="#1a1a1a"
        />
      </mesh>
      
      {/* 中央核心圆形 - 更大更亮 */}
      <mesh position={[0, 0.1, 0.27]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial
          color="#00FFFF"
          emissive="#00FFFF"
          emissiveIntensity={2.0}
          roughness={0.1}
          metalness={0.0}
        />
      </mesh>
      
      {/* 状态指示灯 - 底部三个小点 */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[(i - 1) * 0.25, -0.5, 0.27]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color={i === 0 ? "#FF4444" : i === 1 ? "#FFFF44" : "#44FF44"}
            emissive={i === 0 ? "#FF4444" : i === 1 ? "#FFFF44" : "#44FF44"}
            emissiveIntensity={1.5}
          />
        </mesh>
      ))}
      
      {/* 左臂 - 简化设计 */}
      <mesh position={[-1.6, 0.0, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshPhysicalMaterial
          color="#3a3a3a"
          roughness={0.7}
          metalness={0.02}
        />
      </mesh>
      
      {/* 右臂 - 简化设计 */}
      <mesh position={[1.6, 0.0, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshPhysicalMaterial
          color="#3a3a3a"
          roughness={0.7}
          metalness={0.02}
        />
      </mesh>
    </group>
  )
}

// 场景组件
function Scene() {
  return (
    <>
      {/* 深蓝色背景 */}
      <mesh position={[0, 0, -3]}>
        <planeGeometry args={[20, 12]} />
        <meshBasicMaterial color="#0E192E" />
      </mesh>
      
      {/* 主光源 - 软箱效果 */}
      <directionalLight
        position={[0, 6, 5]}
        intensity={1.5}
        color="#ffffff"
        castShadow={false}
      />
      
      {/* 辅助光源 */}
      <directionalLight
        position={[-5, 3, 2]}
        intensity={0.3}
        color="#4A90E2"
      />
      
      {/* 轮廓light */}
      <directionalLight
        position={[0, -2, -3]}
        intensity={0.2}
        color="#E2A84A"
      />
      
      {/* 环境光 */}
      <ambientLight intensity={0.1} />
      
      {/* 扁平机器人 */}
      <FlatBot />
    </>
  )
}

// 加载组件
function LoadingScreen() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-cyan-400 border-t-transparent mx-auto mb-4"></div>
        <p className="text-cyan-400 text-sm">Loading Flat Robot...</p>
      </div>
    </div>
  )
}

// 主组件
interface FlatRobotProps {
  className?: string
}

function FlatRobotInner({ className }: FlatRobotProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        orthographic
        camera={{ 
          zoom: 110, 
          position: [0, 5, 10],
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl, scene }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace
          gl.toneMapping = THREE.NoToneMapping // 扁平化不需要复杂色调映射
          gl.shadowMap.enabled = false // 扁平风格不需要阴影
          scene.background = new THREE.Color('#0E192E')
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

export function FlatRobot({ className }: FlatRobotProps) {
  return (
    <ClientOnly fallback={<LoadingScreen />}>
      <FlatRobotInner className={className} />
    </ClientOnly>
  )
}