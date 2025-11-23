'use client'

import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, ContactShadows, MeshReflectorMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { ProfessionalRenderer, RenderingLoader } from './professional-renderer'
import { ProfessionalStudioLighting } from './studio-lighting'
import { PBRMaterial, usePBRMaterial } from './pbr-materials'
import { ClientOnly } from './client-only'

// 高质量程序化机器人 - 使用新的材质和光照系统
function ProfessionalRobotModel() {
  const groupRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Group>(null)
  const leftEyeRef = useRef<THREE.Mesh>(null)
  const rightEyeRef = useRef<THREE.Mesh>(null)
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // 鼠标跟踪
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x: x * 0.3, y: y * 0.2 })
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
      const intensity = 1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.5
      const leftMaterial = leftEyeRef.current.material as THREE.MeshStandardMaterial
      const rightMaterial = rightEyeRef.current.material as THREE.MeshStandardMaterial
      leftMaterial.emissiveIntensity = intensity
      rightMaterial.emissiveIntensity = intensity
    }

    // 整体轻微旋转
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  // 获取材质属性
  const headMaterial = usePBRMaterial('premiumMetal')
  const bodyMaterial = usePBRMaterial('mattePlastic')
  const panelMaterial = usePBRMaterial('carbonFiber')
  const eyeMaterial = usePBRMaterial('emissive')
  const neckMaterial = usePBRMaterial('premiumMetal', { roughness: 0.3 })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* 机器人头部 */}
      <group ref={headRef} position={[0, 1.2, 0]}>
        {/* 头部主体 - 高级金属材质 */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.4, 1.1, 0.9]} />
          <meshPhysicalMaterial {...headMaterial} />
        </mesh>
        
        {/* 面部面板 - 碳纤维材质 */}
        <mesh position={[0, 0, 0.46]} castShadow>
          <boxGeometry args={[1.1, 0.9, 0.05]} />
          <meshPhysicalMaterial {...panelMaterial} />
        </mesh>

        {/* 网格面板效果 - 程序化生成 */}
        <group position={[0, 0, 0.47]}>
          {Array.from({ length: 10 }).map((_, i) =>
            Array.from({ length: 8 }).map((_, j) => (
              <mesh
                key={`${i}-${j}`}
                position={[
                  (i - 4.5) * 0.09,
                  (j - 3.5) * 0.09,
                  0.01
                ]}
                castShadow
              >
                <boxGeometry args={[0.07, 0.07, 0.01]} />
                <meshPhysicalMaterial
                  color="#2a2a2a"
                  metalness={0.8}
                  roughness={0.2}
                  emissive="#001133"
                  emissiveIntensity={0.1}
                />
              </mesh>
            ))
          )}
        </group>

        {/* 左眼 - 发光材质 */}
        <mesh ref={leftEyeRef} position={[-0.28, 0.2, 0.48]} castShadow>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial {...eyeMaterial} />
        </mesh>

        {/* 右眼 - 发光材质 */}
        <mesh ref={rightEyeRef} position={[0.28, 0.2, 0.48]} castShadow>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial {...eyeMaterial} />
        </mesh>

        {/* 嘴部 */}
        <mesh position={[0, -0.3, 0.47]} castShadow>
          <boxGeometry args={[0.5, 0.06, 0.02]} />
          <meshStandardMaterial
            color="#FF4444"
            emissive="#FF2222"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>

      {/* 颈部 - 高级金属 */}
      <mesh position={[0, 0.8, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.28, 0.35, 12]} />
        <meshPhysicalMaterial {...neckMaterial} />
      </mesh>

      {/* 身体 - 磨砂塑料 */}
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.1, 1.1, 0.7]} />
        <meshPhysicalMaterial {...bodyMaterial} />
      </mesh>

      {/* 胸部装甲面板 - 碳纤维 */}
      <mesh position={[0, 0.3, 0.36]} castShadow>
        <boxGeometry args={[0.9, 0.9, 0.05]} />
        <meshPhysicalMaterial {...panelMaterial} />
      </mesh>

      {/* 中央核心 - 发光 */}
      <mesh position={[0, 0.4, 0.37]} castShadow>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00cccc"
          emissiveIntensity={1.2}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* 状态指示灯 */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[(i - 1) * 0.12, 0.1, 0.37]} castShadow>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color={i === 0 ? "#ff4444" : i === 1 ? "#ffff44" : "#44ff44"}
            emissive={i === 0 ? "#ff2222" : i === 1 ? "#ffff22" : "#22ff22"}
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}

      {/* 左臂 - 高级金属 */}
      <group position={[-0.8, 0.5, 0]} rotation={[0, 0, 0.2]}>
        <mesh position={[0, -0.35, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.09, 0.13, 0.7, 10]} />
          <meshPhysicalMaterial {...neckMaterial} />
        </mesh>
      </group>

      {/* 右臂 - 高级金属 */}
      <group position={[0.8, 0.5, 0]} rotation={[0, 0, -0.2]}>
        <mesh position={[0, -0.35, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.09, 0.13, 0.7, 10]} />
          <meshPhysicalMaterial {...neckMaterial} />
        </mesh>
      </group>
    </group>
  )
}

// 专业场景组件
function ProfessionalScene() {
  return (
    <>
      {/* 专业摄影棚光照 */}
      <ProfessionalStudioLighting
        mainLightIntensity={1.0}
        fillLightIntensity={0.3}
        rimLightIntensity={0.4}
        environmentIntensity={0.9}
        shadowQuality="high"
        colorTemperature="neutral"
      />
      
      {/* 机器人模型 */}
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <ProfessionalRobotModel />
      </Float>
      
      {/* 地面反射 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <MeshReflectorMaterial
          blur={[300, 50]}
          resolution={1024}
          mixBlur={1}
          mixStrength={0.8}
          roughness={0.8}
          depthScale={0.3}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          color="#1a1a2e"
          metalness={0.0}
        />
      </mesh>

      {/* 接触阴影 */}
      <ContactShadows
        position={[0, -1.01, 0]}
        opacity={0.4}
        scale={5}
        blur={2.5}
        far={3}
        color="#000000"
      />
    </>
  )
}

// 主组件
interface ProfessionalRobotV2Props {
  className?: string
}

function ProfessionalRobotV2Inner({ className }: ProfessionalRobotV2Props) {
  return (
    <ProfessionalRenderer
      className={className}
      shadows
      toneMapping="ACES"
      exposure={0.9}
      performance="high"
      postProcessing
    >
      <ProfessionalScene />
    </ProfessionalRenderer>
  )
}

export function ProfessionalRobotV2({ className }: ProfessionalRobotV2Props) {
  return (
    <ClientOnly fallback={<RenderingLoader />}>
      <ProfessionalRobotV2Inner className={className} />
    </ClientOnly>
  )
}