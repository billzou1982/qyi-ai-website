'use client'

import { SplineScene } from './spline'

interface SplineRobotSceneProps {
  className?: string
}

export function SplineRobotScene({ className }: SplineRobotSceneProps) {
  // 使用21st.dev同款高质量机器人场景
  const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
  
  return (
    <div className={`w-full h-full ${className}`}>
      <SplineScene 
        scene={sceneUrl}
        className="w-full h-full"
      />
    </div>
  )
}

// 高级版本 - 支持自定义场景URL
export function SplineRobotSceneAdvanced({ 
  sceneUrl, 
  className,
  fallbackContent 
}: {
  sceneUrl?: string
  className?: string
  fallbackContent?: React.ReactNode
}) {
  const defaultSceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
  
  return (
    <div className={`w-full h-full relative ${className}`}>
      <SplineScene 
        scene={sceneUrl || defaultSceneUrl}
        className="w-full h-full"
      />
      
      {/* 可选的覆盖内容 - 用于添加交互提示等 */}
      {fallbackContent && (
        <div className="absolute inset-0 pointer-events-none">
          {fallbackContent}
        </div>
      )}
    </div>
  )
}

// 专业展示版本 - 快速加载优化
export function SplineRobotProfessional({ className }: SplineRobotSceneProps) {
  return (
    <div className={`w-full h-full relative overflow-visible ${className}`}>
      {/* 主要3D场景 - 优化加载 */}
      <div className="w-full h-full">
        <SplineRobotScene className="w-full h-full" />
      </div>
    </div>
  )
}