"use client";

import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user is on a mobile device
 * Returns true for mobile devices (phones and tablets)
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Check screen width
      const isMobileWidth = window.innerWidth < 768;

      // Check user agent for mobile devices
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      // Check for touch support
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      // Consider it mobile if any condition is true
      setIsMobile(isMobileWidth || (isMobileUA && isTouchDevice));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

/**
 * Hook to detect if device is low-performance (should avoid heavy 3D)
 * Returns true for devices that should use lightweight alternatives
 */
export function useIsLowPerformance(): boolean {
  const [isLowPerf, setIsLowPerf] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      // Check if mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      // Check device memory (if available)
      const deviceMemory = (navigator as any).deviceMemory;
      const hasLowMemory = deviceMemory && deviceMemory < 4; // Less than 4GB RAM

      // Check hardware concurrency (CPU cores)
      const cpuCores = navigator.hardwareConcurrency || 0;
      const hasLowCPU = cpuCores < 4;

      // Mark as low performance if mobile OR has limited resources
      setIsLowPerf(isMobile || hasLowMemory || hasLowCPU);
    };

    checkPerformance();
  }, []);

  return isLowPerf;
}
