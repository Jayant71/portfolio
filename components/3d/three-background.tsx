"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useTheme } from "next-themes"
import { Points, PointMaterial } from "@react-three/drei"
import { useMobile } from "@/hooks/use-mobile"
import * as THREE from "three"

// Simplified particle system for a lightweight background effect
function LightweightParticleField({
  count = 1500,
  mouse,
}: {
  count?: number
  mouse: React.MutableRefObject<[number, number]>
}) {
  const { theme } = useTheme()
  const isMobile = useMobile()

  // Adjust particle count for mobile devices
  const particleCount = isMobile ? Math.floor(count / 2) : count

  const pointsRef = useRef<THREE.Points>(null)

  // Generate initial particle positions and velocities
  const particleData = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15

      velocities[i * 3] = (Math.random() - 0.5) * 0.01
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01
    }

    return { positions, velocities }
  }, [particleCount])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const { velocities } = particleData

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        // Basic velocity
        positions[i3] += velocities[i3]
        positions[i3 + 1] += velocities[i3 + 1]
        positions[i3 + 2] += velocities[i3 + 2]

        // Boundary wrapping
        if (Math.abs(positions[i3]) > 8) positions[i3] *= -1
        if (Math.abs(positions[i3 + 1]) > 8) positions[i3 + 1] *= -1
        if (Math.abs(positions[i3 + 2]) > 8) positions[i3 + 2] *= -1
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true

      // Gentle rotation based on mouse position
      pointsRef.current.rotation.y += mouse.current[0] * 0.0005
      pointsRef.current.rotation.x += mouse.current[1] * 0.0005
    }
  })

  const particleColor = theme === "dark" ? "#ffffff" : "#000000"

  return (
    <Points ref={pointsRef} positions={particleData.positions} stride={3}>
      <PointMaterial
        transparent
        size={0.01}
        sizeAttenuation
        color={particleColor}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function Scene() {
  const mouse = useRef<[number, number]>([0, 0])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = [
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      ]
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <LightweightParticleField mouse={mouse} />
    </>
  )
}

export default function ThreeBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]} // Limit pixel ratio for performance
    >
      <Scene />
    </Canvas>
  )
}
