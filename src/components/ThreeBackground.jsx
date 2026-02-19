import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function FloatingIcosahedron() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={1.15}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function FloatingOctahedron() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[3.5, 1.5, -2]} scale={0.8}>
        <octahedronGeometry args={[1]} />
        <MeshDistortMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={1.2}
          roughness={0.3}
          metalness={0.7}
          distort={0.2}
          speed={3}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function FloatingTorus() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
      <mesh ref={meshRef} position={[-3.5, -1, -1]} scale={0.7}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
        <MeshDistortMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={1.1}
          roughness={0.4}
          metalness={0.6}
          distort={0.15}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  )
}

export default function ThreeBackground() {
  {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true }}
      >
        {/* Solid Deep Background */}
        <color attach="background" args={["#050816"]} />

        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -5]} intensity={0.6} color="#a855f7" />

        <Stars
          radius={120}
          depth={60}
          count={2000}
          factor={3}
          saturation={0}
          fade
          speed={0.6}
        />

        <FloatingIcosahedron />
        <FloatingOctahedron />
        <FloatingTorus />
      </Canvas>
    </div>
  )
}

}
