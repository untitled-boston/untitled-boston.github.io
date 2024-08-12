import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface ThumbnailModelProps {
  assetUrl: string; // URL to the 3D model
}

const Model: React.FC<{ url: string }> = ({ url }) => {
  const modelRef = useRef<THREE.Group>(null!);

  // Load the GLTF model
  const gltf = useLoader(GLTFLoader, url);

  // Rotate and float the model
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Continuous rotation
      modelRef.current.position.y = Math.sin(time * 2) * 0.1; // Floating effect
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={1} />;
};

export const ThumbnailModel: React.FC<ThumbnailModelProps> = ({ assetUrl }) => {
  if (!assetUrl || assetUrl.length === 0) return;

  return (
    <Canvas
      style={{ width: 100, height: 100 }} // Set the canvas size
      camera={{ position: [0, 1, 3], fov: 50 }} // Adjust the camera to fit the model
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Model url={assetUrl} />
      <OrbitControls enableZoom={false} enablePan={false} />{" "}
      {/* Optional: For user interaction */}
    </Canvas>
  );
};
