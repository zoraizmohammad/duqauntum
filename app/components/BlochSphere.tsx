"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Sphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.18;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 48, 48]} />
      <meshPhongMaterial
        color="#3b2472"
        wireframe
        transparent
        opacity={0.18}
        emissive="#a78bfa"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function Equator() {
  const ref = useRef<THREE.Mesh>(null!);

  const geometry = useMemo(() => {
    const geo = new THREE.TorusGeometry(2, 0.012, 8, 128);
    return geo;
  }, []);

  return (
    <mesh ref={ref} geometry={geometry} rotation={[Math.PI / 2, 0, 0]}>
      <meshBasicMaterial color="#00c4b4" transparent opacity={0.6} />
    </mesh>
  );
}

function StateVector() {
  const ref = useRef<THREE.Group>(null!);
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current += delta * 0.5;
    const theta = 0.9 + 0.4 * Math.sin(t.current * 0.7);
    const phi = t.current * 0.8;
    ref.current.rotation.y = phi;
    ref.current.rotation.z = theta - Math.PI / 2;
  });

  return (
    <group ref={ref}>
      {/* Arrow shaft */}
      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 2.1, 8]} />
        <meshBasicMaterial color="#00c4b4" />
      </mesh>
      {/* Arrow head */}
      <mesh position={[0, 2.22, 0]}>
        <coneGeometry args={[0.14, 0.35, 8]} />
        <meshBasicMaterial color="#00c4b4" />
      </mesh>
    </group>
  );
}

function PoleLabels() {
  const { camera } = useThree();
  void camera; // suppress unused warning — OrbitControls handles it

  return (
    <>
      {/* North pole marker |0⟩ */}
      <mesh position={[0, 2.3, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color="white" />
      </mesh>
      {/* South pole marker |1⟩ */}
      <mesh position={[0, -2.3, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color="#a78bfa" />
      </mesh>
      {/* Axis line */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 5, 6]} />
        <meshBasicMaterial color="white" transparent opacity={0.25} />
      </mesh>
      {/* Equatorial axis X */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.01, 0.01, 4.2, 6]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

export default function BlochSphere() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#00c4b4" />
        <pointLight position={[-5, -3, -3]} intensity={0.6} color="#a78bfa" />

        <Sphere />
        <Equator />
        <StateVector />
        <PoleLabels />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={(Math.PI * 5) / 6}
        />
      </Canvas>
    </div>
  );
}
