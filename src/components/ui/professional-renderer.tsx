'use client'

import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing'
import { Suspense, ReactNode } from 'react'
import * as THREE from 'three'

// 专业渲染器配置
interface ProfessionalRendererProps {
  children: ReactNode
  className?: string
  shadows?: boolean
  toneMapping?: 'ACES' | 'Cineon' | 'Reinhard' | 'Linear'
  exposure?: number
  performance?: 'low' | 'medium' | 'high'
  postProcessing?: boolean
}

// 渲染质量预设
const QualityPresets = {
  low: {
    dpr: 1,
    antialias: false,
    shadowMapSize: 1024,
    bloomIntensity: 0.1,
    vignetteOffset: 0.2
  },
  medium: {
    dpr: 1.5,
    antialias: true,
    shadowMapSize: 2048,
    bloomIntensity: 0.15,
    vignetteOffset: 0.15
  },
  high: {
    dpr: 2,
    antialias: true,
    shadowMapSize: 4096,
    bloomIntensity: 0.18,
    vignetteOffset: 0.12
  }
}

// 色调映射枚举
const ToneMappingTypes = {
  ACES: THREE.ACESFilmicToneMapping,
  Cineon: THREE.CineonToneMapping,
  Reinhard: THREE.ReinhardToneMapping,
  Linear: THREE.LinearToneMapping
}

export function ProfessionalRenderer({
  children,
  className = '',
  shadows = true,
  toneMapping = 'ACES',
  exposure = 0.9,
  performance = 'medium',
  postProcessing = true
}: ProfessionalRendererProps) {

  const qualitySettings = QualityPresets[performance]

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        shadows={shadows}
        dpr={[1, qualitySettings.dpr]}
        camera={{
          position: [0, 0, 5],
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: qualitySettings.antialias,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        onCreated={({ gl, scene }) => {
          // 专业颜色管理
          gl.outputColorSpace = THREE.SRGBColorSpace
          gl.toneMapping = ToneMappingTypes[toneMapping]
          gl.toneMappingExposure = exposure

          // 阴影配置
          if (shadows) {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
            gl.shadowMap.autoUpdate = true
          }

          // 场景背景
          scene.background = new THREE.Color('#0A1220')

          // 雾效 - 增强深度感
          scene.fog = new THREE.Fog('#0A1220', 8, 25)
        }}
      >
        <Suspense fallback={null}>
          {children}

          {/* 专业后期处理 */}
          {postProcessing && (
            <EffectComposer multisampling={0}>
              <>
                {/* 辉光效果 - 模拟镜头光晕 */}
                <Bloom
                  intensity={qualitySettings.bloomIntensity}
                  luminanceThreshold={1.05}
                  luminanceSmoothing={0.2}
                  mipmapBlur
                />

                {/* 暗角效果 - 增强电影感 */}
                <Vignette
                  eskil={false}
                  offset={qualitySettings.vignetteOffset}
                  darkness={0.6}
                />

                {/* 色差效果 - 轻微的镜头畸变 */}
                <ChromaticAberration
                  offset={[0.0005, 0.0005]}
                />
              </>
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  )
}

// 专业摄影棚渲染器 - 专门用于产品展示
export function StudioRenderer({
  children,
  className = '',
  autoRotate: _autoRotate = false,
  zoomLevels = { min: 2, max: 10, default: 5 }
}: {
  children: ReactNode
  className?: string
  autoRotate?: boolean
  zoomLevels?: { min: number, max: number, default: number }
}) {

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 2, zoomLevels.default],
          fov: 35,
          near: 0.1,
          far: 100
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          outputColorSpace: THREE.SRGBColorSpace
        }}
        onCreated={({ gl, scene, camera }) => {
          // 摄影棚专用配置
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.0
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap

          // 深色工作室背景
          scene.background = new THREE.Color('#1a1a2e')

          // 设置相机约束
          if (camera instanceof THREE.PerspectiveCamera) {
            camera.position.set(0, 2, zoomLevels.default)
            camera.lookAt(0, 0, 0)
          }
        }}
      >
        <Suspense fallback={null}>
          {children}

          {/* 摄影棚后期处理 - 更保守的设置 */}
          <EffectComposer multisampling={4}>
            <Bloom
              intensity={0.12}
              luminanceThreshold={1.2}
              luminanceSmoothing={0.1}
              mipmapBlur
            />
            <Vignette
              eskil={false}
              offset={0.1}
              darkness={0.4}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}

// 移动端优化渲染器
export function MobileOptimizedRenderer({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) {

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        shadows={false} // 移动端关闭阴影
        dpr={1} // 固定DPR为1
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{
          antialias: false, // 移动端关闭抗锯齿
          alpha: true,
          powerPreference: "default",
          stencil: false
        }}
        onCreated={({ gl, scene }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace
          gl.toneMapping = THREE.LinearToneMapping // 使用更轻量的色调映射
          gl.toneMappingExposure = 1.0

          scene.background = new THREE.Color('#0A1220')
        }}
      >
        <Suspense fallback={null}>
          {children}

          {/* 移动端轻量后期处理 */}
          <EffectComposer multisampling={0}>
            <Bloom
              intensity={0.08}
              luminanceThreshold={1.5}
              luminanceSmoothing={0.1}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}

// 加载界面
export function RenderingLoader() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="text-center">
        <div className="relative mb-4">
          <div className="w-16 h-16 border-4 border-blue-500/30 rounded-full"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-blue-400 text-sm font-medium">Initializing Professional Renderer</p>
        <p className="text-blue-300/60 text-xs mt-1">Loading PBR materials and lighting...</p>
      </div>
    </div>
  )
}