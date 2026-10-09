import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import SAMPLE_3DView from "./components/SAMPLE_3Dview";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <SAMPLE_3DView />
    </ChakraProvider>
  </StrictMode>,
);
