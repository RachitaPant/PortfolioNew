"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Center } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MODEL_URL = "/models/model.glb";

function Model() {
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const firstAnimation = Object.keys(actions)[0];
    if (!firstAnimation) return;

    const action = actions[firstAnimation];
    action?.reset().fadeIn(0.5).play();

    // The action kept playing against a stale mixer if the scene remounted.
    return () => {
      action?.fadeOut(0.3).stop();
    };
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
        /*
         * dpr was uncapped, so on a 2x laptop the canvas rendered 4x the
         * pixels and on a 3x phone 9x — for a decorative model that is pure
         * waste. Capping at 1.5 is visually indistinguishable here and is the
         * single largest GPU saving on the page.
         */
        dpr={[1, 1.5]}
        camera={{ position: [0, 2, 8], fov: 40 }}
        // Already correct: stop rendering entirely when scrolled out of view.
        frameloop={inView ? "always" : "never"}
        // Adaptive quality — drops resolution rather than dropping frames.
        performance={{ min: 0.5 }}
        gl={{
          // MSAA on a decorative model is not worth the fill-rate cost, and at
          // dpr 1.5 the aliasing it would hide is barely visible.
          antialias: false,
          powerPreference: "high-performance",
          // Required: the paper texture shows through behind the model.
          alpha: true,
          // Nothing here uses the stencil buffer.
          stencil: false,
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Center>
            <Model />
          </Center>
        </Suspense>
        <OrbitControls
          /*
           * enableZoom is on by default, which meant the mouse wheel over the
           * canvas zoomed the model instead of scrolling the page — the page
           * simply stopped scrolling when the cursor crossed the 3D scene.
           * Rotation (the interaction that matters) is untouched.
           */
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_URL);
