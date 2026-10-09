import { createRoot } from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { createWebGpuRenderer } from "./lib/createWebGpuRenderer.ts";

createRoot(document.getElementById("root")!).render(
  <Canvas gl={createWebGpuRenderer}>
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  </Canvas>,
);
