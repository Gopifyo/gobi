import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const DNAStrand = () => {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate DNA structure
  const { positions, colors, lines } = useMemo(() => {
    const numPairs = 60;
    const radius = 2.5;
    const verticalSpacing = 0.4;
    
    const pos = [];
    const col = [];
    const linePos = [];
    
    // Core brand colors: Cyan, Emerald, Violet, Amber
    const colorChoices = [
      new THREE.Color('#22d3ee'), 
      new THREE.Color('#34d399'), 
      new THREE.Color('#a78bfa'), 
      new THREE.Color('#fbbf24')  
    ];

    for (let i = 0; i < numPairs; i++) {
      const t = i * 0.3;
      const y = (i - numPairs / 2) * verticalSpacing;
      
      // Helix 1
      const x1 = Math.cos(t) * radius;
      const z1 = Math.sin(t) * radius;
      
      // Helix 2
      const x2 = Math.cos(t + Math.PI) * radius;
      const z2 = Math.sin(t + Math.PI) * radius;
      
      pos.push(x1, y, z1, x2, y, z2);
      linePos.push(x1, y, z1, x2, y, z2);
      
      const c1 = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      const c2 = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      
      col.push(c1.r, c1.g, c1.b, c2.r, c2.g, c2.b);
    }
    
    return {
      positions: new Float32Array(pos),
      colors: new Float32Array(col),
      lines: new Float32Array(linePos)
    };
  }, []);

  // Generate floating background particles (representing neural nodes/data)
  const bgParticles = useMemo(() => {
    const pos = [];
    const count = 300;
    for (let i = 0; i < count; i++) {
      pos.push(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20 - 10
      );
    }
    return new Float32Array(pos);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.5;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
      particlesRef.current.rotation.x = t * 0.02;
    }
  });

  return (
    <>
      <group ref={groupRef} position={[5, 0, -10]} rotation={[0.2, 0, 0]}>
        {/* DNA Nodes */}
        <Points positions={positions} colors={colors}>
          <PointMaterial
            transparent
            vertexColors
            size={0.6}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
        {/* Base Pair Connections */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[lines, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#334155" transparent opacity={0.3} />
        </lineSegments>
      </group>

      {/* Floating Ambient Particles */}
      <Points ref={particlesRef} positions={bgParticles}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </>
  );
};

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <fog attach="fog" args={['#020617', 10, 30]} />
        <DNAStrand />
      </Canvas>
    </div>
  );
};

export default BackgroundAnimation;