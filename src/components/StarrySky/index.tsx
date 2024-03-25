"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Stars } from "@react-three/drei";

const StarrySky = () => {
  return (
    <div className="absolute w-full h-full -top-8 z-0">
      <Canvas orthographic camera={{ position: [0, 0, 200], zoom: 10 }}>
        <Environment preset="city" />
        <Stars
          // radius={100}
          depth={50}
          count={5000}
          factor={4}
          // saturation={0}
          // fade
          speed={2}
        />
      </Canvas>
    </div>
  );
};

export default StarrySky;
