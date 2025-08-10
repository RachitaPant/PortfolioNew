"use client";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Center,
} from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { useInView } from "react-intersection-observer";
function Model() {
  const { scene, animations } = useGLTF("/models/model.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const firstAnimation = Object.keys(actions)[0];
    if (firstAnimation) {
      actions[firstAnimation]?.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return <primitive object={scene} scale={1.5} />;
}

export default function ThreeDScene() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="w-full h-[500px] flex items-center justify-center overflow-visible"
    >
      <Canvas
        camera={{ position: [0, 2, 8], fov: 40 }}
        frameloop={inView ? "always" : "never"}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Center>
            <Model />
          </Center>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
