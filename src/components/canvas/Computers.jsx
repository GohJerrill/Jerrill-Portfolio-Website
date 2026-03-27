import React, { Suspense, useEffect, useState, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = memo(function Computers({ isMobile }) {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.2} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.9}
        castShadow={false}
      />
      <pointLight intensity={0.8} />

      <primitive
        object={computer.scene}
        // Oringinally the Computer one: 0.83
        scale={isMobile ? 0.62 : 0.75}
        position={isMobile ? [0, -2.2, -2.0] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        // Original One Here: 
        // scale={isMobile ? 0.7 : 0.75}
        // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
});

const ComputersCanvas = memo(function ComputersCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
});

useGLTF.preload("/desktop_pc/scene.gltf");

export default ComputersCanvas;