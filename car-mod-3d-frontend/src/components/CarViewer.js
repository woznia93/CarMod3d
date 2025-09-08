import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

// Temporary Box component until we have a car model
function TemporaryBox() {
  return (
    <Box args={[1, 1, 1]}>
      <meshStandardMaterial color="blue" />
    </Box>
  );
}

export default function CarViewer() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <TemporaryBox />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
