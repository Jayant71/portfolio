"use client"

import { useState } from "react"
import { useFrame } from "@react-three/fiber"

export function PerformanceMonitor({ onPerformanceChange }) {
  const [fps, setFps] = useState(60)
  const [frameCount, setFrameCount] = useState(0)
  const [lastTime, setLastTime] = useState(performance.now())

  useFrame(() => {
    const currentTime = performance.now()
    const newFrameCount = frameCount + 1

    if (currentTime - lastTime >= 1000) {
      const currentFps = Math.round((newFrameCount * 1000) / (currentTime - lastTime))
      setFps(currentFps)
      setFrameCount(0)
      setLastTime(currentTime)

      // Notify parent component of performance changes
      if (onPerformanceChange) {
        onPerformanceChange(currentFps)
      }
    } else {
      setFrameCount(newFrameCount)
    }
  })

  return null
}
