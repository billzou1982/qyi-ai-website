'use client'

import * as THREE from 'three'
import { useMemo } from 'react'

// PBR材质配置接口
export interface PBRMaterialConfig {
  baseColor?: string
  metalness?: number
  roughness?: number
  clearcoat?: number
  clearcoatRoughness?: number
  envMapIntensity?: number
  normalScale?: number
  emissive?: string
  emissiveIntensity?: number
}

// 预设材质配置
export const MaterialPresets = {
  // 高级金属 - 机器人头盔
  premiumMetal: {
    baseColor: '#2a2a2a',
    metalness: 0.95,
    roughness: 0.15,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
    envMapIntensity: 1.5,
    normalScale: 1.0
  } as PBRMaterialConfig,

  // 磨砂塑料 - 机器人身体
  mattePlastic: {
    baseColor: '#3a3a3a',
    metalness: 0.05,
    roughness: 0.7,
    clearcoat: 0.3,
    clearcoatRoughness: 0.6,
    envMapIntensity: 0.8,
    normalScale: 0.5
  } as PBRMaterialConfig,

  // 发光材质 - 眼部/核心
  emissive: {
    baseColor: '#00FFFF',
    metalness: 0.0,
    roughness: 0.3,
    emissive: '#00FFFF',
    emissiveIntensity: 2.0,
    envMapIntensity: 0.5
  } as PBRMaterialConfig,

  // 碳纤维 - 装甲面板
  carbonFiber: {
    baseColor: '#1a1a1a',
    metalness: 0.1,
    roughness: 0.4,
    clearcoat: 0.9,
    clearcoatRoughness: 0.2,
    envMapIntensity: 1.2,
    normalScale: 2.0
  } as PBRMaterialConfig,

  // 哑光黑 - 内部组件
  matteBlack: {
    baseColor: '#0a0a0a',
    metalness: 0.0,
    roughness: 0.9,
    envMapIntensity: 0.3
  } as PBRMaterialConfig
}

// 程序化纹理生成器
export function createProceduralTextures() {
  // 创建法线贴图 - 模拟碳纤维纹理
  const createCarbonFiberNormal = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')!

    // 绘制碳纤维编织图案
    ctx.fillStyle = '#808080'
    ctx.fillRect(0, 0, 512, 512)

    ctx.strokeStyle = '#606060'
    ctx.lineWidth = 2

    // 横向纤维
    for (let i = 0; i < 512; i += 8) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(512, i)
      ctx.stroke()
    }

    // 纵向纤维
    for (let i = 0; i < 512; i += 8) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, 512)
      ctx.stroke()
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(4, 4)
    return texture
  }

  // 创建粗糙度贴图
  const createRoughnessMap = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')!

    // 基础粗糙度
    ctx.fillStyle = '#666666'
    ctx.fillRect(0, 0, 256, 256)

    // 添加随机变化
    const imageData = ctx.getImageData(0, 0, 256, 256)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      const variation = (Math.random() - 0.5) * 60
      const value = Math.max(0, Math.min(255, 102 + variation))
      data[i] = data[i + 1] = data[i + 2] = value
    }

    ctx.putImageData(imageData, 0, 0)

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    return texture
  }

  // 创建金属度贴图
  const createMetalnessMap = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')!

    // 创建渐变 - 模拟金属与塑料的过渡
    const gradient = ctx.createLinearGradient(0, 0, 256, 256)
    gradient.addColorStop(0, '#ffffff') // 高金属度
    gradient.addColorStop(0.7, '#cccccc') // 中等金属度
    gradient.addColorStop(1, '#333333') // 低金属度

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 256, 256)

    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }

  return {
    carbonFiberNormal: createCarbonFiberNormal(),
    roughnessMap: createRoughnessMap(),
    metalnessMap: createMetalnessMap()
  }
}

// PBR材质Hook
export function usePBRMaterial(preset: keyof typeof MaterialPresets, customConfig?: Partial<PBRMaterialConfig>) {
  const textures = useMemo(() => createProceduralTextures(), [])

  const materialConfig = useMemo(() => ({
    ...MaterialPresets[preset],
    ...customConfig
  }), [preset, customConfig])

  const materialProps = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const props: any = {
      color: materialConfig.baseColor,
      metalness: materialConfig.metalness,
      roughness: materialConfig.roughness,
      envMapIntensity: materialConfig.envMapIntensity,
    }

    // 添加清漆效果
    if (materialConfig.clearcoat !== undefined) {
      props.clearcoat = materialConfig.clearcoat
      props.clearcoatRoughness = materialConfig.clearcoatRoughness
    }

    // 添加发光效果
    if (materialConfig.emissive) {
      props.emissive = materialConfig.emissive
      props.emissiveIntensity = materialConfig.emissiveIntensity
    }

    // 根据材质类型添加相应贴图
    if (preset === 'carbonFiber') {
      props.normalMap = textures.carbonFiberNormal
      props.normalScale = [materialConfig.normalScale || 1, materialConfig.normalScale || 1]
      props.roughnessMap = textures.roughnessMap
      props.metalnessMap = textures.metalnessMap
    }

    return props
  }, [materialConfig, textures, preset])

  return materialProps
}

// 材质组件 - 直接应用到mesh
export function PBRMaterial({
  preset,
  customConfig
}: {
  preset: keyof typeof MaterialPresets
  customConfig?: Partial<PBRMaterialConfig>
}) {
  const materialProps = usePBRMaterial(preset, customConfig)

  return <meshPhysicalMaterial {...materialProps} />
}

// 材质预览组件 - 用于材质调试
export function MaterialPreview({ preset }: { preset: keyof typeof MaterialPresets }) {
  const materialProps = usePBRMaterial(preset)

  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial {...materialProps} />
    </mesh>
  )
}