'use client'

import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Simple3DBackground } from "@/components/ui/simple-3d"
import { SplineRobotProfessional } from "@/components/ui/spline-robot-scene"
import { Brain } from "lucide-react"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-gray-800">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        size={300}
      />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Bring your AI applications to life with beautiful 3D scenes. Create immersive experiences
            that capture attention and showcase cutting-edge technology.
          </p>
          <div className="mt-6">
            <div className="flex items-center gap-2 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              Interactive • Responsive • Optimized
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <div className="w-full h-full">
            <SplineRobotProfessional />
          </div>
        </div>
      </div>
    </Card>
  )
}

export function SplineHeroBackground() {
  return (
    <Simple3DBackground />
  )
}

export function SplineAppCard() {
  return (
    <div className="bg-black/90 rounded-2xl p-8 border border-gray-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
      <Spotlight size={250} />

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-15 h-15 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/20">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">AI Powered</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">3D</span>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 text-white relative z-10">AI 3D Scene Generator</h3>
      <p className="text-gray-300 mb-4 relative z-10">Generate and customize 3D scenes using advanced AI algorithms and interactive controls</p>

      <div className="h-32 mb-4 relative rounded-lg overflow-hidden">
        <SplineRobotProfessional />
      </div>

      <ul className="text-sm text-gray-400 mb-6 space-y-1 relative z-10">
        <li>• Real-time 3D generation</li>
        <li>• Interactive scene editing</li>
        <li>• Export to multiple formats</li>
      </ul>

      <div className="flex gap-2 relative z-10">
        <button className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
          Try Demo
        </button>
        <button className="px-4 py-2 border border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-50/10 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  )
}