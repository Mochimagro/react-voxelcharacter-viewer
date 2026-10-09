import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Canvas } from "@react-three/fiber";
import { createWebGpuRenderer } from "./lib/createWebGpuRenderer.ts";

createRoot(document.getElementById("root")!).render(
  <Canvas gl={createWebGpuRenderer}>
    <mesh>
      <sphereGeometry />
      <meshNormalMaterial />
    </mesh>
  </Canvas>,
);
