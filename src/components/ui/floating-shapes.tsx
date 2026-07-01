'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, Icosahedron, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

function Shape1() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1, 1]} position={[-1.5, 0.5, 0]}>
        <meshPhysicalMaterial
          color="#3b82f6" // Primary blue
          roughness={0.1}
          transmission={0.9} // Glass effect
          thickness={0.5}
          ior={1.5}
          envMapIntensity={1}
        />
      </Icosahedron>
    </Float>
  );
}

function Shape2() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.2;
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <TorusKnot ref={meshRef} args={[0.6, 0.2, 128, 32]} position={[1.5, -0.5, -1]}>
        <meshPhysicalMaterial
          color="#8b5cf6" // Accent purple
          roughness={0.2}
          transmission={1}
          thickness={1}
          ior={1.5}
        />
      </TorusKnot>
    </Float>
  );
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        
        <Shape1 />
        <Shape2 />
        
        <Environment preset="city" />
        
        {/* Soft shadow plane underneath */}
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2} 
          far={4} 
          color="#000000" 
        />
      </Canvas>
    </div>
  );
}
