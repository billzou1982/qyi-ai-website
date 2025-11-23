'use client'

import { Environment } from '@react-three/drei'
import * as THREE from 'three'

// 摄影棚级光照组件
export function StudioLighting({ 
  intensity = 1.0,
  shadowsEnabled = true 
}: {
  intensity?: number
  shadowsEnabled?: boolean
}) {
  return (
    <>
      {/* 主要环境光照 - 使用摄影棚HDRI */}
      <Environment 
        preset="studio" 
        background={false}
        environmentIntensity={intensity * 0.8}
      />
      
      {/* 主光源 - 模拟摄影棚主灯 */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={intensity * 1.2}
        castShadow={shadowsEnabled}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={15}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        shadow-bias={-0.0001}
      />
      
      {/* 辅助光源 - 蓝色填充光 */}
      <directionalLight
        position={[-3, 2, -2]}
        intensity={intensity * 0.4}
        color="#4A90E2"
      />
      
      {/* 轮廓光 - 橙色背光 */}
      <directionalLight
        position={[0, -2, -5]}
        intensity={intensity * 0.3}
        color="#E2A84A"
      />
      
      {/* 顶部软箱光 - 模拟摄影棚软箱 */}
      <rectAreaLight
        position={[0, 4, 2]}
        width={3}
        height={1}
        intensity={intensity * 8}
        color="#ffffff"
      />
      
      {/* 侧面条形光 - 产生金属高光 */}
      <rectAreaLight
        position={[-2, 1.5, 1]}
        width={0.3}
        height={2}
        intensity={intensity * 12}
        color="#ffffff"
        rotation={[0, Math.PI / 4, 0]}
      />
      
      <rectAreaLight
        position={[2, 1.5, 1]}
        width={0.3}
        height={2}
        intensity={intensity * 12}
        color="#ffffff"
        rotation={[0, -Math.PI / 4, 0]}
      />
      
      {/* 环境光 - 提升整体亮度 */}
      <ambientLight intensity={intensity * 0.15} color="#f0f0f0" />
    </>
  )
}

// 专业级光照组件 - 更多控制选项
export function ProfessionalStudioLighting({
  mainLightIntensity = 1.2,
  fillLightIntensity = 0.4,
  rimLightIntensity = 0.3,
  environmentIntensity = 0.8,
  shadowQuality = 'high' as 'low' | 'medium' | 'high',
  colorTemperature = 'neutral' as 'warm' | 'neutral' | 'cool'
}: {
  mainLightIntensity?: number
  fillLightIntensity?: number
  rimLightIntensity?: number
  environmentIntensity?: number
  shadowQuality?: 'low' | 'medium' | 'high'
  colorTemperature?: 'warm' | 'neutral' | 'cool'
}) {
  
  // 色温映射
  const colorMap = {
    warm: '#FFE4B5',
    neutral: '#FFFFFF', 
    cool: '#E6F3FF'
  }
  
  // 阴影质量映射
  const shadowSizes = {
    low: 1024,
    medium: 2048,
    high: 4096
  }
  
  const mainColor = colorMap[colorTemperature]
  const shadowSize = shadowSizes[shadowQuality]
  
  return (
    <>
      {/* HDR环境贴图 */}
      <Environment 
        preset="city"
        background={false}
        environmentIntensity={environmentIntensity}
      />
      
      {/* 主光源 - 可调色温 */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={mainLightIntensity}
        color={mainColor}
        castShadow
        shadow-mapSize-width={shadowSize}
        shadow-mapSize-height={shadowSize}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
        shadow-normalBias={0.02}
      />
      
      {/* 填充光 */}
      <directionalLight
        position={[-3, 3, 2]}
        intensity={fillLightIntensity}
        color="#87CEEB"
      />
      
      {/* 轮廓光 */}
      <directionalLight
        position={[0, -1, -4]}
        intensity={rimLightIntensity}
        color="#FFB366"
      />
      
      {/* 专业摄影棚条形灯组 */}
      <group>
        {/* 主条形灯 */}
        <rectAreaLight
          position={[-1.5, 3, 2]}
          width={0.2}
          height={1.5}
          intensity={15}
          color={mainColor}
        />
        
        {/* 副条形灯 */}
        <rectAreaLight
          position={[1.5, 3, 2]}
          width={0.2}
          height={1.5}
          intensity={12}
          color={mainColor}
        />
        
        {/* 背景灯 */}
        <rectAreaLight
          position={[0, 1, -3]}
          width={2}
          height={0.5}
          intensity={8}
          color="#E6F3FF"
        />
      </group>
      
      {/* 柔和环境光 */}
      <ambientLight intensity={environmentIntensity * 0.2} />
    </>
  )
}