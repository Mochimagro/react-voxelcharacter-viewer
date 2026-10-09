import { createRoot } from "react-dom/client";
import { StrictMode, useState } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import CharacterGrid from "./components/CharacterGrid";
import CharacterViewer from "./components/CharacterViewer";
import type { Character } from "./types/character";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );

  if (selectedCharacter) {
    return (
      <CharacterViewer
        character={selectedCharacter}
        onBack={() => setSelectedCharacter(null)}
      />
    );
  }

  return <CharacterGrid onSelectCharacter={setSelectedCharacter} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
