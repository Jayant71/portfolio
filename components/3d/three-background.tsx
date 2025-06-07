"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useTheme } from "next-themes"
import { Points, PointMaterial } from "@react-three/drei"
import { useMobile } from "@/hooks/use-mobile"
import * as THREE from "three"

// Enhanced particle system with connections
function EnhancedParticleField({ count = 3000, mouse, scrollY }) {
  const { theme } = useTheme()
  const isMobile = useMobile()

  // Reduce particle count on mobile for performance
  const particleCount = Math.max(100, isMobile ? Math.floor(count / 3) : count)
  const connectionDistance = isMobile ? 0.8 : 1.2

  const pointsRef = useRef()
  const groupRef = useRef()

  // Generate particles with additional properties
  const particleData = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const phases = new Float32Array(particleCount)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12

      // Velocity
      velocities[i * 3] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02

      // Phase for wave animation
      phases[i] = Math.random() * Math.PI * 2

      // Size variation
      sizes[i] = Math.random() * 0.5 + 0.5
    }

    return { positions, velocities, phases, sizes }
  }, [particleCount])

  // Create lines for connections - simplified to avoid performance issues
  const [lineSegments, setLineSegments] = useState([])

  useEffect(() => {
    // Create connections between particles - limited number for performance
    const maxConnections = isMobile ? 20 : 50
    const lines = []
    const positions = [...particleData.positions]

    // Only create a limited number of connections
    let connectionCount = 0

    for (let i = 0; i < particleCount && connectionCount < maxConnections; i++) {
      for (let j = i + 1; j < particleCount && connectionCount < maxConnections; j++) {
        const i3 = i * 3
        const j3 = j * 3

        const dx = positions[i3] - positions[j3]
        const dy = positions[i3 + 1] - positions[j3 + 1]
        const dz = positions[i3 + 2] - positions[j3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance < connectionDistance) {
          lines.push({
            start: [positions[i3], positions[i3 + 1], positions[i3 + 2]],
            end: [positions[j3], positions[j3 + 1], positions[j3 + 2]],
            indices: [i, j],
          })
          connectionCount++
        }
      }
    }

    setLineSegments(lines)
  }, [particleData.positions, particleCount, connectionDistance, isMobile])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (pointsRef.current && groupRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array
      const { velocities, phases } = particleData

      // Update particle positions with wave motion and mouse interaction
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        // Wave motion
        const waveX = Math.sin(time * 0.5 + phases[i]) * 0.3
        const waveY = Math.cos(time * 0.3 + phases[i] * 1.5) * 0.2
        const waveZ = Math.sin(time * 0.4 + phases[i] * 0.8) * 0.25

        // Mouse interaction - create ripple effect
        const mouseInfluence = 2.0
        const mouseX = mouse.current[0] * 5
        const mouseY = mouse.current[1] * 5

        const dx = positions[i3] - mouseX
        const dy = positions[i3 + 1] - mouseY
        const mouseDistance = Math.sqrt(dx * dx + dy * dy)
        const mouseEffect = Math.max(0, 1 - mouseDistance / 3) * mouseInfluence

        const ripple = Math.sin(mouseDistance * 2 - time * 3) * mouseEffect * 0.1

        // Scroll-based movement
        const scrollEffect = scrollY * 0.001

        // Apply all movements
        positions[i3] += velocities[i3] + waveX * 0.01 + ripple
        positions[i3 + 1] += velocities[i3 + 1] + waveY * 0.01 + scrollEffect
        positions[i3 + 2] += velocities[i3 + 2] + waveZ * 0.01

        // Boundary wrapping
        if (Math.abs(positions[i3]) > 6) positions[i3] *= -0.8
        if (Math.abs(positions[i3 + 1]) > 6) positions[i3 + 1] *= -0.8
        if (Math.abs(positions[i3 + 2]) > 6) positions[i3 + 2] *= -0.8
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true

      // Rotate the entire group
      groupRef.current.rotation.x = time * 0.02 + mouse.current[1] * 0.05
      groupRef.current.rotation.y = time * 0.03 + mouse.current[0] * 0.05
      groupRef.current.rotation.z = Math.sin(time * 0.01) * 0.1
    }
  })

  const particleColor = theme === "dark" ? "#ffffff" : "#000000"
  const lineColor = theme === "dark" ? "#ffffff" : "#666666"

  return (
    <group ref={groupRef}>
      {/* Main particle field */}
      <Points ref={pointsRef} positions={particleData.positions} stride={3}>
        <PointMaterial
          transparent
          size={0.015}
          sizeAttenuation={true}
          color={particleColor}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Connection lines - rendered as individual lines */}
      {lineSegments.map((line, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...line.start, ...line.end])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={lineColor} opacity={0.2} transparent />
        </line>
      ))}
    </group>
  )
}

