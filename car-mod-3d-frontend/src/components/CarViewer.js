import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function CarModel({ modelPath, highlightedPart }) {
  const { scene } = useGLTF(modelPath);

  // Traverse scene and apply highlight
  scene.traverse((child) => {
    if (child.isMesh) {
      if (child.name === highlightedPart) {
        child.material.emissive.set("red"); // Highlight part
        child.material.emissiveIntensity = 0.5;
      } else {
        child.material.emissive.set("black"); // Reset others
      }
    }
  });

  return <primitive object={scene} scale={0.5} />;
}

export default function CarViewer({ brand, model, highlightedPart }) {
  if (!brand || !model) {
    return <p className="text-center my-4">Select a brand and model</p>;
  }

  return (
    <Canvas style={{ height: "500px", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={<p>Loading 3D Model...</p>}>
        <CarModel
          modelPath={`/models/${brand}/${model}.glb`}
          highlightedPart={highlightedPart}
        />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
