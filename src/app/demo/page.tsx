'use client'

import { SplineSceneBasic } from "@/components/ui/spline-demo"
import { Spotlight } from "@/components/ui/spotlight"
import { Simple3DBackground, Interactive3DCard } from "@/components/ui/simple-3d"
import { Advanced3DScene } from "@/components/ui/advanced-3d"
import { Robot3D } from "@/components/ui/robot-3d"
import { PremiumRobot } from "@/components/ui/premium-robot"
import { ProfessionalRobotScene } from "@/components/ui/professional-robot-scene"
import { FlatRobot } from "@/components/ui/flat-robot"
import { RobotComparison } from "@/components/ui/robot-comparison"
import { SplineRobotProfessional } from "@/components/ui/spline-robot-scene"
import { ProfessionalRobotV2 } from "@/components/ui/professional-robot-v2"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">3D Components Demo</h1>
          <p className="text-gray-600">从UI插画到专业3D渲染 - 完全匹配目标设计！A/B 测试不同渲染方案</p>
        </div>

        {/* 🎯 ROBOT A/B COMPARISON - 新增对比测试区域 */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl border-2 border-blue-200 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            🔬 3D 机器人渲染方案对比测试
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="h-[700px] bg-gray-900 rounded-2xl overflow-hidden relative">
              <RobotComparison 
                defaultVersion="spline"
                showControls={true}
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">🎯 渲染方案对比</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Spline 方案 */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">🎨 Spline Professional</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>✓ 21st.dev 同款场景</li>
                    <li>✓ 专业建模资产</li>
                    <li>✓ 完整 PBR 材质</li>
                    <li>✓ 摄影棚光照</li>
                    <li>✓ 即开即用</li>
                  </ul>
                </div>

                {/* R3F Professional 方案 */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">⚡ R3F Professional</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>✓ ACES 色调映射</li>
                    <li>✓ 程序化 PBR 材质</li>
                    <li>✓ 摄影棚级光照</li>
                    <li>✓ 专业后期处理</li>
                    <li>✓ 完全自主可控</li>
                  </ul>
                </div>

                {/* R3F Premium 方案 */}
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">🎭 R3F Premium</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>✓ Framer Motion 动画</li>
                    <li>✓ 渐变材质</li>
                    <li>✓ 交互光效</li>
                    <li>✓ 流畅动画</li>
                    <li>✓ 轻量高效</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-800 mb-2">🧪 A/B 测试说明</h4>
                <p className="text-sm text-blue-700">
                  左上角控制面板可以实时切换三种不同的渲染方案。每种方案都有其优势：
                  <strong>Spline</strong> 专业资产质量最高，
                  <strong>R3F Pro</strong> 技术栈完全自主，
                  <strong>R3F Premium</strong> 性能和动画最优。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 🎯 FLAT ROBOT - 完美匹配目标图片 */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border-2 border-indigo-200">
          <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            🎯 扁平化方形机器人 - 完全匹配目标图片！
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-[600px] bg-gray-900 rounded-2xl overflow-hidden">
              <FlatRobot />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">🎯 完美复刻特性</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">✓</span>
                  <div>
                    <strong>方形头部设计</strong><br/>
                    <span className="text-sm text-gray-600">RoundedBoxGeometry + 圆角，完全匹配目标造型</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">✓</span>
                  <div>
                    <strong>真实网格面板</strong><br/>
                    <span className="text-sm text-gray-600">Canvas生成8x6格子纹理，代码实时绘制</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">✓</span>
                  <div>
                    <strong>正交相机2.5D效果</strong><br/>
                    <span className="text-sm text-gray-600">orthographic + zoom:110 消除透视失真</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">✓</span>
                  <div>
                    <strong>青色发光眼睛</strong><br/>
                    <span className="text-sm text-gray-600">emissive自发光，无需Bloom后期</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">✓</span>
                  <div>
                    <strong>红色发光嘴巴</strong><br/>
                    <span className="text-sm text-gray-600">精确匹配目标图片的横条设计</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">✓</span>
                  <div>
                    <strong>深蓝科技背景</strong><br/>
                    <span className="text-sm text-gray-600">RectAreaLight软箱光照，干净扁平质感</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-bold text-purple-800 mb-2">🎨 设计完美匹配</h4>
                <p className="text-sm text-purple-700">
                  这个实现<strong>100%代码生成</strong>，无需任何静态资源！
                  使用正交相机达到2.5D扁平效果，完全匹配目标图片的方形头部、网格面板、发光眼睛设计。
                </p>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border-l-4 border-green-400">
                <h4 className="font-bold text-green-800 mb-2">🖱️ 交互测试</h4>
                <p className="text-sm text-green-700">
                  移动鼠标观察机器人头部的跟踪效果！限制在±17°角度内，保持扁平化视觉效果。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 🚀 PROFESSIONAL 3D ROBOT - 顶级展示 */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border-2 border-blue-200">
          <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🚀 专业级3D机器人 - react-three-fiber + PBR渲染
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-[600px] bg-black rounded-2xl overflow-hidden">
              <ProfessionalRobotScene />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">🎯 专业级特性</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>物理正确渲染 (PBR)</strong><br/>
                    <span className="text-sm text-gray-600">ACESFilmicToneMapping + sRGB + 物理光照</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>真实材质系统</strong><br/>
                    <span className="text-sm text-gray-600">金属度0.9 + 粗糙度 + 清漆 + 环境反射</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>工作室级光照</strong><br/>
                    <span className="text-sm text-gray-600">三点布光 + HDR环境 + 实时阴影</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>专业后期处理</strong><br/>
                    <span className="text-sm text-gray-600">Bloom辉光 + Vignette暗角 + 色调映射</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>高级交互动画</strong><br/>
                    <span className="text-sm text-gray-600">骨骼级头部跟踪 + 眼部发光 + 悬浮效果</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>地面反射与接触阴影</strong><br/>
                    <span className="text-sm text-gray-600">实时反射 + 软阴影 + 深度感</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-l-4 border-green-400">
                <h4 className="font-bold text-green-800 mb-2">🎓 技术突破点</h4>
                <p className="text-sm text-green-700">
                  这个实现使用了与专业3D软件相同的渲染技术：<strong>物理正确渲染 (PBR)</strong>、
                  <strong>HDR环境光照</strong>、<strong>实时后期处理</strong>，
                  达到了接近Blender/Cinema4D的视觉质量！
                </p>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-bold text-purple-800 mb-2">🖱️ 交互说明</h4>
                <p className="text-sm text-purple-700">
                  移动鼠标观察机器人头部的3D跟踪效果，注意金属表面的真实反射和环境光照变化！
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Robot Demo - 置顶展示 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">🚀 高质量3D机器人 - Premium Robot</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-[500px]">
              <PremiumRobot />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Premium 特性:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 🎯 <strong>专业头盔设计</strong> - 网格面板、金属质感</li>
                <li>• 👀 <strong>高级眼部追踪</strong> - 3D眼球跟随鼠标</li>
                <li>• ⚡ <strong>真实光照效果</strong> - 环境光、反射、阴影</li>
                <li>• 🔧 <strong>精细身体细节</strong> - 装甲板、关节、核心</li>
                <li>• 💎 <strong>金属材质渲染</strong> - 渐变、高光、深度</li>
                <li>• 🌟 <strong>交互式光晕</strong> - 鼠标跟随光效</li>
                <li>• 🎨 <strong>动态状态灯</strong> - RGB指示灯动画</li>
                <li>• 🎪 <strong>流畅3D动画</strong> - 悬浮、转头、微动作</li>
              </ul>
              <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-cyan-400">
                <p className="text-sm text-cyan-800">
                  <strong>💡 专业提示:</strong> 将鼠标移动到机器人上方，体验真实的3D头部跟踪和眼部追随效果！这个机器人设计接近专业3D建模的质量。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SplineSceneBasic Demo */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Interactive Experience Section</h2>
          <SplineSceneBasic />
        </section>

        {/* Simple 3D Background Demo */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Hero Background Effect</h2>
          <div className="relative h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg overflow-hidden">
            <Simple3DBackground />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Hero Content</h3>
                <p className="text-gray-600">This would be your hero text over the 3D background</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive 3D Card Demo */}
        <section>
          <h2 className="text-2xl font-bold mb-4">3D App Card</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-64">
              <Interactive3DCard />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Features:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Animated background gradients</li>
                <li>• Floating particle effects</li>
                <li>• 3D-style wireframe borders</li>
                <li>• Responsive design</li>
                <li>• Pure CSS + Framer Motion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3D Robot Demo */}
        <section>
          <h2 className="text-2xl font-bold mb-4">3D 机器人 - 跟随鼠标转头 🤖</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-96">
              <Robot3D />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">机器人特性:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 🎯 头部跟随鼠标转动</li>
                <li>• 👀 眼珠跟踪鼠标位置</li>
                <li>• 💡 LED状态指示灯</li>
                <li>• 📺 动态屏幕显示</li>
                <li>• 🌊 流畅的悬浮动画</li>
                <li>• ✨ 交互式光照效果</li>
                <li>• 🎨 3D渐变和阴影</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>使用说明:</strong> 将鼠标移动到机器人上方，观察头部和眼部如何跟随鼠标移动！
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced 3D Scene Demo */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Advanced 3D Scene (几何体)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-96">
              <Advanced3DScene />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Advanced Features:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 真实的3D透视和旋转</li>
                <li>• 鼠标交互控制3D相机</li>
                <li>• 复杂的3D几何体(立方体)</li>
                <li>• 动态光照和阴影效果</li>
                <li>• 3D空间中的浮动元素</li>
                <li>• 高质量的视觉渲染</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Spotlight Demo */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Interactive Spotlight Effect</h2>
          <div className="relative h-64 bg-black rounded-lg overflow-hidden">
            <Spotlight size={300} />
            <div className="relative z-10 flex items-center justify-center h-full text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Hover to see spotlight</h3>
                <p className="text-gray-300">Mouse movement creates interactive lighting</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}