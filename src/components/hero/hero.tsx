import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, useAnimations, Plane } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type Props = {
  modelPath: string;
};

function Model({modelPath}: Props) {
  const group: any = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, group);
  const [currentAnimation, setCurrentAnimation] = useState('Idle');

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    if (actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play();
    }

    return () => {
      Object.values(actions).forEach((action) => action?.stop());
    };
  }, [scene, actions, currentAnimation]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group} scale={[2, 2, 2]}>
      <primitive object={scene} />
    </group>
  );
}

function Ground() {
  return (
    <Plane
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, 0]} 
      args={[20, 20]} 
    >
      <shadowMaterial transparent opacity={0.5} />
    </Plane>
  );
}

export default function HeroModel({modelPath}: Props) {
  return (
    <div className="w-full h-full max-h-[500px]">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }} className='w-full h-full'>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.2} 
          castShadow
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-bias={-0.00005} 
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Suspense fallback={null}>
          <Model modelPath={modelPath}/>
          <Ground />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          zoomToCursor={false}
          mouseButtons={{ LEFT: undefined, MIDDLE: undefined, RIGHT: undefined}}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/orc.glb');