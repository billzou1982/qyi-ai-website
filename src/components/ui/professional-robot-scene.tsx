'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useEffect, useState } from 'react'
import { 
  Environment, 
  ContactShadows, 
  Float,
  MeshReflectorMaterial
} from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { ClientOnly } from './client-only'

// 创建程序化机器人模型组件
function ProceduralRobot() {
  const groupRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Mesh>(null)
  const leftEyeRef = useRef<THREE.Mesh>(null)
  const rightEyeRef = useRef<THREE.Mesh>(null)
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // 鼠标跟踪
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x: x * 0.3, y: y * 0.2 }) // 限制转动幅度
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // 动画循环
  useFrame((state) => {
    if (headRef.current) {
      // 头部跟随鼠标，带缓动
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y, 
        mousePosition.x, 
        0.05
      )
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x, 
        mousePosition.y, 
        0.05
      )
      
      // 轻微的悬浮动画
      headRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05
    }

    // 眼部发光动画
    if (leftEyeRef.current && rightEyeRef.current) {
      const intensity = 0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.2
      const material = leftEyeRef.current.material as THREE.MeshStandardMaterial
      const material2 = rightEyeRef.current.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = intensity
      material2.emissiveIntensity = intensity
    }

    // 整体轻微旋转
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* 机器人头部 */}
      <group ref={headRef} position={[0, 1.2, 0]}>
        {/* 头部主体 - 磨砂塑料质感 */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 1, 0.8]} />
          <meshPhysicalMaterial
            color="#2a2a2a"
            metalness={0.1}
            roughness={0.55}
            clearcoat={0.3}
            clearcoatRoughness={0.6}
            envMapIntensity={0.8}
          />
        </mesh>
        
        {/* 面部面板 - 深色磨砂 */}
        <mesh position={[0, 0, 0.41]}>
          <boxGeometry args={[1.0, 0.8, 0.05]} />
          <meshPhysicalMaterial
            color="#1a1a1a"
            metalness={0.05}
            roughness={0.7}
            envMapIntensity={0.6}
          />
        </mesh>

        {/* 网格面板效果 */}
        <group position={[0, 0, 0.42]}>
          {Array.from({ length: 8 }).map((_, i) =>
            Array.from({ length: 6 }).map((_, j) => (
              <mesh
                key={`${i}-${j}`}
                position={[
                  (i - 3.5) * 0.1,
                  (j - 2.5) * 0.1,
                  0.01
                ]}
              >
                <boxGeometry args={[0.08, 0.08, 0.01]} />
                <meshStandardMaterial
                  color="#333333"
                  emissive="#001122"
                  emissiveIntensity={0.1}
                />
              </mesh>
            ))
          )}
        </group>

        {/* 左眼 - 强化自发光 */}
        <mesh ref={leftEyeRef} position={[-0.25, 0.15, 0.43]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color="#00D8FF"
            emissive="#00D8FF"
            emissiveIntensity={2.0}
            roughness={0.4}
            metalness={0.0}
            transparent
            opacity={0.95}
          />
        </mesh>

        {/* 右眼 - 强化自发光 */}
        <mesh ref={rightEyeRef} position={[0.25, 0.15, 0.43]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color="#00D8FF"
            emissive="#00D8FF"
            emissiveIntensity={2.0}
            roughness={0.4}
            metalness={0.0}
            transparent
            opacity={0.95}
          />
        </mesh>

        {/* 嘴部 */}
        <mesh position={[0, -0.25, 0.42]}>
          <boxGeometry args={[0.4, 0.05, 0.02]} />
          <meshStandardMaterial
            color="#ff4444"
            emissive="#ff2222"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* 颈部 */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.3, 8]} />
        <meshPhysicalMaterial
          color="#2a2a2a"
          metalness={0.9}
          roughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* 身体 - 磨砂塑料 */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.0, 1.0, 0.6]} />
        <meshPhysicalMaterial
          color="#2a2a2a"
          metalness={0.1}
          roughness={0.55}
          clearcoat={0.3}
          clearcoatRoughness={0.6}
          envMapIntensity={0.8}
        />
      </mesh>

      {/* 胸部装甲面板 */}
      <mesh position={[0, 0.3, 0.31]}>
        <boxGeometry args={[0.8, 0.8, 0.05]} />
        <meshPhysicalMaterial
          color="#0a0a0a"
          metalness={0.7}
          roughness={0.4}
          envMapIntensity={0.9}
        />
      </mesh>

      {/* 中央核心 */}
      <mesh position={[0, 0.4, 0.32]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00cccc"
          emissiveIntensity={0.6}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* 状态指示灯 */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[(i - 1) * 0.1, 0.1, 0.32]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial
            color={i === 0 ? "#ff4444" : i === 1 ? "#ffff44" : "#44ff44"}
            emissive={i === 0 ? "#ff2222" : i === 1 ? "#ffff22" : "#22ff22"}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}

      {/* 左臂 */}
      <group position={[-0.7, 0.5, 0]} rotation={[0, 0, 0.2]}>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.08, 0.12, 0.6, 8]} />
          <meshPhysicalMaterial
            color="#2a2a2a"
            metalness={0.85}
            roughness={0.25}
            envMapIntensity={1.1}
          />
        </mesh>
      </group>

      {/* 右臂 */}
      <group position={[0.7, 0.5, 0]} rotation={[0, 0, -0.2]}>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.08, 0.12, 0.6, 8]} />
          <meshPhysicalMaterial
            color="#2a2a2a"
            metalness={0.85}
            roughness={0.25}
            envMapIntensity={1.1}
          />
        </mesh>
      </group>
    </group>
  )
}

