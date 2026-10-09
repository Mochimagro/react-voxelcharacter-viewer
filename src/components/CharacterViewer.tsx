import { Bounds, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Box, Button } from "@chakra-ui/react";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import type { Character } from "../types/character";

type CharacterViewerProps = {
  character: Character;
  onBack?: () => void;
};

function CharacterModel({ modelUrl }: { modelUrl: string }) {
  const gltf = useLoader(GLTFLoader, modelUrl);

  return <primitive object={gltf.scene} />;
}

export default function CharacterViewer({
  character,
  onBack,
}: CharacterViewerProps) {
  return (
    <Box position="relative" width="100%" height="100vh">
      {onBack && (
        <Button
          position="absolute"
          top="4"
          left="4"
          zIndex="1"
          onClick={onBack}
        >
          一覧へ戻る
        </Button>
      )}
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
        <color attach="background" args={["#eef2ed"]} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[4, 6, 4]} intensity={2} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <CharacterModel modelUrl={character.modelUrl} />
          </Bounds>
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>
    </Box>
  );
}
