'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Float,
  Stars,
  Sparkles,
  Torus,
  TorusKnot,
  Octahedron,
  Icosahedron,
  MeshDistortMaterial,
  Environment,
  Trail,
} from '@react-three/drei'
import * as THREE from 'three'

/* Centerpiece — glowing, distorting torus knot that slowly tumbles */
function Centerpiece() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.18
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.26
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.6}>
      <TorusKnot ref={meshRef} args={[1.35, 0.42, 220, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#1FE3F2"
          attach="material"
          distort={0.35}
          speed={1.8}
          roughness={0.05}
          metalness={0.95}
          emissive="#0A3A40"
          emissiveIntensity={0.6}
        />
      </TorusKnot>
    </Float>
  )
}

/* Two counter-rotating rings orbiting the centerpiece */
function OrbitRings() {
  const ref1 = useRef<THREE.Mesh>(null)
  const ref2 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref1.current) {
      ref1.current.rotation.x = t * 0.35
      ref1.current.rotation.z = t * 0.2
    }
    if (ref2.current) {
      ref2.current.rotation.y = -t * 0.4
      ref2.current.rotation.z = -t * 0.15
    }
  })

  return (
    <>
      <Torus ref={ref1} args={[3.1, 0.03, 16, 120]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial color="#0EA5E9" emissive="#0EA5E9" emissiveIntensity={0.9} metalness={1} roughness={0.1} />
      </Torus>
      <Torus ref={ref2} args={[3.7, 0.025, 16, 120]} rotation={[-Math.PI / 4, Math.PI / 5, 0]}>
        <meshStandardMaterial color="#1FE3F2" emissive="#1FE3F2" emissiveIntensity={0.7} metalness={1} roughness={0.1} />
      </Torus>
    </>
  )
}

/* Small glowing shapes drifting around with light trails */
function OrbitingShapes() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.12
    }
  })

  const shapes = useMemo(
    () => [
      { pos: [4.2, 1.2, -1] as [number, number, number], color: '#1FE3F2', kind: 'octa' },
      { pos: [-4, -1.3, -1.4] as [number, number, number], color: '#7DD3FC', kind: 'ico' },
      { pos: [2.6, -2.6, 1.2] as [number, number, number], color: '#0EA5E9', kind: 'octa' },
      { pos: [-2.8, 2.4, 0.6] as [number, number, number], color: '#1FE3F2', kind: 'ico' },
      { pos: [0.5, 3.4, -2] as [number, number, number], color: '#7DD3FC', kind: 'octa' },
    ],
    []
  )

  return (
    <group ref={group}>
      {shapes.map((s, i) => (
        <Float key={i} speed={1.2 + i * 0.25} rotationIntensity={3} floatIntensity={2.4}>
          <Trail width={1.2} length={4} color={s.color} attenuation={(t) => t * t}>
            {s.kind === 'octa' ? (
              <Octahedron args={[0.28]} position={s.pos}>
                <meshStandardMaterial
                  color={s.color}
                  emissive={s.color}
                  emissiveIntensity={0.9}
                  metalness={0.9}
                  roughness={0.1}
                />
              </Octahedron>
            ) : (
              <Icosahedron args={[0.24]} position={s.pos}>
                <meshStandardMaterial
                  color={s.color}
                  emissive={s.color}
                  emissiveIntensity={0.9}
                  wireframe
                />
              </Icosahedron>
            )}
          </Trail>
        </Float>
      ))}
    </group>
  )
}

/* Whole scene gently follows the cursor for a parallax feel */
function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null)
  const { viewport } = useThree()

  useFrame((state) => {
    if (group.current) {
      const x = (state.pointer.x * viewport.width) / 24
      const y = (state.pointer.y * viewport.height) / 24
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.3, 0.04)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.2, 0.04)
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, x * 0.15, 0.04)
    }
  })

  return <group ref={group}>{children}</group>
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#1FE3F2" />
        <pointLight position={[-10, -8, -6]} intensity={1.4} color="#0EA5E9" />
        <pointLight position={[0, 6, 6]} intensity={1} color="#7DD3FC" />

        <ParallaxRig>
          <Centerpiece />
          <OrbitRings />
          <OrbitingShapes />
        </ParallaxRig>

        <Sparkles count={90} scale={9} size={2.2} speed={0.35} color="#1FE3F2" opacity={0.7} />
        <Stars radius={60} depth={50} count={400} factor={2.2} saturation={0} fade speed={1} />

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