// 3D场景组件
function Scene() {
  return (
    <>
      {/* 环境光照 */}
      <ambientLight intensity={0.2} />
      
      {/* 主光源 - 模拟工作室照明 */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={10}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      
      {/* 辅助光源 */}
      <directionalLight
        position={[-3, 2, -2]}
        intensity={0.4}
        color="#4466ff"
      />
      
      {/* 轮廓光 */}
      <directionalLight
        position={[0, -2, -5]}
        intensity={0.3}
        color="#ff6644"
      />

      {/* HDR环境贴图 - 使用更克制的环境光 */}
      <Environment preset="city" background={false} />
      
      {/* 机器人模型 */}
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <ProceduralRobot />
      </Float>
      
      {/* 地面反射 - 降低反射强度 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]}>
        <planeGeometry args={[8, 8]} />
        <MeshReflectorMaterial
          blur={[200, 40]}
          resolution={1024}
          mixBlur={1}
          mixStrength={1.0}
          roughness={0.9}
          depthScale={0.2}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          color="#1b1f2a"
          metalness={0.0}
        />
      </mesh>

      {/* 接触阴影 - 增强落地感 */}
      <ContactShadows
        position={[0, -1.01, 0]}
        opacity={0.35}
        scale={4}
        blur={2.5}
        far={2.5}
      />
    </>
  )
}

// 加载屏幕组件
function LoadingScreen() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-cyan-400 border-t-transparent mx-auto mb-4"></div>
        <p className="text-cyan-400 text-sm">Loading 3D Scene...</p>
      </div>
    </div>
  )
}

// 主组件
interface ProfessionalRobotSceneProps {
  className?: string
}

function ProfessionalRobotSceneInner({ className }: ProfessionalRobotSceneProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl, scene }) => {
          // 配置渲染器为物理正确渲染
          gl.outputColorSpace = THREE.SRGBColorSpace
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 0.9
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
          // 设置深蓝色背景
          scene.background = new THREE.Color('#0A1220')
        }}
      >
        <Suspense fallback={null}>
          <Scene />
          
          {/* 后期处理效果 - 修复过曝问题 */}
          <EffectComposer multisampling={0}>
            <Bloom
              intensity={0.2}
              luminanceThreshold={1.05}
              luminanceSmoothing={0.2}
              mipmapBlur
            />
            <Vignette
              eskil={false}
              offset={0.15}
              darkness={0.6}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}

export function ProfessionalRobotScene({ className }: ProfessionalRobotSceneProps) {
  return (
    <ClientOnly fallback={<LoadingScreen />}>
      <ProfessionalRobotSceneInner className={className} />
    </ClientOnly>
  )
}