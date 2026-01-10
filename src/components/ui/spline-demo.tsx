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

interface SplineAppCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function SplineAppCard({
  title = "AI 3D Scene Generator",
  description = "Generate and customize 3D scenes using advanced AI algorithms and interactive controls",
  icon
}: SplineAppCardProps = {}) {
  return (
    <div className="bg-black/90 rounded-2xl p-8 border border-gray-800 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
      <Spotlight size={250} />

      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
          {icon || <Brain className="w-8 h-8 text-white" />}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4 text-white relative z-10">{title}</h3>
      <p className="text-gray-300 leading-relaxed relative z-10 flex-grow">{description}</p>
    </div>
  )
}