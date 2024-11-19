"use client"

import React, { Suspense, useRef } from "react"
import { Html, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Model() {
  const group = useRef<any>()
  const { nodes, materials } = useGLTF(
      "https://rwxrdxvxndclnqvznxfj.supabase.co/storage/v1/object/public/test/scene-final-test.glb?t=2023-11-29T02%3A03%3A37.877Z"
  ) as any

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.cos(t / 2) / 20 + 0.25,
        0.1
    )
    group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(t / 4) / 20,
        0.1
    )
    group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        Math.sin(t / 8) / 20,
        0.1
    )
    group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        (-2 + 0.9 * Math.sin(t / 2)) / 2,
        0.1
    )
  })

  return (
      <group ref={group} dispose={null}>
        <group rotation-x={-0.225}>
          <group position={[-0, -3, -0.3]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
                geometry={nodes.CRTMonitor__0.geometry}
                material={materials["Scene_-_Root"]}
                scale={0.3}
            />
            <Html
                className="content border-lg h-[195px] w-[250px] overflow-y-auto rounded-sm bg-white p-4"
                rotation-x={Math.PI / 2.06}
                position={[0, -3.768, 4.63]}
                transform
                occlude
            >
              <div className="wrapper overflow-hidden" onPointerDown={(e) => e.stopPropagation()}>
                <h1 className="font-bold text-black text-center text-xl tracking-tighter md:text-4xl">
                  This should<br /> be your Heading
                </h1>
              </div>
            </Html>
          </group>
        </group>
      </group>
  )
}

export function FloatingPcGrayscale() {
  return (
      <div className="h-[400px] w-[400px] cursor-grab">
        <Canvas camera={{ position: [-10, 0, -20], fov: 55 }}>
          <pointLight position={[-10, 10, -40]} intensity={10000} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
              <Model />
            </group>
          </Suspense>
          <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.2}
              maxPolarAngle={Math.PI / 2.2}
              minAzimuthAngle={Math.PI / 1.1}
              maxAzimuthAngle={-Math.PI / 1.3}
          />
        </Canvas>
      </div>
  )
}