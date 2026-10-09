import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import CharacterGrid from "./components/CharacterGrid";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <CharacterGrid />
    </ChakraProvider>
  </StrictMode>,
);