// Floating geometric shapes
function FloatingShapes({ mouse, scrollY }) {
  const { theme } = useTheme()
  const isMobile = useMobile()
  const groupRef = useRef()

  const shapeCount = isMobile ? 3 : 6

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (groupRef.current && groupRef.current.children) {
      groupRef.current.children.forEach((child, index) => {
        // Individual rotation for each shape
        child.rotation.x = time * (0.5 + index * 0.1)
        child.rotation.y = time * (0.3 + index * 0.15)
        child.rotation.z = time * (0.2 + index * 0.05)

        // Floating motion
        child.position.y = Math.sin(time * 0.5 + index) * 0.5
        child.position.x = Math.cos(time * 0.3 + index * 2) * 0.3

        // Mouse interaction
        const mouseInfluence = 0.5
        child.position.x += mouse.current[0] * mouseInfluence
        child.position.y += mouse.current[1] * mouseInfluence

        // Scroll effect
        child.position.z = Math.sin(scrollY * 0.01 + index) * 0.2

        // Pulsing scale
        const scale = 1 + Math.sin(time * 2 + index) * 0.1
        child.scale.setScalar(scale)
      })
    }
  })

  const shapeColor = theme === "dark" ? "#4ade80" : "#22c55e"

  return (
    <group ref={groupRef}>
      {Array.from({ length: shapeCount }, (_, i) => {
        const ShapeComponent = [
          () => <boxGeometry args={[0.1, 0.1, 0.1]} />,
          () => <sphereGeometry args={[0.05, 8, 8]} />,
          () => <octahedronGeometry args={[0.06]} />,
          () => <tetrahedronGeometry args={[0.07]} />,
          () => <icosahedronGeometry args={[0.05]} />,
          () => <dodecahedronGeometry args={[0.05]} />,
        ][i % 6]

        return (
          <mesh key={i} position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 4]}>
            <ShapeComponent />
            <meshBasicMaterial color={shapeColor} transparent opacity={0.3} wireframe />
          </mesh>
        )
      })}
    </group>
  )
}

// Simplified wave effect
function SimpleWaves({ mouse, scrollY }) {
  const { theme } = useTheme()
  const waveRef = useRef()

  // Create a simple plane geometry
  const waveGeometry = useMemo(() => {
    return new THREE.PlaneGeometry(10, 10, 15, 15)
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (waveRef.current) {
      const positions = waveRef.current.geometry.attributes.position.array

      // Update wave positions
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]

        // Simple wave pattern
        positions[i + 2] =
          Math.sin(x * 0.5 + time) * 0.2 +
          Math.cos(y * 0.5 + time * 0.8) * 0.2 +
          Math.sin(time * 0.5) * 0.1 +
          scrollY * 0.0005
      }

      waveRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const waveColor = theme === "dark" ? "#3b82f6" : "#1d4ed8"

  return (
    <mesh ref={waveRef} geometry={waveGeometry} position={[0, 0, -3]} rotation={[-Math.PI / 2, 0, 0]}>
      <meshBasicMaterial color={waveColor} transparent opacity={0.1} wireframe side={THREE.DoubleSide} />
    </mesh>
  )
}

function Scene() {
  const mouse = useRef([0, 0])
  const [scrollY, setScrollY] = useState(0)
  const { viewport } = useThree()

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current = [(event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1]
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <EnhancedParticleField mouse={mouse} scrollY={scrollY} />
      <FloatingShapes mouse={mouse} scrollY={scrollY} />
      <SimpleWaves mouse={mouse} scrollY={scrollY} />
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
