'use client'

import { useState } from 'react'
import { SplineRobotProfessional } from './spline-robot-scene'
import { ProfessionalRobotV2 } from './professional-robot-v2'
import { PremiumRobot } from './premium-robot'

type RobotVersion = 'spline' | 'r3f-professional' | 'r3f-premium'

interface RobotComparisonProps {
  className?: string
  defaultVersion?: RobotVersion
  showControls?: boolean
}

export function RobotComparison({ 
  className = '',
  defaultVersion = 'spline',
  showControls = true
}: RobotComparisonProps) {
  const [currentVersion, setCurrentVersion] = useState<RobotVersion>(defaultVersion)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleVersionChange = async (version: RobotVersion) => {
    if (version === currentVersion) return
    
    setIsTransitioning(true)
    
    // 短暂延迟让用户看到过渡效果
    setTimeout(() => {
      setCurrentVersion(version)
      setIsTransitioning(false)
    }, 200)
  }

  const versionInfo = {
    spline: {
      name: 'Spline Professional',
      description: '使用 21st.dev 同款高质量 3D 场景',
      features: ['专业建模资产', '完整 PBR 材质', '摄影棚光照', 'Spline 渲染管线'],
      performance: '高质量',
      loadTime: '中等',
      color: 'blue'
    },
    'r3f-professional': {
      name: 'R3F Professional',
      description: '自研专业级 React Three Fiber 渲染管线',
      features: ['ACES 色调映射', '程序化 PBR 材质', '摄影棚级光照', '专业后期处理'],
      performance: '可调节',
      loadTime: '快速',
      color: 'green'
    },
    'r3f-premium': {
      name: 'R3F Premium',
      description: '原有的高质量 Framer Motion 版本',
      features: ['Framer Motion 动画', '渐变材质', '交互光效', '流畅动画'],
      performance: '轻量',
      loadTime: '极快',
      color: 'purple'
    }
  }

  const currentInfo = versionInfo[currentVersion]

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* 机器人显示区域 */}
      <div className={`w-full h-full transition-opacity duration-200 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
        {currentVersion === 'spline' && <SplineRobotProfessional />}
        {currentVersion === 'r3f-professional' && <ProfessionalRobotV2 />}
        {currentVersion === 'r3f-premium' && <PremiumRobot />}
      </div>

      {/* 版本切换控制面板 */}
      {showControls && (
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <div className="text-white text-sm font-medium mb-2">3D Robot Versions</div>
            
            {/* 版本选择按钮 */}
            <div className="flex flex-col gap-1 mb-3">
              {(Object.keys(versionInfo) as RobotVersion[]).map((version) => (
                <button
                  key={version}
                  onClick={() => handleVersionChange(version)}
                  disabled={isTransitioning}
                  className={`
                    px-3 py-1.5 rounded text-xs font-medium transition-all duration-200
                    ${currentVersion === version
                      ? `bg-${versionInfo[version].color}-500 text-white` 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }
                    ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
                  `}
                >
                  {versionInfo[version].name}
                </button>
              ))}
            </div>

            {/* 当前版本信息 */}
            <div className="border-t border-white/10 pt-2">
              <div className="text-white/90 text-xs font-medium mb-1">
                {currentInfo.name}
              </div>
              <div className="text-white/60 text-xs mb-2">
                {currentInfo.description}
              </div>
              
              {/* 性能指标 */}
              <div className="flex justify-between text-xs text-white/50 mb-2">
                <span>质量: {currentInfo.performance}</span>
                <span>加载: {currentInfo.loadTime}</span>
              </div>

              {/* 特性列表 */}
              <div className="space-y-1">
                {currentInfo.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-1 text-xs text-white/60">
                    <div className={`w-1 h-1 rounded-full bg-${currentInfo.color}-400`}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 性能监控（可选） */}
      {showControls && (
        <div className="absolute bottom-4 right-4 z-20">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
            <div className="text-white/60 text-xs">
              引擎: {currentVersion === 'spline' ? 'Spline' : 'React Three Fiber'}
            </div>
            {currentVersion !== 'spline' && (
              <div className="text-white/60 text-xs">
                渲染: {currentVersion === 'r3f-professional' ? 'PBR + ACES' : 'Standard'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 加载指示器 */}
      {isTransitioning && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span className="text-white text-sm">切换中...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// 简化版本选择器 - 用于主页
export function SimpleRobotSelector({
  className = '',
  onChange
}: {
  className?: string
  onChange?: (version: RobotVersion) => void
}) {
  const [currentVersion, setCurrentVersion] = useState<RobotVersion>('spline')

  const handleChange = (version: RobotVersion) => {
    setCurrentVersion(version)
    onChange?.(version)
  }

  return (
    <div className={`inline-flex bg-black/20 backdrop-blur-sm rounded-lg p-1 ${className}`}>
      <button
        onClick={() => handleChange('spline')}
        className={`px-3 py-1 rounded text-xs font-medium transition-all ${
          currentVersion === 'spline'
            ? 'bg-blue-500 text-white shadow-lg'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        Spline
      </button>
      <button
        onClick={() => handleChange('r3f-professional')}
        className={`px-3 py-1 rounded text-xs font-medium transition-all ${
          currentVersion === 'r3f-professional'
            ? 'bg-green-500 text-white shadow-lg'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        R3F Pro
      </button>
      <button
        onClick={() => handleChange('r3f-premium')}
        className={`px-3 py-1 rounded text-xs font-medium transition-all ${
          currentVersion === 'r3f-premium'
            ? 'bg-purple-500 text-white shadow-lg'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        Premium
      </button>
    </div>
  )
}