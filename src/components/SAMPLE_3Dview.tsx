import { Canvas, useLoader } from "@react-three/fiber";
import { Bounds, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { characters } from "../data/characters";

const character = characters.find((item) => item.fileName === "Present02.glb");

function CharacterModel() {
  const gltf = useLoader(GLTFLoader, character!.modelUrl);

  return <primitive object={gltf.scene} />;
}

export default function SAMPLE_3DView() {
  if (!character) {
    return <p>Present02.glb が見つかりません。</p>;
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
        <color attach="background" args={["#eef2ed"]} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[4, 6, 4]} intensity={2} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <CharacterModel />
          </Bounds>
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
