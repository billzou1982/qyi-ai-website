'use client'

import { cn } from '@/lib/utils'

type StaticSpotlightProps = {
  className?: string
  fill?: string
  size?: 'small' | 'medium' | 'large'
}

export const StaticSpotlight = ({ 
  className, 
  fill = 'white', 
  size = 'small' 
}: StaticSpotlightProps) => {
  // Size configurations - making them smaller than original 21st.dev version
  const sizeConfig = {
    small: {
      width: 'w-[45%]',
      height: 'h-[60%]',
      viewBox: '0 0 1894 1421', // Reduced from original 3787 2842
      rx: '962.36', // Half of original 1924.71
      ry: '136.75', // Half of original 273.501
      transform: 'matrix(-0.822377 -0.568943 -0.568943 0.822377 1815.94 1145.55)'
    },
    medium: {
      width: 'w-[60%]',
      height: 'h-[75%]',
      viewBox: '0 0 2841 2132',
      rx: '1443.53',
      ry: '205.13',
      transform: 'matrix(-0.822377 -0.568943 -0.568943 0.822377 2723.91 1718.32)'
    },
    large: {
      width: 'w-[84%]',
      height: 'h-[90%]',
      viewBox: '0 0 3787 2842',
      rx: '1924.71',
      ry: '273.501',
      transform: 'matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)'
    }
  }
  
  const config = sizeConfig[size]
  
  return (
    <svg
      className={cn(
        'animate-spotlight pointer-events-none absolute z-[1] opacity-0',
        config.width,
        config.height,
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={config.viewBox}
      fill="none"
    >
      <defs>
        <filter
          id={`spotlight-filter-${size}`}
          x="0"
          y="0"
          width="100%"
          height="100%"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur" />
        </filter>
      </defs>
      <g filter={`url(#spotlight-filter-${size})`}>
        <ellipse
          cx="947.35"
          cy="136.75"
          rx={config.rx}
          ry={config.ry}
          transform={config.transform}
          fill={fill}
          fillOpacity="0.21"
        />
      </g>
    </svg>
  )
}